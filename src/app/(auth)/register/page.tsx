import React from "react";
import AuthLayout from "../components/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";

const page = () => {
  return (
    <AuthLayout
      title="Register"
      authContent="Already have an account?"
      content="Login"
      subTitle="Manage your business like the boss"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default page;
