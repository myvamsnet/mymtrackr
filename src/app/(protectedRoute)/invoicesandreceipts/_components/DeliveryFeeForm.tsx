import { EditIcon2 } from "@/assets/icons/EditIcon2";
import NumberInput from "@/components/NumberInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useChange } from "@/hooks/useChange";
import useModal from "@/hooks/useModal";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import {
  DeliveryFeeSchemaType,
  deliveryFeeSchema,
} from "@/lib/Schema/invoiceAndReceiptSchema";
import useInvoiceAndReceiptStore from "@/zustand/invoiceAndReceiptStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function DeliveryFeeForm() {
  const {
    setDiscountAndDeliveryFee,
    discountAndDeliveryFee,
    invoiceAndReceiptData,
  } = useInvoiceAndReceiptStore();
  const { modal, onConfirm, onCancel } = useModal();
  const [value, handleChange] = useChange(false);
  const { control, handleSubmit, setValue } = useForm<DeliveryFeeSchemaType>({
    resolver: zodResolver(deliveryFeeSchema),
    defaultValues: {
      deliveryFee: "0",
    },
  });

  useEffect(() => {
    const getDescount = () => {
      if (
        invoiceAndReceiptData.delivery &&
        invoiceAndReceiptData.delivery > 0
      ) {
        setValue("deliveryFee", String(invoiceAndReceiptData.delivery));
      }
    };
    getDescount();
  }, [invoiceAndReceiptData.delivery, setValue]);
  const onSubmit = (data: DeliveryFeeSchemaType) => {
    setDiscountAndDeliveryFee({
      ...discountAndDeliveryFee,
      deliveryFee: Number(data.deliveryFee),
    });
    handleChange(false);
  };
  return (
    <Dialog
      onOpenChange={(open) => handleChange(open)}
      open={value}
    >
      <DialogTrigger asChild>
        <div className="flex justify-between items-center text-sm font-normal  cursor-pointer">
          <span className="text-dark-100 text-xs font-medium capitalize flex items-center gap-2">
            <EditIcon2 className="text-primary" /> Delivery fee
          </span>
          <strong>
            {currencyFormatter(
              Number(
                discountAndDeliveryFee.deliveryFee ||
                  invoiceAndReceiptData.delivery
              )
            )}
          </strong>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Delivery Fee</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <NumberInput
              type="currency"
              name="deliveryFee"
              control={control}
              placeholder="Enter Discount"
            />
          </div>
          <div className="flex justify-end w-full">
            <Button
              type="submit"
              className="w-full h-[45px]"
            >
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
