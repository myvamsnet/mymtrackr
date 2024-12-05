import { CustomInput } from "@/components/CustomInput";

import { AddRecordsSchemaType } from "@/lib/Schema/incomeSchema";
import NumberInput from "@/components/NumberInput";
import { Button } from "@/components/ui/button";
import { InputType } from "@/constant/createRecords";

import { useParams } from "next/navigation";
import { Payload, useEditRecord } from "../hooks/useEditRecord";
import { Records, Type } from "@/types/records";
import { useEffect } from "react";
import Image from "next/image";
import { checkImageFormat } from "@/lib/helper/checkImageFormat";
const EditRecordForm = ({
  recordType,
  inputlists,
  record,
}: CreateRecordsProps) => {
  const {
    control,
    handleSubmit,
    handleFileChange,
    errorMessage,
    previewUrl,
    uploading,
    isPending,
    setValue,
    setPreviewUrl,
    mutate,
  } = useEditRecord();

  useEffect(() => {
    if (record) {
      const image = checkImageFormat(record?.imageUrl as string);
      setValue("amount", String(record?.amount));
      setValue("name", record?.name);
      setValue("note", record?.note);
      setPreviewUrl(image ? record?.imageUrl : "");
    }
  }, [record, setValue, setPreviewUrl]);
  const onSubmit = async (data: AddRecordsSchemaType) => {
    const payload = {
      ...data,
      type: record?.type,
      image: record?.imageUrl,
      recordId: record?.id,
    } as Payload;
    mutate(payload);
  };

  return (
    <main className="container mx-auto   font-inter">
      <form
        className="bg-off-white-300 p-3 rounded-xl grid gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputlists.map((input, i) => {
          return input.type === "currency" ? (
            <NumberInput
              key={i}
              name={"amount"}
              type={input.type}
              label={input.label}
              control={control}
              placeholder={input.placeholder}
            />
          ) : (
            <section>
              <CustomInput
                key={i}
                name={input.name}
                type={input.type}
                label={input.label}
                control={control}
                placeholder={input.placeholder}
                handleFileChange={handleFileChange}
                fileError={errorMessage}
              />
              {input.type === "file" && (
                <div className="flex justify-end items-center">
                  {previewUrl && (
                    <Image
                      height={40}
                      width={40}
                      src={previewUrl}
                      alt="uploaded"
                      className="w-10 h-10 mt-2"
                    />
                  )}
                </div>
              )}
            </section>
          );
        })}
        <p className="text-red-300">
          Please confirm the details before submitting
        </p>
        <div>
          <Button
            className="bg-primary hover:bg-primary/80 w-full py-3 px-2 rounded-lg text-off-white-300 font-semibold h-[45px]"
            type="submit"
          >
            {isPending ? "Loading..." : uploading ? "Please wait..." : "Submit"}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default EditRecordForm;

interface CreateRecordsProps {
  recordType: "expense" | "income" | "debtor" | "payable";
  inputlists: InputType[];
  title: string;
  record: Records;
}
