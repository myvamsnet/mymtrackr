/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
export const CustomModal = ({
  isOpen,
  onConfirm,
  btnText,
  title,
  subTitle,
  content,
  children,
  onOpenChange,
  logo = false,
  className = "hidden md:block font-inter text-base font-medium text-off-white-400 bg-primary rounded-full py-3 px-6",
}: Props) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        onOpenChange(open);
      }}
    >
      <DialogTrigger asChild>
        <Button className={className}>{btnText}</Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        {logo && (
          <div className="w-full justify-center items-center flex py-4">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              className="w-28"
              width={112}
              height={0}
            />
          </div>
        )}

        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {subTitle}
            <button
              className="text-primary cursor-pointer px-1"
              onClick={onConfirm}
            >
              {content}
            </button>
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

interface Props {
  isOpen: boolean;
  onConfirm?: () => void;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
  subTitle: string;
  content: string;
  btnText: React.ReactNode;
  className?: string;
  logo?: boolean;
}
