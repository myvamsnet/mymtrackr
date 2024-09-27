'use client';
import { loginAction } from '@/app/actions/loginAction';
import useModal from '@/hooks/useModal';
import { signInSchema, SignInSchemaType } from '@/lib/Schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useSignIn = () => {
  const { onConfirm, onCancel, modal } = useModal();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<SignInSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async (data: SignInSchemaType) => {
      const res = await loginAction(data);
      if (!res?.success) {
        throw new Error(res?.message);
      }
    },
    onError: (error) => {
      if (
        error?.message !== undefined &&
        error?.message !== null &&
        error?.message !== ''
      ) {
        toast.error('Something went wrong , Try Again');
      }
      return;
    },
  });

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data);
  };

  const handleOnConfirm = (type: 'signUp' | 'forgotPassword') => {
    onConfirm({
      type: type,
      isOpen: true,
    });
  };

  return {
    modal,
    onConfirm: handleOnConfirm,
    onCancel,
    control,
    handleSubmit,
    onSubmit,
    isError,
    isPending,
    error,
    isValid,
  };
};
