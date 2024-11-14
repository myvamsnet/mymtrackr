import React from "react";
import AuthLayout from "../components/AuthLayout";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Login"
      subTitle="Manage your business like the boss"
      authContent="Don't have an account?"
      content="Register Now"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
