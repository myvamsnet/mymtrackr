import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Simplify Your Financial Management with Mtrackr | Home",
  description:
    "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manage money with confidence and ease.",
};
const AdminLayoutRoot = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main>{children}</main>;
};

export default AdminLayoutRoot;
