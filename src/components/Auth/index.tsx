import Modal from "@/components/ui/Modal";

import Image from "next/image";
const AuthWrapper = ({
  isOpen,
  onCancel,
  onConfirm,
  title,
  subTitle,
  content,
  children,
}: AuthWrapperProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      closeOutside={true}
    >
      <section className="p-4 overflow-hidden">
        <div className="w-full justify-center items-center flex">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            className="w-28"
            width={112}
            height={0}
          />
        </div>
        <div className="my-6">
          <h1 className="text-2xl font-bold text-dark">{title}</h1>
          <p className="text-sm text-dark-200">
            {subTitle}{" "}
            <button
              className="text-primary cursor-pointer"
              onClick={onConfirm}
            >
              {content}
            </button>
          </p>
        </div>
        {children}
      </section>
    </Modal>
  );
};

export default AuthWrapper;

interface AuthWrapperProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  title: string;
  subTitle: string;
  content: string;
}
