import { CustomHeader } from '@/components/CustomHeader';
import React from 'react';
import { ProfileForm } from './ProfileForm';
import { UserResponse } from '@/types/auth';
import { getUser } from '@/app/actions/getUser';

const Profile = async () => {
  const user = (await getUser()) as unknown as UserResponse;
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Edit Profile" />
      <ProfileForm user={user?.data} />
    </main>
  );
};

export default Profile;
