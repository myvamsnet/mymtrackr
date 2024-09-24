"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export const Modal = ({
  isOpen,
  closeOutside = false,
  onClose,
  children,
  className,
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        closeOutside &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeOutside, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/85 flex  z-50  overflow-hidden w-full h-screen p-4">
      <div
        className={`container md:p-0  mx-auto flex justify-center items-center  h-screen w-full  `}
        ref={modalRef}
      >
        <section
          className={` bg-off-white-100 md:w-[40%] w-full mx-auto  rounded-md md:p-4 p-2 ${className}`}
        >
          <div className={`p-2 flex  items-center justify-end`}>
            <div className="bg-primary rounded-full p-1 flex justify-center items-center cursor-pointer">
              <X
                className="text-white cursor-pointer"
                fontSize={16}
                height={16}
                width={16}
                onClick={onClose}
              />
            </div>
          </div>
          <section className="w-full">{children}</section>
        </section>
      </div>
    </div>
  );
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  closeOutside?: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
}
