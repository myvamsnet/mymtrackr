'use client';

import { SignInModal } from './SignInModal';
import useModal from '@/hooks/useModal';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { useSearchParams } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import React from 'react';
import { SignUpModal } from './SignUpModal';

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
      <SignInModal />
      <ForgotPasswordModal />
      <ChangePasswordModal />
      <SignUpModal />
    </Fragment>
  );
};
