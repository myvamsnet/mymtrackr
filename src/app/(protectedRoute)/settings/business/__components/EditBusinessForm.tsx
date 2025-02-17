"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import { accountDetailsFields, inputFields } from "@/constant/profile";
import { ArrowDownIconSimple } from "@/assets/icons/ArrowDownIconSimple";
import Modal from "@/components/ui/Modal";
import { ColorPicker } from "react-color-palette";
import useModal from "@/hooks/useModal";
import { BusinessProfile } from "./BusinessProfile";
import { BusinessData } from "@/types/business";
import { useEditBusiness } from "../hook/useEditBusiness";

export const EditBusinessForm = ({ businessData }: Props) => {
  const { modal, onCancel, onConfirm } = useModal();

  const {
    control,
    previewUrl,
    handleFileChange,
    handleSubmit,
    onSubmit,
    color,
    setColor,
    isPending,
    imageLoader,
  } = useEditBusiness(businessData);

  return (
    <main className="bg-white">
      <BusinessProfile
        previewUrl={previewUrl as string}
        handleFileChange={handleFileChange}
        user={businessData}
      />
      <form
        className=" bg-off-white-300  grid gap-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="  grid gap-4 bg-white p-4">
          {inputFields.map((input, i) => (
            <CustomInput
              key={i}
              name={input.name}
              type={input.type}
              label={input.label}
              control={control}
              placeholder={input.placeholder}
              disabled={input.name === "email" ? true : false}
            />
          ))}
          <div
            onClick={() =>
              onConfirm({
                type: "default",
                isOpen: true,
              })
            }
          >
            <label className="font-normal text-sm text-off-white-300">
              Brand color
            </label>
            <div className="py-3 px-4 rounded-lg bg-off-white-300 border border-[#D6D7DB] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-4 rounded `}
                  style={{
                    backgroundColor: color?.hex,
                  }}
                ></div>
                <span>{color.hex}</span>
              </div>
              <ArrowDownIconSimple />
            </div>
          </div>
        </section>
        <section className=" grid gap-4 bg-white pt-4 px-4 md:pb-4 pb-20 rounded-xl">
          <h1 className="text-dark font-medium text-sm">Payment Account</h1>
          {accountDetailsFields.map((input, i) => (
            <CustomInput
              key={i}
              name={input.name}
              type={input.type}
              label={input.label}
              control={control}
              placeholder={input.placeholder}
              disabled={input.name === "email" ? true : false}
            />
          ))}
        </section>
        <div className="md:sticky fixed bottom-0 left-0 w-full p-2 z-40">
          <Button
            type="submit"
            className="  w-full font-semibold text-base"
            disabled={isPending || imageLoader}
          >
            {isPending || imageLoader ? "Loading..." : "Save Changes"}
          </Button>
        </div>
      </form>
      <Modal
        title=""
        isOpen={modal.isOpen && modal.type === "default"}
        onClose={onCancel}
        className="w-1/2 md:w-3/4"
      >
        <ColorPicker
          color={color}
          hideInput={["rgb", "hsv"]}
          onChange={setColor}
          onChangeComplete={(color) => {
            if (color.hex) {
              onCancel();
            }
          }}
        />
      </Modal>
    </main>
  );
};
interface Props {
  businessData: BusinessData;
}
