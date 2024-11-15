import React from "react";
import AuthLayout from "../components/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";
import { unprotectedRoute } from "@/constant/app";
export async function generateMetadata({
  searchParams,
}: GenerateMetadataProps) {
  const referralCode = searchParams.referralCode || null;
  return {
    title: referralCode
      ? `Join us with referral code: ${referralCode}`
      : "I use Mtrackr for records keeping  and earn high interests on my referral. Join me on Mtrackr  and get ₦2000 on referral!",
    description: referralCode
      ? "I use Mtrackr for records keeping  and earn high interests on my referral. Join me on Mtrackr  and get ₦2000 on referral!"
      : "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manage money with confidence and ease.",
  };
}

const Register = () => {
  return (
    <AuthLayout
      title="Register"
      authContent="Already have an account?"
      content="Login"
      subTitle="Manage your business like the boss"
      path={unprotectedRoute.Login}
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
interface GenerateMetadataProps {
  searchParams: {
    referralCode: string;
  };
}
