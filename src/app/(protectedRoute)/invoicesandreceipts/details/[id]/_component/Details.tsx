"use client";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { Data } from "@/types/invoicesandreceipts";
import {
  calculateGrandTotal,
  calculateTotal,
} from "@/lib/helper/calculateGrandTotal";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";
import { Dots } from "@/assets/icons/Dots";
import PreviewDetails from "./PreviewDetails";
import MoreModal from "./MoreModal";
import { useSearchParams } from "next/navigation";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import useInvoiceAndReceiptStore, {
  InvoiceAndReceiptData,
} from "@/zustand/invoiceAndReceiptStore";
import { InvoicesandreceiptsData } from "@/app/actions/fetchInvoiceAndReceiptById";
import { BusinessData } from "@/types/business";

export const Details = ({
  invoicesandreceipt,
  businessInfo,
}: InvoicesandreceiptProps) => {
  const { setInvoiceAndReceipt } = useInvoiceAndReceiptStore();
  const { onConfirm, modal } = useModal();
  const { updateQueryParams } = useUpdateQuery();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const handleClose = () => {
    updateQueryParams({
      type: "",
    });
  };

  return (
    <main className="relative">
      <RecordHeader
        title={`Details`}
        leftElement={
          <Dots
            className="cursor-pointer"
            onClick={() => {
              updateQueryParams({
                type: "open",
              });
            }}
          />
        }
        url={`/invoicesandreceipts/${invoicesandreceipt?.type}`}
      />

      <section className="overflow-y-auto overflow-x-hidden relative bg-off-white-500 py-2 px-3 space-y-3 md:pb-2 pb-28 ">
        <section className="bg-off-white-400 rounded-xl p-4 grid gap-4 text-center">
          <h4 className="text-sm font-medium text-dark">
            {invoicesandreceipt?.customerName}
          </h4>
          <p className="text-primary font-semibold text-sm">
            {currencyFormatter(
              calculateGrandTotal(
                invoicesandreceipt?.items,
                invoicesandreceipt?.discount,
                invoicesandreceipt?.delivery
              )
            )}
          </p>
        </section>
        <section className=" rounded-xl px-4 grid gap-4  bg-off-white-400 pt-4 ">
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
              Issue Date
            </p>
            <p className="text-xs font-normal text-dark">
              {dateFormatter(invoicesandreceipt?.issueDate)}
            </p>
          </div>
          {invoicesandreceipt?.type === "invoices" && (
            <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
              <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
                Due Date
              </p>
              <p className="text-xs font-normal text-dark">
                {dateFormatter(invoicesandreceipt?.dueDate)}
              </p>
            </div>
          )}

          <section className="bg-off-white-500 grid gap-6 rounded-lg p-4">
            {invoicesandreceipt?.items?.map((item, index) => (
              <div key={`${item.description} - ${index}`} className="space-y-2">
                <p className="text-xs font-normal text-dark">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-normal text-dark-100">
                    {item.quantity} x {item.price}
                  </p>
                  <p className="text-xs font-normal text-dark-300">
                    {currencyFormatter(
                      Number(item.price) * Number(item.quantity)
                    )}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark tracking-[-1%]">
              Sub total
            </p>
            <p className="text-xs font-normal text-dark">
              {currencyFormatter(calculateTotal(invoicesandreceipt?.items))}
            </p>
          </div>
          {Number(invoicesandreceipt?.discount) > 0 && (
            <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
              <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
                Discount
              </p>
              <p className="text-xs font-normal text-dark">
                {currencyFormatter(Number(invoicesandreceipt?.discount))}
              </p>
            </div>
          )}
          {Number(invoicesandreceipt?.delivery) > 0 && (
            <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
              <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
                Delivery fee
              </p>
              <p className="text-xs font-normal text-dark">
                {currencyFormatter(Number(invoicesandreceipt?.delivery))}
              </p>
            </div>
          )}

          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-semibold text-dark tracking-[-1%]">
              Grand Total
            </p>
            <p className="text-xs font-semibold text-dark">
              {currencyFormatter(
                calculateGrandTotal(
                  invoicesandreceipt?.items,
                  invoicesandreceipt?.discount,
                  invoicesandreceipt?.delivery
                )
              )}
            </p>
          </div>
        </section>

        <section className="bg-off-white-300 p-4 flex gap-3 justify-end mt-6 md:sticky fixed bottom-0 left-0 w-full">
          <Button
            variant={"outline"}
            className="py-[14px] px-[10px] w-[93px] h-[45px] transition-all ease-out duration-300 "
            onClick={() => {
              onConfirm({
                type: "preview",
                isOpen: true,
              });
              setInvoiceAndReceipt(invoicesandreceipt as InvoiceAndReceiptData);
            }}
          >
            Preview
          </Button>
        </section>
      </section>
      <PreviewDetails list={invoicesandreceipt} businessInfo={businessInfo} />
      {invoicesandreceipt && type === "open" && (
        <MoreModal
          data={invoicesandreceipt}
          isOpen={Boolean(type === "open")}
          onClose={handleClose}
        />
      )}
    </main>
  );
};
interface Props {
  data: Data;
}
interface InvoicesandreceiptProps {
  invoicesandreceipt: InvoicesandreceiptsData;
  businessInfo: BusinessData;
}
