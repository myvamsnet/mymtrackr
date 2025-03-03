import { CustomModal } from "@/components/CustomModal";
import useModal from "@/hooks/useModal";
import React from "react";

export const ViewBankDetails = ({
  bankName,
  accountName,
  accountNumber,
}: Props) => {
  const { onConfirm, modal } = useModal();
  const accountDetails = [
    { label: "Bank Name", value: bankName },
    { label: "Account Name", value: accountName },
    { label: "Account Number", value: accountNumber },
  ];
  return (
    <CustomModal
      isOpen={modal.isOpen && modal.type === "default"}
      onOpenChange={(open) => {
        onConfirm({
          type: "default",
          isOpen: open,
        });
      }}
      title="Account Information"
      content=""
      subTitle="To Cahnge your account information contact our support team"
      btnText="View  Deatils"
      className="text-sm py-2 px-4 "
    >
      <ul className="space-y-2">
        {accountDetails.map((detail, index) => (
          <li key={index} className="text-xs text-dark capitalize">
            <strong className="text-dark-400">{detail.label}:</strong>{" "}
            {detail.value}
          </li>
        ))}
      </ul>
    </CustomModal>
  );
};
interface Props {
  bankName: string;
  accountNumber: string;
  accountName: string;
}
