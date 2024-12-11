"use client";
import { Modal } from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import { CustomeTable } from "./customeTable";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";

import React from "react";
import { InvoiceAndReceiptData } from "@/zustand/invoiceAndReceiptStore";
import {
  calculateGrandTotal,
  calculateTotal,
} from "@/lib/helper/calculateGrandTotal";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import CustomAvatar from "@/components/ui/Avatar/index";
import userStore from "@/zustand/userStore";

export const PreviewDetailsModal = ({
  lists,
  title,
  isOpen,
  onCancel,
  children,
}: props) => {
  const { user } = userStore();
  const className = "text-[6.75px]  leading-[8.17px]";

  const businessInfo = user?.businessProfile;
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onCancel}
      className="md:w-[50%]"
    >
      <div className="py-4 overflow-y-auto h-[500px]">
        <section
          className={`bg-off-white-400 box-shadow-medium border-t-4 border-b-4 p-4 space-y-5`}
          style={{ borderColor: businessInfo?.brandColor || "#1D9213" }}
        >
          <div className="grid gap-10 grid-cols-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <CustomAvatar
                  name={businessInfo?.businessName as string}
                  imgUrl={businessInfo?.imageUrl}
                  className="h-6 w-6"
                />
                <span className="font-bold text-[8.43px] text-dark leading-[8.17px]">
                  {businessInfo?.businessName}
                </span>
              </div>
              <div className=" space-y-1">
                <p className={` text-dark-300 ${className}`}>
                  {businessInfo?.businessEmail}
                </p>
                <p className={` text-dark-300 ${className}`}>
                  {businessInfo?.phoneNumber1},{" "}
                  {businessInfo?.phoneNumber2 ?? ""}
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base text-success text-end capitalize">
                {lists.type}
              </h4>
              <div className="flex justify-end items-center">
                <div className=" space-y-1 w-20">
                  <p
                    className={`${className} text-dark flex justify-between items-center`}
                  >
                    Issue Date:{" "}
                    <span className={`${className} text-dark-300`}>
                      {dateFormatter(lists.issueDate)}
                    </span>
                  </p>

                  {lists.type === "invoices" && (
                    <p
                      className={`${className} text-dark flex justify-between items-center`}
                    >
                      Due Date:{" "}
                      <span className={`${className} text-dark-300`}>
                        {dateFormatter(lists.dueDate)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-1 w-20">
            <p className={` text-dark font-bold ${className}`}>
              {lists?.type} to:
            </p>
            <p className={`${className} text-dark-300`}>
              {lists?.customerName}
            </p>
          </div>
          <section>
            <CustomeTable
              tableHeader={
                <>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </>
              }
            >
              {lists?.items?.map((list) => (
                <TableRow
                  key={list?.id}
                  className={`${className} text-dark-300 md:text-sm`}
                >
                  <TableCell>{list?.description}</TableCell>
                  <TableCell>{list?.quantity}</TableCell>
                  <TableCell>{currencyFormatter(list?.price)}</TableCell>
                  <TableCell className="text-right">
                    {currencyFormatter(
                      Number(list?.price) * Number(list?.quantity)
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </CustomeTable>
            <div className="bg-off-white rounded-[6.75px]  p-4 flex items-end md:gap-3 gap-2  flex-col">
              <p
                className={`${className} md:text-sm text-dark flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Sub Total:{" "}
                <span>{currencyFormatter(calculateTotal(lists?.items))}</span>
              </p>
              <p
                className={`${className} md:text-sm text-dark-100 flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Discount: <span>{currencyFormatter(lists?.discount || 0)}</span>
              </p>
              <p
                className={`${className} md:text-sm text-dark-100 flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Delivery fee:{" "}
                <span>{currencyFormatter(lists?.delivery || 0)}</span>
              </p>
              <p
                className={` text-[8.43px] leading-[10.21px] md:text-sm text-success font-bold flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Grand Total:{" "}
                <span>
                  {currencyFormatter(
                    calculateGrandTotal(
                      lists?.items,
                      String(lists?.discount),
                      String(lists?.delivery)
                    )
                  )}
                </span>
              </p>
            </div>
          </section>
          <div className="grid gap-10 grid-cols-2 py-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <p className={`font-bold text-dark ${className} md:text-sm`}>
                  Payment Account:
                </p>
              </div>
              <div className=" space-y-1">
                <p className={` text-dark-300 md:text-sm ${className}`}>
                  {businessInfo?.accountName}
                </p>
                <p className={` text-dark-300 md:text-sm ${className}`}>
                  {businessInfo?.accountNumber}
                </p>
                <p className={` text-dark-300 md:text-sm ${className}`}>
                  {businessInfo?.bankName}
                </p>
              </div>
            </div>
            {businessInfo?.termsOfService && (
              <div className=" space-y-[5.06px]">
                <p
                  className={`font-bold text-dark md:text-sm ${className} md:text-sm`}
                >
                  Terms of Service
                </p>
                <p
                  className={`${className} text-dark-100 flex justify-between items-center md:w-full w-[121px] md:text-sm`}
                >
                  {businessInfo?.termsOfService}
                </p>
              </div>
            )}
          </div>
          <div className="w-full  flex justify-center items-center flex-col ">
            <div className="flex items-center gap-1">
              <span className={`${className} text-dark-300 md:text-sm`}>
                powered by
              </span>
              <Image
                src={"/images/logo.svg"}
                alt="MTrackr"
                width={32}
                height={8}
              />
            </div>
            <p className={` space-x-1  ${className} md:text-sm`}>
              <span className="text-dark-100">
                Manage your business like the Pro!
              </span>
              <span className="text-primary">www.mymtrackr.com</span>
            </p>
          </div>
        </section>
      </div>
      {children}
    </Modal>
  );
};
interface props {
  lists: InvoiceAndReceiptData;
  title: string;
  isOpen: boolean;
  onCancel: () => void;
  children: React.ReactNode;
}