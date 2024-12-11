"use client";
import { AnalyticsIcon } from "@/assets/icons/AnalyticsIcon";
import { useRedirect } from "@/hooks/useRedirect";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const RecordHeader = ({
  title,
  leftElement,
  url,
}: RecordHeaderProps) => {
  const redirectToPage = useRedirect();

  const navigate = (url: string) => {
    if (url) return redirectToPage(url);
    return redirectToPage();
  };
  return (
    <header className="p-4 flex justify-between items-center sticky top-0 bg-[#F4F8FF]  z-50">
      <div
        onClick={() => navigate(url as string)}
        className="flex items-center gap-4 cursor-pointer"
      >
        <MoveLeft
          size={24}
          className="text-primary"
        />
        <h3 className="text-sm font-semibold  text-dark  capitalize">
          {title}
        </h3>
      </div>
      {leftElement ? (
        leftElement
      ) : (
        <Link href={"/analytics"}>
          <AnalyticsIcon />
        </Link>
      )}
    </header>
  );
};
interface RecordHeaderProps {
  title: string;
  leftElement?: React.ReactNode;
  url?: string;
}
