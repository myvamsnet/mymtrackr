'use client';

import { SignInModal } from './SignInModal';
import useModal from '@/hooks/useModal';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { useSearchParams } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import React from 'react';
import { Navbar } from './components/Navbar';

export const Header = () => {
  const { onConfirm } = useModal();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      onConfirm({
        isOpen: true,
        type: 'setNewPassword',
      });
    }
  }, [code, onConfirm]);

  return (
    <Fragment>
      <header
        className={`bg-[url('/images/overlayBanner.png')] w-full bg-center bg-cover  h-[80vh] rounded-br-lg rounded-bl-lg 
          py-2 px-4`}
      >
        <Navbar />
      </header>
      <SignInModal />
      <ForgotPasswordModal />
      <ChangePasswordModal />
    </Fragment>
  );
};
