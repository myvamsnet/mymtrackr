import { CustomInput } from "@/components/CustomInput";
import { CustomModal } from "@/components/CustomModal";
import { SearchableSelect } from "@/components/SearchableSelect";
import { Button } from "@/components/ui/button";
import React from "react";
import { useUpdateBankAccount } from "../hook/useUpdateBankAccount";
import Modal from "@/components/ui/Modal";

export const AddAcountDetails = () => {
  const {
    bankListsArray,
    control,
    bankDetails,
    isValidationLoading,
    onConfirm,
    modal,
    isPending,
    onSubmit,
    handleSubmit,
    onCancel,
  } = useUpdateBankAccount();
  return (
    <>
      <Button
        onClick={() =>
          onConfirm({
            type: "default",
            isOpen: true,
          })
        }
        className="py-2 px-4"
      >
        Add Account
      </Button>

      <Modal
        isOpen={modal.isOpen && modal?.type === "default"}
        onClose={onCancel}
        title="Add Account"
      >
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <p className="font-medium text-sm text-dark-300">
            Please ensure that the account number and bank name are correct
          </p>
          <SearchableSelect
            control={control}
            name="bankName"
            options={bankListsArray as never}
            searchable
            label="Bank Name"
            placeholder="Select Bank Name"
          />
          <CustomInput
            name={"accountNumber"}
            type={"text"}
            label={"Account Number"}
            control={control}
            placeholder={"Enter Account Number"}
          />
          {/* {ValidateBankError?.} */}
          {isValidationLoading && !bankDetails ? (
            <small>Validating Account...</small>
          ) : null}
          {bankDetails && !isValidationLoading ? (
            <ul className="flex items-center">
              <li className=" font-normal text-xs text-primary">
                {bankDetails?.account_name}
              </li>
            </ul>
          ) : null}

          <Button className="py-2 px-4  w-full " disabled={isPending}>
            {isPending ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Modal>
    </>
  );
};
