"use client";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import NumberInput from "@/components/NumberInput";
import { RecordHeader } from "@/app/(protectedRoute)/_components/common/records/RecordHeader";
import { DiscountAndDeliveryForm } from "../../_components/DiscountAndDeliveryForm";
import { useEditInvoiceAndReceipt } from "../../hooks/useEditInvoiceAndReceipt";
import { Data } from "@/types/invoicesandreceipts";

export default function EditInvoicesAndReceiptForm({ data }: Props) {
  const {
    onSubmit,
    control,
    handleSubmit,
    getTotalByIndex,
    fields,
    append,
    remove,
    paramType,
    handleChange,
    values,
    isPending,
    businessData,
    handleSubmitDiscountAndDeliveryFee,
    results,
    checkSubTotalAvailable,
    subTotal,
    grandTotal,
  } = useEditInvoiceAndReceipt(data);

  return (
    <>
      <RecordHeader
        title={`Edit ${data?.type}`}
        leftElement={
          <Link
            href={
              businessData?.id
                ? `/settings/business/${businessData?.id}`
                : `/settings/business}`
            }
          >
            <SettingsIcon />
          </Link>
        }
      />
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
          {paramType === "invoices" && (
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
              <NumberInput
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
            <Plus height={"16"} width={"16"} /> <span>Add More Item</span>
          </div>
        </div>
        <section className="py-5 px-4 bg-off-white-300 rounded-2xl grid gap-7">
          <div className="flex justify-between items-center text-sm font-normal">
            <span className="text-dark-dark text-xs font-medium capitalize">
              Sub Total
            </span>
            <strong>{subTotal}</strong>
          </div>
          <DiscountAndDeliveryForm
            handleChange={handleChange}
            onSave={() =>
              handleSubmitDiscountAndDeliveryFee({ discount: values.discount })
            }
            value={values.discount}
            name="discount"
            title="Set Discount"
            btnText="Discount"
            content="Set your discount price"
            placeholder=""
            type="default"
            result={results.discount as string}
            disable={checkSubTotalAvailable <= 0}
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
            onSave={() =>
              handleSubmitDiscountAndDeliveryFee({ delivery: values.delivery })
            }
            result={results.delivery as string}
            disable={checkSubTotalAvailable <= 0}
          />

          <div className="bg-off-white-500 py-6 px-4 flex justify-between items-center">
            <p className="text-sm font-semibold  text-dark">Grand Total</p>
            <strong>{grandTotal}</strong>
          </div>
        </section>

        <section className="bg-off-white-300 p-4 flex gap-3   md:sticky fixed bottom-0 left-0 w-full justify-end">
          <Button
            disabled={isPending}
            className="py-[14px] px-[10px] md:w-[183px] w-full h-[45px] transition-all ease-out duration-300 "
            type="submit"
          >
            {isPending ? "Updating..." : "  Update"}
          </Button>
        </section>
      </form>
    </>
  );
}
interface Props {
  data: Data;
}
