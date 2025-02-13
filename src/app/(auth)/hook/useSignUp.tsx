"use client";
import { RegisterAction } from "@/app/actions/RegisterAction";
import { useChange } from "@/hooks/useChange";
import { signUpSchema, SignUpSchemaType } from "@/lib/Schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const live = process.env.NEXT_PUBLIC_LUNCH_APP as "not-live" | "live";
  const [isOpen, toggle] = useChange(true);
  const searchParam = useSearchParams();
  const referralCode = searchParam.get("referralCode") as string;

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

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SignUpSchemaType) => {
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
      return;
    },
    onError: (error) => {
      if (error && error?.message) {
        return toast.error(error.message);
      }
    },
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    console.log(live);
    if (live !== "live") {
      return toggle(true);
    }
    mutate(data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isPending,
    referralCode,
    isOpen,
    toggle,
    live,
  };
};
