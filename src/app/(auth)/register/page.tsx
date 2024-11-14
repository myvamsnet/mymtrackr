import React from "react";
import AuthLayout from "../components/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";
import { unprotectedRoute } from "@/constant/app";

const page = () => {
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

export default page;
