import React from "react";
import AuthLayout from "../components/AuthLayout";
import { LoginForm } from "../components/LoginForm";
import { unprotectedRoute } from "@/constant/app";

const Login = () => {
  return (
    <AuthLayout
      title="Login"
      subTitle="Manage your business like the boss"
      authContent="Don't have an account?"
      content="Register Now"
      path={unprotectedRoute.REGISTER}
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
