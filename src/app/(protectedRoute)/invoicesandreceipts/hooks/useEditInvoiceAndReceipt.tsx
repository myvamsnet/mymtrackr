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
  const { id } = useParams<{ id: string }>();
  const redirect = useRedirect();
  const { user } = useGetUser();
  const businessData = user?.businessProfile;
  const { modal, onCancel } = useModal();

  const [values, setValues] = useState({ discount: "0", delivery: "0" });
  const [results, setResults] = useState({ discount: "0", delivery: "0" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitDiscountAndDeliveryFee = (
    data: DiscountAndDeliveryFeeType
  ) => {
    setResults((prev) => ({ ...prev, ...data }));
    onCancel();
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
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  useEffect(() => {
    if (data) {
      setValue("customerName", data.customerName || "");
      setValue(
        "dueDate",
        isValidDate(data.dueDate) ? new Date(data.dueDate) : new Date()
      );
      setValue(
        "issueDate",
        isValidDate(data.issueDate) ? new Date(data.issueDate) : new Date()
      );
      setValue("items", data.items || []);
      setValues({
        discount: String(data.discount),
        delivery: String(data.delivery),
      });
      setResults({ discount: data.discount, delivery: data.delivery });
    }
  }, [data, setValue]);

  const getTotalByIndex = (index: number) => {
    const items = watch("items") || [];
    return items[index] || { description: "", quantity: "0", price: "0" };
  };

  const validateId = Boolean(id === data?.id);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: Partial<InvoiceAndReceiptData>) => {
      if (!validateId) return;
      const response = await axiosInstance.put(
        `/invoicesandreceipts/${id}`,
        payload
      );
      return response.data;
    },
    onSuccess: (response: SingleInvoicesAndReceiptsResponseData) => {
      if (response.success) {
        toast.success(response.message);
        redirect(`/invoicesandreceipts/${response.data.type}`);
      }
    },
    onError: handleError,
  });

  const onSubmit = (values: InvoiceAndReceiptSchemaSchemaType) => {
    if (!user?.id || !businessData?.id) return;

    const payload: InvoiceAndReceiptData = {
      issueDate: dayjs(values.issueDate).format("dddd, MMMM D, YYYY h:mm A"),
      dueDate: dayjs(values.dueDate).format("dddd, MMMM D, YYYY h:mm A"),
      customerName: values.customerName,
      items: values.items,
      discount: results.discount,
      delivery: results.delivery,
      user_id: user.id,
      business_id: businessData.id,
      type: data.type as InvoiceAndReceiptType,
    };

    mutate(payload);
  };

  const itemData = watch("items");
  const subTotal = currencyFormatter(calculateTotal(itemData));
  const grandTotal = currencyFormatter(
    calculateGrandTotal(itemData, results.discount, results.delivery)
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
    invoiceAndReceiptData: data,
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
    mutate,
  };
};

interface DiscountAndDeliveryFeeType {
  discount?: string;
  delivery?: string;
}
