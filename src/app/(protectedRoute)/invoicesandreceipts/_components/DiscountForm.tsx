import { EditIcon2 } from "@/assets/icons/EditIcon2";
import { NairaIcon } from "@/assets/icons/NairaIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useModal from "@/hooks/useModal";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { useDebouncedCallback } from "use-debounce";

export const DiscountForm = ({
  handleChangeDiscount,
  discountValue,
}: Props) => {
  const { modal, onConfirm, onCancel } = useModal();
  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      handleChangeDiscount(value);
      onCancel();
    },
    // delay in ms
    1500
  );
  return (
    <Dialog
      onOpenChange={(open) =>
        onConfirm({
          type: "default",
          isOpen: open,
        })
      }
      open={modal.isOpen && modal.type === "default"}
    >
      <DialogTrigger asChild>
        <div className="flex justify-between items-center text-sm font-normal  cursor-pointer">
          <span className="text-dark-100 text-xs font-medium capitalize flex items-center gap-2">
            <EditIcon2 className="text-primary" /> Discount
          </span>
          <strong>{currencyFormatter(Number(discountValue))}</strong>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Discount</DialogTitle>
          <DialogDescription>Set your discount price</DialogDescription>
        </DialogHeader>
        <div className="w-full h-[42px] px-4 py-3 rounded-lg bg-[#F1F5FD] text-dark text-sm flex items-center">
          <NairaIcon />
          <input
            defaultValue={discountValue}
            className="w-full  border-none outline-none bg-transparent  text-dark text-sm"
            type="number"
            name="discount"
            id="discount"
            placeholder="Enter discount percentage"
            onChange={(e) => debounced(e.target.value)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
interface Props {
  handleChangeDiscount: (value: string) => void;
  discountValue: string;
}
