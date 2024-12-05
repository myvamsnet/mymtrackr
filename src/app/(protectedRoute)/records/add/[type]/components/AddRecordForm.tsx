"use client";
import { CustomInput } from "@/components/CustomInput";
import NumberInput from "@/components/NumberInput";
import { InputType } from "@/constant/createRecords";
import React, { FC } from "react";
import { useCreateRecord } from "../hook/useCreateRecord";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const AddRecordForm: FC<CreateRecordsProps> = ({ inputlists }) => {
  const {
    control,
    handleSubmit,
    handleFileChange,
    errorMessage,
    previewUrl,
    onSubmit,
    isPending,
  } = useCreateRecord();

  return (
    <form
      className="bg-off-white-300 p-4 rounded-xl grid gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputlists.map((input, i) => {
        return input.type === "currency" ? (
          <NumberInput
            key={`${input.name}-${i}`}
            name={"amount"}
            type={input.type}
            label={input.label}
            control={control}
            placeholder={input.placeholder}
          />
        ) : (
          <section key={`${input.name}-${i}`}>
            <CustomInput
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
                    src={previewUrl}
                    alt="uploaded"
                    className="w-10 h-10 mt-2"
                    height={40}
                    width={40}
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
          className={`bg-primary hover:bg-primary/80 w-full py-3 px-2 rounded-lg text-off-white-300 font-semibold h-[45px] ${
            isPending ? "opacity-55 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isPending ? true : false}
        >
          {isPending ? "Loading..." : "Add  Record"}
        </Button>
      </div>
    </form>
  );
};

interface CreateRecordsProps {
  recordType: "expense" | "income" | "debtor" | "payable";
  inputlists: InputType[];
  title: string;
}
