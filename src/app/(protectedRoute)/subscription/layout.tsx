import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Simplify Your Financial Management with Mtrackr | Home",
  description:
    "Say goodbye to someone must be stealing my money, stress and the Hassles of Traditional Money Management. Mtrackr allows you to effortlessly manage money with confidence and ease.",
};
const SubscriptionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4">
      {children}
    </main>
  );
};

export default SubscriptionLayout;
