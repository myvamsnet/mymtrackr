'use client';
import { useMutation } from '@tanstack/react-query';
import { logoutAction } from '@/app/actions/logoutAction';
export const useLogout = () => {
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      await logoutAction();
    },
  });

  const handleLogout = () => {
    mutate();
  };
  return {
    isError,
    isPending,
    error,
    handleLogout,
  };
};
