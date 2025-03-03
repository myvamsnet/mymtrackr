import { Metadata } from "next";
import React from "react";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
export const metadata: Metadata = {
  title: "Simplify Your Financial Management with Mtrackr | Home",
  description:
    "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manage money with confidence and ease.",
};
const LayoutRoot = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ProtectedLayout className="bg-off-white relative pb-40">
      {children}
    </ProtectedLayout>
  );
};

export default LayoutRoot;
