"use client";
import { RegisterAction } from "@/app/actions/RegisterAction";
import useModal from "@/hooks/useModal";
import { signUpSchema, SignUpSchemaType } from "@/lib/Schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const [status, setStatus] = useState(false);
  const searchParam = useSearchParams();
  const referralCode = searchParam.get("referralCode") as string;
  const { onConfirm, onCancel, modal } = useModal();

  const { control, handleSubmit, setValue } = useForm<SignUpSchemaType>({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      referralCode: "" as string | undefined,
    },
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    if (referralCode) {
      setValue("referralCode", referralCode);
    }
  }, [referralCode, setValue]);

  const onSubmit = async (data: SignUpSchemaType) => {
    setStatus(true);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("fullName", data.fullName);
      if (data?.referralCode) {
        formData.append("referralCode", data?.referralCode);
      }
      const res = await RegisterAction(formData);
      if (!res?.success) {
        throw new Error(res?.message);
      }
    } catch (error) {
      if (
        (error as any).message !== undefined &&
        (error as any).message !== null &&
        (error as any).message !== ""
      ) {
        toast.error((error as any).message);
      }
    } finally {
      setStatus(false);
    }
  };

  const handleOnConfirm = (type: "signUp" | "signIn", isOpen = true) => {
    onConfirm({
      type: type,
      isOpen: isOpen,
    });
  };
  return {
    modal,
    onConfirm: handleOnConfirm,
    onCancel,
    control,
    handleSubmit,
    onSubmit,
    isPending: status,
    referralCode,
  };
};
