'use client';
import { RegisterAction } from '@/app/actions/RegisterAction';
import useModal from '@/hooks/useModal';
import { signUpSchema, SignUpSchemaType } from '@/lib/Schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useSignUp = () => {
  const searchParam = useSearchParams();
  const referCode = searchParam.get('referCode');
  const { onConfirm, onCancel, modal } = useModal();

  const { control, handleSubmit } = useForm<SignUpSchemaType>({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async (data: SignUpSchemaType) => {
      const payload = {
        ...data,
        referralCode: referCode,
      };
      const res = await RegisterAction(payload);
      if (!res?.success) {
        throw new Error(res?.message);
      }
      return;
    },
    onError: (error) => {
      if (
        error.message !== undefined &&
        error.message !== null &&
        error.message !== ''
      ) {
        toast.error(error.message);
      }
      return;
    },
  });
  const onSubmit = async (data: SignUpSchemaType) => {
    mutate(data);
  };
  return {
    modal,
    onConfirm: () =>
      onConfirm({
        type: 'signIn',
        isOpen: true,
      }),
    onCancel,
    control,
    handleSubmit,
    onSubmit,
    isError,
    isPending,
    error,
  };
};
