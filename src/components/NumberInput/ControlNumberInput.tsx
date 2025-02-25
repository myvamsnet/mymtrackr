/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface NumberInputProps {
  name?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
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
  inputClassName?: string;
  disabled?: boolean;
  error?: string;
}

const ControlNumberInput: React.FC<NumberInputProps> = ({
  name,
  value,
  onChange,
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
  inputClassName,
  disabled,
  error,
}) => {
  const nairaSymbol = "\u20A6";
  const [internalValue, setInternalValue] = useState<string | number>(
    value || ""
  );

  // Handle value change locally or call the external onChange handler
  const handleValueChange = (values: { value: string }) => {
    setInternalValue(values.value);
    onChange?.(values.value);
  };

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
          className={`text-sm font-normal text-dark-300 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <NumericFormat
        {...numberFormatProps}
        thousandSeparator={thousandSeparator}
        customInput={customInput}
        value={internalValue}
        onValueChange={handleValueChange}
        placeholder={placeholder}
        className={`bg-[#F1F5FD] py-3 w-full px-4 h-[41px] text-sm font-normal text-dark rounded-lg border-none outline-none ${inputClassName}`}
        disabled={disabled}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </section>
  );
};

export default ControlNumberInput;
