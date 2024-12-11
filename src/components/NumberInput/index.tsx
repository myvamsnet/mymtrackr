"use client";

import React, { useState } from "react";
import { Control, useController } from "react-hook-form";
import { formatCurrency } from "@/lib/helper/formatCurrency";

export default function NumberInput({
  control,
  name,
  ...props
}: NumberInputProps) {
  const [displayValue, setDisplayValue] = useState("");
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: `${props.label} is required` },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    field.onChange(rawValue); // Store the raw value without commas
    setDisplayValue(formatCurrency(rawValue)); // Format for display
  };
  return (
    <div className="grid gap-2 w-full">
      {props.label && (
        <label
          htmlFor={name}
          className={` text-sm font-normal text-dark-300 ${props.containerClassName}`}
        >
          {props.label}
        </label>
      )}
      <div className="relative w-full">
        <input
          {...field}
          id={name}
          type="text"
          inputMode="numeric"
          className={`bg-[#F1F5FD] py-3 px-4  text-base font-normal text-dark rounded-lg relative w-full outline-none ${
            fieldState.error ? "border-red-500 border" : ""
          }`}
          placeholder="₦0"
          onChange={handleInputChange}
          value={displayValue}
        />
      </div>
      {fieldState.error && (
        <p className="text-red-500 font-normal text-sm md:w-[300px] w-full">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}
interface NumberInputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  error?: string;
}
