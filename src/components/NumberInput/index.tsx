import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import {
  Controller,
  Control,
  FieldValues,
  FieldPath,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from "react-hook-form";
interface NumberInputProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  format?: string;
  mask?: string;
  placeholder?: string;
  customInput?: React.ComponentType<any>;
  type?: "phone" | "currency" | "amount";
  thousandSeparator?: boolean;
  decimalScale?: number;
  prefix?: string;
  suffix?: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  disabled?: boolean;
}

const NumberInput = <TFieldValues extends FieldValues>({
  name,
  control,
  placeholder,
  customInput = (props) => <input {...props} />,
  type,
  decimalScale,
  prefix,
  suffix,
  thousandSeparator = true,
  label,
  labelClassName,
  containerClassName,
  disabled,
}: NumberInputProps<TFieldValues>) => {
  const nairaSymbol = "\u20A6";

  const renderNumberFormat = ({
    field,
    fieldState,
  }: {
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;

    formState: UseFormStateReturn<any>;
  }) => {
    const { onChange, onBlur, value } = field;

    const numberFormatProps: Partial<NumericFormatProps> = {
      decimalScale: decimalScale || 2,
      prefix: type === "currency" ? prefix || nairaSymbol : undefined,
      suffix: type === "amount" ? suffix || "" : undefined,
    };

    return (
      <section
        className={`flex flex-col items-start gap-2 ${containerClassName}`}
      >
        {label && (
          <label
            htmlFor={name}
            className={` text-sm font-normal text-dark-300 ${labelClassName}`}
          >
            {label}
          </label>
        )}

        <NumericFormat
          {...numberFormatProps}
          thousandSeparator={thousandSeparator}
          customInput={customInput}
          value={value || ""}
          onValueChange={(values) => onChange(values.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className="bg-[#F1F5FD] py-3 w-full px-4 h-[41px] text-sm font-normal text-dark rounded-lg border-none outline-none"
          disabled={disabled}
        />
        {fieldState.error && (
          <p className="text-xs text-red-500">{fieldState.error.message}</p>
        )}
      </section>
    );
  };

  return (
    <Controller name={name} control={control} render={renderNumberFormat} />
  );
};

export default NumberInput;
