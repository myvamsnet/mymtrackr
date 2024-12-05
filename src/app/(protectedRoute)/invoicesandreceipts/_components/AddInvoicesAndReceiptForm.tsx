"use client";

import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Plus, X } from "lucide-react";
import {
  calculateGrandTotal,
  calculateTotal,
} from "@/lib/helper/calculateGrandTotal";
import { useInvoiceAndReceipt } from "../hooks/useInvoiceAndReceipt";
import { PreviewDetailsModal } from "../../_components/PreviewDetailsModal";
import { DiscountAndDeliveryForm } from "./DiscountAndDeliveryForm";

export default function AddInvoicesAndReceiptForm() {
  const {
    onSubmit,
    watch,
    control,
    handleSubmit,
    getTotalByIndex,
    fields,
    append,
    remove,
    paramType,
    invoiceAndReceiptData,
    modal,
    onCancel,
    handleChange,
    values,
  } = useInvoiceAndReceipt();

  return (
    <>
      <form
        className="bg-off-white-500  space-y-5 pb-32 md:pb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="p-4 rounded-xl bg-off-white-300 space-y-5">
          <h3 className="text-xs font-medium text-dark">Invoice Details</h3>
          <CustomDatePicker
            name="issueDate"
            control={control}
            label="Issue date"
          />
          {paramType === "invoice" && (
            <CustomDatePicker
              name="dueDate"
              control={control}
              label="Due date"
            />
          )}
          <CustomInput
            name={"customerName"}
            type={"text"}
            label={"Customer name"}
            control={control}
            placeholder={"Enter Customer Name"}
          />
        </section>
        <section className=" space-y-5">
          {fields.map((field, index) => (
            <div
              className="space-y-5 px-4 py-2 rounded-xl bg-off-white-300"
              key={field.id}
            >
              <h3 className="text-xs font-medium text-dark flex justify-between items-center">
                Item {index + 1}
                <X
                  height={"24"}
                  width={"24"}
                  color="#A4A5AC"
                  onClick={() => remove(index)}
                  className=" cursor-pointer"
                />
              </h3>
              <CustomInput
                type={"text"}
                label={"Description"}
                control={control}
                name={`items.${index}.description`}
                placeholder="Enter item name"
              />
              <CustomInput
                type={"text"}
                label={"Quantity"}
                control={control}
                name={`items.${index}.quantity`}
                placeholder="Enter quantity"
              />
              <CustomInput
                type={"text"}
                label={"Price"}
                control={control}
                name={`items.${index}.price`}
                placeholder="Enter price"
              />
              <div className="flex justify-between items-center text-sm font-normal">
                <span className="text-dark-100 text-xs font-medium capitalize">
                  Total Amount
                </span>
                <strong>
                  {currencyFormatter(
                    Number(getTotalByIndex(index)?.price) *
                      Number(getTotalByIndex(index)?.quantity)
                  )}
                </strong>
              </div>
            </div>
          ))}
        </section>
        <div className="p-4">
          <div
            role="button"
            className="text-primary text-xs font-semibold flex items-center gap-2 transition-all duration-300 ease-out"
            onClick={() => {
              append({ description: "", quantity: "", price: "" });
            }}
          >
            <Plus
              height={"16"}
              width={"16"}
            />{" "}
            <span>Add More Item</span>
          </div>
        </div>
        <section className="py-5 px-4 bg-off-white-300 rounded-2xl grid gap-7">
          <div className="flex justify-between items-center text-sm font-normal">
            <span className="text-dark-dark text-xs font-medium capitalize">
              Sub Total
            </span>
            <strong>
              {currencyFormatter(Number(calculateTotal(watch("items"))))}
            </strong>
          </div>

          <DiscountAndDeliveryForm
            handleChange={handleChange}
            value={values.discount}
            name="discount"
            title="Set Discount"
            btnText="Discount"
            content="Set your discount price"
            placeholder=""
            type="default"
          />
          <DiscountAndDeliveryForm
            handleChange={handleChange}
            value={values.delivery}
            name="delivery"
            title="Set Delivery Fee"
            btnText="Delivery"
            content="Set your Set Delivery Fee"
            placeholder=""
            type="deliveryFee"
          />

          <div className="bg-off-white-500 py-6 px-4 flex justify-between items-center">
            <p className="text-sm font-semibold  text-dark">Grand Total</p>
            <strong>
              {currencyFormatter(
                calculateGrandTotal(
                  watch("items"),
                  values.discount,
                  values.delivery
                )
              )}
            </strong>
          </div>
        </section>

        <section className="bg-off-white-300 p-4 flex gap-3   md:sticky fixed bottom-0 left-0 w-full justify-end">
          <Button className="py-[14px] px-[10px] md:w-[183px] w-full h-[45px] transition-all ease-out duration-300 ">
            Confirm
          </Button>
        </section>
      </form>
      {modal.type === "preview" && (
        <PreviewDetailsModal
          title="Preview"
          lists={invoiceAndReceiptData}
          isOpen={
            modal.isOpen &&
            modal.type === "preview" &&
            invoiceAndReceiptData !== null
          }
          onCancel={onCancel}
        />
      )}
    </>
  );
}
