import { getUser } from '@/app/actions/getUser';
import { CustomHeader } from '@/components/CustomHeader';
import { UserResponse } from '@/types/auth';

import React from 'react';
import ReferralCodeUi from './components/ReferralCodeUi';

const page = async () => {
  const user = (await getUser()) as unknown as UserResponse;

  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Refer & Earn" />
      <ReferralCodeUi referralCode={user?.data?.referralCode as string} />
    </main>
  );
};

export default page;
