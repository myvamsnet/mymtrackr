import { FC, useState, forwardRef } from "react";
import { useController, Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";

// Wrap the component in forwardRef and forward the ref to the root element
export const CustomInput: FC<CustomInputProps> = forwardRef<
  HTMLInputElement,
  CustomInputProps
>(
  (
    {
      name,
      control,
      type,
      cols,
      rows,
      defaultValue,
      label,
      labelClassName,
      options,
      placeholder,
      handleFileChange,
      fileError,
      errorMessage,
      value,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const { field, fieldState } = useController({
      name,
      control,
      defaultValue,
    });

    const preventNumberInputScroll = (e: React.KeyboardEvent) => {
      if (type === "number" && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
        e.preventDefault();
      }
    };

    const valid = ["text", "number", "email", "password"];
    return (
      <div className="space-y-2">
        <label
          htmlFor={name}
          className={` text-sm font-normal text-dark-300 ${labelClassName}`}
        >
          {label}
        </label>
        {valid.includes(type) && (
          <div
            className={`bg-[#F1F5FD] py-3 px-4  text-base font-normal text-dark rounded-lg relative w-full outline-none ${
              fieldState.error ? "border-red-500 border" : ""
            }`}
          >
            <input
              autoComplete="off"
              id={name}
              type={showPassword ? "text" : type}
              {...field}
              {...rest}
              onKeyDown={preventNumberInputScroll}
              value={field?.value || ""}
              className="w-full h-full border-none  text-base outline-none bg-transparent"
              placeholder={placeholder}
            />
            {type === "password" && (
              <div>
                {showPassword ? (
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer transition-all duration-100 ease-in-out"
                  />
                ) : (
                  <EyeOff
                    className="text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer transition-all duration-100 ease-in-out"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            )}
          </div>
        )}
        {type === "textarea" && (
          <div>
            <textarea
              id={name}
              rows={rows || 5}
              cols={cols || 10}
              placeholder={placeholder}
              {...field}
              {...rest}
              value={field?.value || ""}
              className={`bg-[#F1F5FD] py-3 px-4  text-base font-normal text-dark rounded-lg resize-none w-full outline-none ${
                fieldState.error ? "border-red-500 border" : ""
              }`}
            ></textarea>
          </div>
        )}

        {type === "select" && (
          <Select
            name={name}
            onValueChange={(value) => field.onChange(value)}
            value={field.value || ""}
          >
            <SelectTrigger
              className={`bg-[#F1F5FD] py-3 px-4  text-base font-normal text-dark rounded-lg relative w-full outline-none ${
                fieldState.error ? "border-red-500 border" : ""
              }`}
            >
              <SelectValue placeholder={placeholder || "Select Options"} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {type === "file" && (
          <label
            htmlFor={name}
            className={`bg-[#F1F5FD] py-3 px-4 block  text-base font-normal text-dark rounded-lg relative w-full outline-none ${
              fieldState.error ? "border-red-500 border" : ""
            }`}
          >
            <input
              ref={ref}
              type="file"
              id={name}
              hidden
              onChange={handleFileChange}
              className="w-full h-full border-none text-base outline-none bg-transparent"
              placeholder={placeholder}
            />
            {placeholder}
          </label>
        )}

        {type === "ordinary" && value && (
          <input
            ref={ref}
            readOnly
            id={name}
            type={type}
            value={value}
            className="w-full h-full border text-base rounded-lg text-primary p-3 outline-none bg-transparent"
            placeholder={placeholder}
          />
        )}

        {fieldState.error && (
          <p className="text-red-500 font-normal text-sm md:w-[300px] w-full">
            {fieldState.error.message}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 font-normal text-sm md:w-[300px] w-full">
            {errorMessage}
          </p>
        )}
        {fileError && (
          <p className="text-red-500 font-normal text-sm">{fileError}</p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput"; // Display name for debugging purposes

interface CustomInputProps
  extends React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > {
  name: string;
  control: Control<any>;
  type:
    | "text"
    | "textarea"
    | "number"
    | "select"
    | "file"
    | "email"
    | "password"
    | "ordinary";
  cols?: number;
  rows?: number;
  defaultValue?: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  placeholder?: string;
  options?: {
    label: string;
    value: string;
  }[];
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileValue?: string;
  fileError?: string;
  errorMessage?: string;
  value?: string;
}
