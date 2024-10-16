'use client';
import { logoutAction } from '@/app/actions/logoutAction';
import { LogoutIcon } from '@/assets/icons/LogoutIcon';
import React from 'react';

export const MoreLogout = () => {
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await logoutAction();
  };
  return (
    <form
      className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2 items-center bg-off-white-300"
      onSubmit={handleSubmit}
    >
      <div className="h-8 w-8 bg-[#F4F8FF] rounded-full flex justify-center items-center">
        <LogoutIcon />
      </div>
      <button
        type="submit"
        className="font-inter font-normal text-base/5 text-red-500"
      >
        {'Logout'}
      </button>
    </form>
  );
};
