'use client';

import { PenBook } from '@/assets/icons/PenBook';
import { Delete } from '@/assets/icons/Delete';
import Link from 'next/link';
import React from 'react';
import { CustomHeader } from '@/components/CustomHeader';
import ResetPasswordModal from './__components/ResetPasswordModal';

const Settings = () => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen py-2">
      <section className="bg-off-white  font-inter  px-3 gap-4   my-3">
        <CustomHeader title="Settings" />
        <div className="bg-off-white-300 rounded-xl py-4">
          <Link
            href={'/app/settings/profile'}
            className="flex cursor-pointer text-sm font-normal text-dark p-4 gap-2 border-b"
          >
            <PenBook color="#010114" />
            Edit profile
          </Link>
          <ResetPasswordModal />
          <div className="flex p-4 gap-2 border-b">
            <Delete />
            <p className="text-danger-500 text-sm font-normal cursor-pointer ">
              Delete Account
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Settings;
