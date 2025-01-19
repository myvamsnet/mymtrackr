import { CustomInput } from "@/components/CustomInput";
import { CustomModal } from "@/components/CustomModal";
import { SearchableSelect } from "@/components/SearchableSelect";
import { Button } from "@/components/ui/button";
import React from "react";
import { useUpdateBankAccount } from "../hook/useUpdateBankAccount";

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
  } = useUpdateBankAccount();
  return (
    <CustomModal
      isOpen={modal.isOpen && modal?.type === "default"}
      onOpenChange={(open) => {
        onConfirm({
          type: "default",
          isOpen: open,
        });
      }}
      title="Add Account Details"
      subTitle="Please confirm Bank Details before submitting"
      btnText={"Add Account"}
      className="py-2 px-3 text-xs"
      content=""
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
          <ul className="flex justify-end items-center">
            <li className=" font-normal text-sm text-primary">
              <strong>Account Name:</strong> {bankDetails?.account_name}
            </li>
          </ul>
        ) : null}

        <Button className="py-2 px-4  w-full " disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </Button>
      </form>
    </CustomModal>
  );
};
