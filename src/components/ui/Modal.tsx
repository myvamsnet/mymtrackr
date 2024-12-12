"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export const Modal = ({
  isOpen,
  closeOutside = false,
  onClose,
  children,
  className,
  title,
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex z-50 overflow-hidden w-full  p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`mx-auto flex justify-center items-center w-full `}
        ref={modalRef}
      >
        <section
          className={`bg-white md:w-[40%] w-full mx-auto rounded-xl   transform transition-transform duration-300 p-3 ${
            isOpen ? "scale-100" : "scale-90"
          } `}
        >
          <div
            className={`p-2 flex items-center  ${
              title ? "justify-between" : "justify-end"
            }`}
          >
            {title && (
              <p className="text-base font-medium text-dark">{title}</p>
            )}
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
