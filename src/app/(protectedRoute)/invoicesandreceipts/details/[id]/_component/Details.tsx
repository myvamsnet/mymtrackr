"use client";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import {
  Data,
  SingleInvoicesAndReceiptsResponseData,
} from "@/types/invoicesandreceipts";
import {
  calculateGrandTotal,
  calculateTotal,
} from "@/lib/helper/calculateGrandTotal";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";
import { Dots } from "@/assets/icons/Dots";
import PreviewDetails from "./PreviewDetails";
import MoreModal from "./MoreModal";
import { useFetch } from "@/hooks/useFetch";
import { useParams, useSearchParams } from "next/navigation";
import CustomLoader from "@/components/CustomLoader/page";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";

export const Details = () => {
  const { onConfirm, modal } = useModal();
  const { updateQueryParams } = useUpdateQuery();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const handleClose = () => {
    updateQueryParams({
      type: "",
    });
  };
  const { id } = useParams() as {
    id: string;
  };
  const { data, status } = useFetch<SingleInvoicesAndReceiptsResponseData>(
    "/invoicesandreceipts",
    id,
    "invoicesandreceipts"
  );

  const invoicesAndReceiptData = data?.data as Data;
  if (status === "pending" && !invoicesAndReceiptData) {
    return <CustomLoader />;
  }

  if (status === "error") {
    return <p>Something went wrong, Try Again</p>;
  }
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
        url={`/invoicesandreceipts/${invoicesAndReceiptData?.type}`}
      />

      <section className="overflow-y-auto overflow-x-hidden relative bg-off-white-500 py-2 px-3 space-y-3 md:pb-2 pb-28 ">
        <section className="bg-off-white-400 rounded-xl p-4 grid gap-4 text-center">
          <h4 className="text-sm font-medium text-dark">
            {invoicesAndReceiptData?.customerName}
          </h4>
          <p className="text-primary font-semibold text-sm">
            {currencyFormatter(
              calculateGrandTotal(
                invoicesAndReceiptData?.items,
                invoicesAndReceiptData?.discount,
                invoicesAndReceiptData?.delivery
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
              {dateFormatter(invoicesAndReceiptData?.issueDate)}
            </p>
          </div>
          {invoicesAndReceiptData?.type === "invoices" && (
            <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
              <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
                Due Date
              </p>
              <p className="text-xs font-normal text-dark">
                {dateFormatter(invoicesAndReceiptData?.dueDate)}
              </p>
            </div>
          )}

          <section className="bg-off-white-500 grid gap-6 rounded-lg p-4">
            {invoicesAndReceiptData?.items?.map((item, index) => (
              <div key={`${item.description} - ${index}`}>
                <p>{item.description}</p>
                <div className="flex justify-between items-center">
                  <p>
                    {item.quantity} x {item.price}
                  </p>
                  <p>
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
              {currencyFormatter(calculateTotal(invoicesAndReceiptData?.items))}
            </p>
          </div>
          {Number(invoicesAndReceiptData?.discount) > 0 && (
            <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
              <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
                Discount
              </p>
              <p className="text-xs font-normal text-dark">
                {currencyFormatter(Number(invoicesAndReceiptData?.discount))}
              </p>
            </div>
          )}
          {Number(invoicesAndReceiptData?.delivery) > 0 && (
            <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
              <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
                Delivery fee
              </p>
              <p className="text-xs font-normal text-dark">
                {currencyFormatter(Number(invoicesAndReceiptData?.delivery))}
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
                  invoicesAndReceiptData?.items,
                  invoicesAndReceiptData?.discount,
                  invoicesAndReceiptData?.delivery
                )
              )}
            </p>
          </div>
        </section>

        <section className="bg-off-white-300 p-4 flex gap-3 justify-end mt-6 md:sticky fixed bottom-0 left-0 w-full">
          <Button
            variant={"outline"}
            className="py-[14px] px-[10px] w-[93px] h-[45px] transition-all ease-out duration-300 "
            onClick={() =>
              onConfirm({
                type: "preview",
                isOpen: true,
              })
            }
          >
            Preview
          </Button>
        </section>
      </section>
      <PreviewDetails list={invoicesAndReceiptData} />
      {invoicesAndReceiptData && type === "open" && (
        <MoreModal
          data={invoicesAndReceiptData}
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
