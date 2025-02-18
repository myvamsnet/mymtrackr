"use client";
import { loginAction } from "@/app/actions/loginAction";
import { signInSchema, SignInSchemaType } from "@/lib/Schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useSignIn = () => {
  const { control, handleSubmit } = useForm<SignInSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SignInSchemaType) => {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      const res = await loginAction(formData);
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
  const onSubmit = async (data: SignInSchemaType) => {
    mutate(data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isPending,
  };
};
