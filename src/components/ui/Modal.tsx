import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeOutside?: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  closeOutside,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div
        className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
        onClick={() => {
          if (closeOutside) {
            return;
          }
          onClose();
        }}
        aria-hidden="true"
      ></div>
      <div
        ref={modalRef}
        className="relative z-50 w-full max-w-lg rounded-lg bg-white p-4 shadow-xl transition-all sm:rounded-xl"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="bg-primary rounded-full p-1 flex justify-center items-center cursor-pointer"
            aria-label="Close modal"
          >
            <XIcon className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

export default Modal;
