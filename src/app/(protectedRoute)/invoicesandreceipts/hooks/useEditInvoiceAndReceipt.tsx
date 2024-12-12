import { useGetUser } from "@/hooks/useGetUser";
import useModal from "@/hooks/useModal";
import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import {
  calculateGrandTotal,
  calculateTotal,
} from "@/lib/helper/calculateGrandTotal";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { handleError } from "@/lib/helper/handleError";
import { isValidDate } from "@/lib/helper/isValidDate";
import {
  invoiceAndReceiptSchema,
  InvoiceAndReceiptSchemaSchemaType,
} from "@/lib/Schema/invoiceAndReceiptSchema";
import {
  Data,
  SingleInvoicesAndReceiptsResponseData,
} from "@/types/invoicesandreceipts";
import useInvoiceAndReceiptStore, {
  InvoiceAndReceiptData,
  InvoiceAndReceiptType,
} from "@/zustand/invoiceAndReceiptStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useEditInvoiceAndReceipt = (data: Data) => {
  const { id } = useParams() as {
    id: string;
  };
  const redirect = useRedirect();
  const { user } = useGetUser();
  const businessData = user?.businessProfile;
  const [results, setResults] = useState<DiscountAndDeliveryFeeType>({
    delivery: "0",
    discount: "0",
  });
  const { modal, onCancel } = useModal();
  const [values, setValues] = useState({
    discount: "0",
    delivery: "0",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitDiscountAndDeliveryFee = (
    data: DiscountAndDeliveryFeeType
  ) => {
    setResults((prevState: ResultsState) => ({
      ...prevState, // Preserve the previous state
      ...data, // Merge new data into the state
    }));

    onCancel();
  };

  const { invoiceAndReceiptData, clearInvoiceAndReceipt } =
    useInvoiceAndReceiptStore();
  const params = useParams() as {
    add: InvoiceAndReceiptType;
  };

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InvoiceAndReceiptSchemaSchemaType>({
    resolver: zodResolver(invoiceAndReceiptSchema),
    defaultValues: {
      issueDate: new Date(),
      dueDate: new Date(),
      customerName: "",
      items: [{ description: "", quantity: "", price: "" }],
    },
    // mode: "onSubmit",
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "items",
  });

  useEffect(() => {
    if (data !== null) {
      setValue("customerName", data?.customerName ?? new Date());
      setValue(
        "dueDate",
        isValidDate(data?.dueDate) ? new Date(data?.dueDate) : new Date()
      );

      setValue(
        "issueDate",
        isValidDate(data?.issueDate) ? new Date(data?.issueDate) : new Date()
      );

      setValue("items", data?.items);
      setValues({
        discount: String(data?.discount),
        delivery: String(data?.delivery),
      });
      handleSubmitDiscountAndDeliveryFee({
        delivery: data?.delivery,
        discount: data?.discount,
      });
    }
  }, [data, setValue]);

  const getTotalByIndex = (index: number) => {
    const items = watch("items") || [];
    if (!Array.isArray(items)) return null;

    const item = items[index];
    if (!item) return null;

    return {
      description: item.description || "",
      quantity: item.quantity || "0",
      price: item.price || "0",
    };
  };
  const validateId = Boolean(id === data?.id);
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: InvoiceAndReceiptData) => {
      if (!validateId) return;
      const { data } = await axiosInstance.put(
        `/invoicesandreceipts/${id}`,
        payload
      );
      return data;
    },
    onSuccess: (data: SingleInvoicesAndReceiptsResponseData) => {
      if (data.success) {
        toast.success(data?.message);
        redirect(`/invoicesandreceipts/${data?.data?.type}`);
      }
    },
    onError: handleError,
  });

  const onSubmit = (values: InvoiceAndReceiptSchemaSchemaType) => {
    if (!user?.id && !businessData?.id) return;
    const payload = {
      issueDate: dayjs(values?.issueDate).format("dddd, MMMM D, YYYY h:mm A"),
      dueDate: dayjs(values?.dueDate).format("dddd, MMMM D, YYYY h:mm A"),
      customerName: values.customerName,
      items: values.items,
      discount: results.discount,
      delivery: results.delivery,
      user_id: user?.id,
      business_id: businessData?.id,
      type: data?.type,
    } as InvoiceAndReceiptData;

    mutate(payload);
  };

  const itemData = watch("items");

  const subTotal = currencyFormatter(Number(calculateTotal(itemData)));
  const checkSubTotalAvailable = calculateTotal(itemData);

  const grandTotal = currencyFormatter(
    calculateGrandTotal(
      watch("items"),
      results.discount as string,
      results.delivery as string
    )
  );
  return {
    onSubmit,
    watch,
    control,
    handleSubmit,
    getTotalByIndex,
    fields,
    append,
    remove,
    paramType: data?.type,
    invoiceAndReceiptData,
    modal,
    onCancel,
    handleChange,
    values,
    isPending,
    businessData,
    handleSubmitDiscountAndDeliveryFee,
    results,
    subTotal,
    grandTotal,
    checkSubTotalAvailable,
    mutate,
  };
};
interface DiscountAndDeliveryFeeType {
  discount?: string;
  delivery?: string;
}

type ResultsState = {
  [key: string]: any; // Represents the shape of the state, allowing for dynamic keys
};
