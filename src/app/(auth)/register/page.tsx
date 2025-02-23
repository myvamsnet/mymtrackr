import React from "react";
import AuthLayout from "../components/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";
import { unprotectedRoute } from "@/constant/app";
import { CountdownModal } from "@/components/CountdownModal";
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
      : "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manag money with confidence and ease.",
  };
}

const Register = () => {
  const live = process.env.NEXT_PUBLIC_LUNCH_APP as "not-live" | "live";
  return (
    <AuthLayout
      title="Register"
      authContent="Already have an account?"
      content="Login"
      subTitle="Manage your business like the boss"
      path={unprotectedRoute.Login}
    >
      <RegisterForm />
      <CountdownModal isOpen={live !== "live" ? true : false} />
    </AuthLayout>
  );
};

export default Register;
interface GenerateMetadataProps {
  searchParams: {
    referralCode: string;
  };
}
