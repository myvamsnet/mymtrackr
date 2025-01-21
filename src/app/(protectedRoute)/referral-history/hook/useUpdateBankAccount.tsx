import {
  accountDetails,
  updateUserBankDetails,
} from "@/app/actions/updateUserBankDetails";
import useGetBankLists from "@/hooks/useGetBankLists";
import useModal from "@/hooks/useModal";
import useValidateBankAccount from "@/hooks/useValidateBankAccount";
import { handleError } from "@/lib/helper/handleError";
import {
  acountDetailSchema,
  AcountDetailSchemaType,
} from "@/lib/Schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";

export const useUpdateBankAccount = () => {
  const queryClient = useQueryClient();
  const { onCancel, onConfirm, modal } = useModal();
  const { bankListsArray } = useGetBankLists();

  // Initialize form with validation schema
  const { control, handleSubmit, watch } = useForm<AcountDetailSchemaType>({
    resolver: zodResolver(acountDetailSchema),
    defaultValues: {
      bankName: "",
      accountNumber: "",
    },
  });

  // Debounce account number and bank name to reduce API calls
  const [accountNumber] = useDebounce(watch("accountNumber"), 2000);
  const [bankName] = useDebounce(watch("bankName"), 2000);

  // Fetch bank validation details
  const {
    data: validationData,
    isLoading: isValidationLoading,
    error: validationError,
  } = useValidateBankAccount({
    account_number: accountNumber,
    bank_code: bankName,
  });

  // Mutation to update user bank details
  const { isPending, mutate } = useMutation({
    mutationFn: async (payload: accountDetails) => {
      const formData = new FormData();
      formData.append("accountName", payload.accountName);
      formData.append("accountNumber", payload.accountNumber);
      formData.append("bankName", payload.bankName);

      const response = await updateUserBankDetails(formData);
      if (!response?.success) throw new Error(response?.error);
      return response?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      onCancel();
      toast.success("Bank details updated successfully");
    },
    onError: handleError,
  });

  const bankDetails = validationData?.data;
  const selectedBank = bankListsArray?.find((list) => list?.value === bankName);
  // Submit handler
  const onSubmit = (formData: AcountDetailSchemaType) => {
    if (!bankDetails?.account_name || !selectedBank?.label) return;

    const payload = {
      accountNumber: formData.accountNumber,
      accountName: bankDetails.account_name,
      bankName: selectedBank.label,
    };

    mutate(payload);
  };

  return {
    control,
    handleSubmit,
    accountNumber,
    bankName,
    bankDetails,
    isValidationLoading,
    validationError,
    onConfirm,
    modal,
    isPending,
    onSubmit,
    bankListsArray,
    onCancel,
  };
};
