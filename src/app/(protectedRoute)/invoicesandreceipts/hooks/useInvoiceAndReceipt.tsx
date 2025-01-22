"use client"
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
import { SingleInvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
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

export const useInvoiceAndReceipt = () => {
  const redirect = useRedirect();
  const { user } = useGetUser();
  const businessData = user?.businessProfile;
  const [results, setResults] = useState<DiscountAndDeliveryFeeType>({
    delivery: "0",
    discount: "0",
  });
  const { modal, onConfirm, onCancel } = useModal();
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

  const {
    setInvoiceAndReceipt,
    invoiceAndReceiptData,
    clearInvoiceAndReceipt,
  } = useInvoiceAndReceiptStore();
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
    if (invoiceAndReceiptData !== null) {
      setValue(
        "customerName",
        invoiceAndReceiptData.customerName ?? new Date()
      );
      setValue(
        "dueDate",
        isValidDate(invoiceAndReceiptData.dueDate)
          ? new Date(invoiceAndReceiptData.dueDate)
          : new Date()
      );

      setValue(
        "issueDate",
        isValidDate(invoiceAndReceiptData.issueDate)
          ? new Date(invoiceAndReceiptData.issueDate)
          : new Date()
      );

      setValue("items", invoiceAndReceiptData.items);
      setValues({
        discount: String(invoiceAndReceiptData.discount),
        delivery: String(invoiceAndReceiptData.delivery),
      });
    }
  }, [invoiceAndReceiptData, setValue]);

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

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: InvoiceAndReceiptData) => {
      const { data } = await axiosInstance.post(
        "/invoicesandreceipts",
        payload
      );
      return data;
    },
    onSuccess: (data: SingleInvoicesAndReceiptsResponseData) => {
      if (data.success) {
        clearInvoiceAndReceipt();
        toast.success(data?.message);
        onCancel();
        redirect(`/invoicesandreceipts/${data?.data?.type}`);
      }
    },
    onError: handleError,
  });

  const onSubmit = (values: InvoiceAndReceiptSchemaSchemaType) => {
    if (!user?.id && !businessData?.id) return;

    if (values?.items.length === 0) return toast.error("Items cannot be empty");
    const payload = {
      issueDate: dayjs(values?.issueDate).format("dddd, MMMM D, YYYY h:mm A"),
      dueDate: dayjs(values?.dueDate).format("dddd, MMMM D, YYYY h:mm A"),
      customerName: values.customerName,
      items: values.items,
      discount: results.discount,
      delivery: results.delivery,
      user_id: user?.id,
      business_id: businessData?.id,
      type: params?.add as InvoiceAndReceiptType,
    } as InvoiceAndReceiptData;
    setInvoiceAndReceipt(payload);
    onConfirm({
      type: "preview",
      isOpen: true,
    });
  };

  const itemData = watch("items");
  const handleSave = () => {
    if (!invoiceAndReceiptData || !user?.id || !businessData?.id) return;
    mutate(invoiceAndReceiptData);
  };

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
    paramType: params.add,
    invoiceAndReceiptData,
    modal,
    onCancel,
    handleChange,
    values,
    handleSave,
    isPending,
    businessData,
    handleSubmitDiscountAndDeliveryFee,
    results,
    subTotal,
    grandTotal,
    checkSubTotalAvailable,
  };
};
interface DiscountAndDeliveryFeeType {
  discount?: string;
  delivery?: string;
}

type ResultsState = {
  [key: string]: any; // Represents the shape of the state, allowing for dynamic keys
};
