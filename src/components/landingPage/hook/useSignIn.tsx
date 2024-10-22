'use client';
import { loginAction } from '@/app/actions/loginAction';
import useModal from '@/hooks/useModal';
import { signInSchema, SignInSchemaType } from '@/lib/Schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useSignIn = () => {
  const [status, setStatus] = useState(false);
  const { onConfirm, onCancel, modal } = useModal();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignInSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInSchemaType) => {
    setStatus(true);
    try {
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('password', data.password);
      const res = await loginAction(formData);
      if (!res?.success) {
        throw new Error(res?.message);
      }
    } catch (error) {
      if (
        (error as any).message !== undefined &&
        (error as any).message !== null &&
        (error as any).message !== ''
      ) {
        toast.error((error as any).message);
      }
    } finally {
      setStatus(false);
    }
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
    isPending: status,
    isValid,
  };
};
