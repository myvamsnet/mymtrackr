import { useChange } from "@/hooks/useChange";
import useModal from "@/hooks/useModal";
import {
  invoiceAndReceiptSchema,
  InvoiceAndReceiptSchemaSchemaType,
} from "@/lib/Schema/invoiceAndReceiptSchema";
import useInvoiceAndReceiptStore from "@/zustand/invoiceAndReceiptStore";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";

export const useInvoiceAndReceipt = () => {
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

    // Trigger debounced callback with the updated value
    debounced(e.target.value);
  };

  // Debounce callback
  const debounced = useDebouncedCallback(
    // Function to execute after debounce
    (value: string) => {
      if (value) {
        onCancel();
      }
    },
    // Delay in milliseconds
    1500
  );

  const { setInvoiceAndReceipt, invoiceAndReceiptData } =
    useInvoiceAndReceiptStore();
  const params = useParams() as {
    add: "receipt" | "invoice";
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
    mode: "onSubmit",
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "items",
  });
  console.log(errors);
  useEffect(() => {
    if (invoiceAndReceiptData !== null) {
      setValue(
        "customerName",
        invoiceAndReceiptData.customerName ?? new Date()
      );
      setValue("dueDate", new Date(invoiceAndReceiptData.dueDate));
      setValue("issueDate", new Date(invoiceAndReceiptData.issueDate));
      setValue("items", invoiceAndReceiptData.items);
      setValues({
        discount: String(invoiceAndReceiptData.discount),
        delivery: String(invoiceAndReceiptData.delivery),
      });
    }
  }, [invoiceAndReceiptData, setValue]);

  const getTotalByIndex = (index: number) => {
    const items = watch("items");

    if (!items || !Array.isArray(items)) {
      return null; // Ensure items is an array before proceeding
    }

    const item = items.find((_, i) => i === index);

    if (!item) {
      return null; // Return null if no matching item is found
    }

    return {
      description: item.description || "",
      quantity: item.quantity || "0",
      price: item.price || "0",
    };
  };

  const { discount, delivery } = values;
  const onSubmit = (values: InvoiceAndReceiptSchemaSchemaType) => {
    const payload = {
      issueDate: dayjs(values?.issueDate).format("dddd, MMMM D, YYYY h:mm A"),
      dueDate: dayjs(values?.dueDate).format("dddd, MMMM D, YYYY h:mm A"),
      customerName: values.customerName,
      items: values.items,
      discount,
      delivery,
    };

    setInvoiceAndReceipt(payload);
    onConfirm({
      type: "preview",
      isOpen: true,
    });
    console.log("preview");
  };

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
  };
};
