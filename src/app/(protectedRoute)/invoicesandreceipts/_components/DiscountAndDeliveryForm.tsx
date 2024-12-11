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

export const DiscountAndDeliveryForm = ({
  handleChange,
  value,
  title,
  content,
  btnText,
  placeholder,
  name,
  type,
  onSave,
  result,
  disable,
}: Props) => {
  const { modal, onConfirm } = useModal();

  return (
    <Dialog
      onOpenChange={(open) =>
        onConfirm({
          type,
          isOpen: open,
        })
      }
      open={modal.isOpen && modal.type === type}
    >
      <DialogTrigger asChild>
        <div className="flex justify-between items-center text-sm font-normal  cursor-pointer">
          <span className="text-dark-100 text-xs font-medium capitalize flex items-center gap-2">
            <EditIcon2 className="text-primary" /> {btnText}
          </span>
          <strong>{currencyFormatter(Number(result))}</strong>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <div className="w-full h-[42px] px-4 py-3 rounded-lg bg-[#F1F5FD] text-dark text-sm flex items-center">
            <NairaIcon />
            <input
              value={value}
              className="w-full  border-none outline-none bg-transparent  text-dark text-sm"
              type="number"
              name={name}
              id={name}
              placeholder={placeholder}
              onChange={handleChange}
              disabled={disable}
            />
          </div>
          <div
            className="bg-primary py-2 px-4 rounded-lg text-white h-[45px] text-center justify-center items-center flex cursor-pointer"
            onClick={onSave}
            role="button"
          >
            Save
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
interface Props {
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  value: string;
  title: string;
  content: string;
  btnText: string;
  name: "discount" | "delivery";
  placeholder: string;
  type: "deliveryFee" | "default";
  onSave: () => void;
  result: string;
  disable: boolean;
}
