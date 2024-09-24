import { getUserProfile } from "@/app/actions/getUserProfile";
import { CustomHeader } from "@/components/CustomHeader";
import React from "react";
import { ProfileForm } from "./ProfileForm";

const Profile = async () => {
  const { data } = await getUserProfile();

  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Edit Profile" />
      <ProfileForm data={data} />
    </main>
  );
};

export default Profile;
