"use client";
import { AnalyticsIcon } from "@/assets/icons/AnalyticsIcon";
import { ClockRewindIcon } from "@/assets/icons/ClockRewindIcon";
import Link from "next/link";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { products } from "@/constant/records";

const Records = () => {
  return (
    <ProtectedLayout>
      <main className="container mx-auto bg-off-white-300 rounded-xl h-screen">
        <div className="flex justify-between items-center py-4 px-3 border-b ">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-base/4 font-inter">My Records</p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/analytics">
              <AnalyticsIcon />
            </Link>
            <Link href="/history">
              <ClockRewindIcon />
            </Link>
          </div>
        </div>
        <section className=" px-4">
          {products?.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link
                href={product.path}
                className="flex items-center gap-2 py-5"
                key={`${product?.id}-${i}`}
              >
                <span className=" bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center p-t">
                  <Icon height={"10.5"} width="10.5" />
                </span>
                <div className="space-y-1">
                  <h2 className="text-sm font-medium font-inter text-dark ">
                    {product.title}
                  </h2>
                  <p className="text-xs font-normal font-inter text-dark-100">
                    {product.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </ProtectedLayout>
  );
};

export default Records;
