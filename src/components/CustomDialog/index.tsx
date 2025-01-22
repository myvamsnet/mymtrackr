import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CustomDialog = ({
  isOpen,
  toggle,
  children,
  title,
  subTitle,
  buttonText,
  titleClassName,
  subTitleClassName,
  btnClassName,
}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        toggle(open);
      }}
    >
      {buttonText && (
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={`${btnClassName} outline-none border-none`}
          >
            {title}
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {title && (
            <DialogTitle className={titleClassName}>{title}</DialogTitle>
          )}
          {subTitle && (
            <DialogDescription className={subTitleClassName}>
              {subTitle}
            </DialogDescription>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subTitle: string;
  toggle: (open: boolean) => void;
  buttonText?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  btnClassName?: string;
}
