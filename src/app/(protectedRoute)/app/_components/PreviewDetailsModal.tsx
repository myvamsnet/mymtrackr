"use client";
import { Modal } from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import { CustomeTable } from "./customeTable";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Button } from "@/components/ui/button";

export const PreviewDetailsModal = () => {
  const { modal, onCancel } = useModal();

  const lists = Array.from({ length: 2 }, (_, index) => ({
    id: index + 1, // Unique ID
    itemName: `Men Boxers`,
    itemQuantity: Math.floor(Math.random() * 20) + 1, // Random quantity between 1 and 20
    price: Math.floor(Math.random() * 5000) + 1000, // Random price between 1000 and 6000
  }));
  const className = "text-[6.75px]  leading-[8.17px]";
  return (
    <Modal
      title="Preview"
      isOpen={modal.isOpen && modal.type === "preview"}
      onClose={onCancel}
      className="md:w-[50%]"
    >
      <div className="py-4 overflow-y-auto md:h-[600px] h-[500px]">
        <section className="bg-off-white-400 box-shadow-medium border-t-4 border-success border-b-4 p-4  space-y-5 ">
          <div className="grid gap-10 grid-cols-2">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/business-logo.svg"
                  alt="Business"
                  width={14}
                  height={14}
                />
                <span className="font-bold text-[8.43px] text-dark leading-[8.17px]">
                  Prema Cynosure
                </span>
              </div>
              <div className=" space-y-1">
                <p className={` text-dark-300 ${className}`}>
                  Premacynosure@gmail.com
                </p>
                <p className={` text-dark-300 ${className}`}>
                  08132453673, 09062736726
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base text-success text-end">
                Invoice
              </h4>
              <div className="flex justify-end items-center">
                <div className=" space-y-1 w-20">
                  <p
                    className={`${className} text-dark flex justify-between items-center`}
                  >
                    Issue Date:{" "}
                    <span className={`${className} text-dark-300`}>
                      Nov 11, 2024
                    </span>
                  </p>
                  <p
                    className={`${className} text-dark flex justify-between items-center`}
                  >
                    Due Date:{" "}
                    <span className={`${className} text-dark-300`}>
                      Nov 11, 2024
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-1 w-20">
            <p className={` text-dark font-bold ${className}`}>Invoice to::</p>
            <p className={`${className} text-dark-300`}>Ilori Oluwaferanmi</p>
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
              {lists?.map((list) => (
                <TableRow
                  key={list.id}
                  className={`${className} text-dark-300 md:text-sm`}
                >
                  <TableCell>{list.itemName}</TableCell>
                  <TableCell>{list.itemQuantity}</TableCell>
                  <TableCell>{currencyFormatter(list.price)}</TableCell>
                  <TableCell className="text-right">
                    {currencyFormatter(Number(list.itemQuantity * list.price))}
                  </TableCell>
                </TableRow>
              ))}
            </CustomeTable>
            <div className="bg-off-white rounded-[6.75px]  p-4 flex items-end md:gap-3 gap-2  flex-col">
              <p
                className={`${className} md:text-sm text-dark flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Sub Total: <span>{currencyFormatter(34000)}</span>
              </p>
              <p
                className={`${className} md:text-sm text-dark-100 flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Discount: <span>{currencyFormatter(0)}</span>
              </p>
              <p
                className={`${className} md:text-sm text-dark-100 flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Delivery fee: <span>{currencyFormatter(0)}</span>
              </p>
              <p
                className={` text-[8.43px] leading-[10.21px] md:text-sm text-success font-bold flex justify-between items-center w-[115px] md:w-[300px]`}
              >
                Grand Total: <span>{currencyFormatter(0)}</span>
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
                  Prema Cynosure
                </p>
                <p className={` text-dark-300 md:text-sm ${className}`}>
                  90656565656
                </p>
                <p className={` text-dark-300 md:text-sm ${className}`}>
                  Opay Bank
                </p>
              </div>
            </div>
            <div className=" space-y-[5.06px]">
              <p
                className={`font-bold text-dark md:text-sm ${className} md:text-sm`}
              >
                Terms of Service
              </p>
              <p
                className={`${className} text-dark-100 flex justify-between items-center md:w-full w-[121px] md:text-sm`}
              >
                Full payment has to be made before delivery of products
              </p>
            </div>
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

      <section className="bg-off-white-300 p-4 flex gap-3 justify-between mt-6  w-full">
        <Button
          variant={"outline"}
          className="py-[14px] px-[10px] w-[93px] h-[45px] transition-all ease-out duration-300 "
        >
          Download
        </Button>
        <Button className="py-[14px] px-[10px] w-[183px] h-[45px] transition-all ease-out duration-300 ">
          Share
        </Button>
      </section>
    </Modal>
  );
};
