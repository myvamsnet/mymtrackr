"use client";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { PreviewDetailsModal } from "@/app/(protectedRoute)/_components/PreviewDetailsModal";

export const Details = () => {
  const { onConfirm } = useModal();
  return (
    <>
      <section className="overflow-y-auto overflow-x-hidden relative bg-off-white-500 py-2 px-3 space-y-3 md:pb-2 pb-28">
        <section className="bg-off-white-400 rounded-xl p-4 grid gap-4 text-center">
          <h4 className="text-sm font-medium text-dark">Ilori Oluwaferanmi</h4>
          <p className="text-primary font-semibold text-sm">
            {currencyFormatter(24000)}
          </p>
        </section>
        <section className=" rounded-xl px-4 grid gap-4  bg-off-white-400 pt-4 ">
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
              Issue Date
            </p>
            <p className="text-xs font-normal text-dark">24 Apr 2024</p>
          </div>
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
              Due Date
            </p>
            <p className="text-xs font-normal text-dark">24 Apr 2024</p>
          </div>

          <section className="bg-off-white-500 grid gap-6 rounded-lg p-4">
            <div>
              <p>Boxers</p>
              <div className="flex justify-between items-center">
                <p>2 x 50</p>
                <p>{currencyFormatter(100.0)}</p>
              </div>
            </div>
            <div>
              <p>Boxers</p>
              <div className="flex justify-between items-center">
                <p>2 x 50</p>
                <p>{currencyFormatter(100.0)}</p>
              </div>
            </div>
            <div>
              <p>Boxers</p>
              <div className="flex justify-between items-center">
                <p>2 x 50</p>
                <p>{currencyFormatter(100.0)}</p>
              </div>
            </div>
          </section>
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark tracking-[-1%]">
              Sub total
            </p>
            <p className="text-xs font-normal text-dark">
              {currencyFormatter(1000)}
            </p>
          </div>
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
              Discount
            </p>
            <p className="text-xs font-normal text-dark">
              {currencyFormatter(1000)}
            </p>
          </div>
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-normal text-dark-100 tracking-[-1%]">
              Delivery fee
            </p>
            <p className="text-xs font-normal text-dark">
              {currencyFormatter(1400)}
            </p>
          </div>
          <div className="py-3 border-b border-off-white-200 flex justify-between items-center">
            <p className="text-xs font-semibold text-dark tracking-[-1%]">
              Grand Total
            </p>
            <p className="text-xs font-semibold text-dark">
              {currencyFormatter(1400)}
            </p>
          </div>
        </section>

        <section className="bg-off-white-300 p-4 flex gap-3 justify-between mt-6 md:sticky fixed bottom-0 left-0 w-full">
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
          <Button className="py-[14px] px-[10px] w-[183px] h-[45px] transition-all ease-out duration-300 ">
            Share
          </Button>
        </section>
      </section>
      {/* <PreviewDetailsModal /> */}
    </>
  );
};
