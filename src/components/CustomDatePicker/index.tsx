"use client";

import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Control, useController } from "react-hook-form";
import dayjs from "dayjs";
import { useState } from "react";

export const CustomDatePicker = ({
  name,
  defaultValue,
  control,
  label,
  placeholder,
}: Props) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
  });

  const [open, setOpen] = useState(false);
  return (
    <>
      <Popover
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
        }}
        defaultOpen={open}
      >
        <PopoverTrigger asChild className="bg-white space-y-2">
          <section>
            {label && (
              <label
                htmlFor={name}
                className={` text-sm font-normal text-dark-300 capitalize `}
              >
                {label}
              </label>
            )}
            <div
              role="button"
              className={cn(
                " flex justify-between items-center w-full py-3 px-4 bg-off-white-500",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value && !isNaN(new Date(field.value).getTime()) ? (
                dayjs(field.value).format("MMM D, YYYY")
              ) : (
                <span>{placeholder}</span>
              )}

              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </div>

            {fieldState.error && (
              <p className="text-red-500 font-normal text-sm md:w-[300px] w-full">
                {fieldState.error.message}
              </p>
            )}
          </section>
        </PopoverTrigger>
        <PopoverContent className=" p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(date: Date | undefined) => {
              field.onChange(date || null); // Handle undefined values gracefully
              setOpen(false);
            }}
            initialFocus
            className="w-full bg-white"
          />
        </PopoverContent>
      </Popover>
    </>
  );
};
interface Props {
  name: string;
  control: Control<any>;
  defaultValue?: Date;
  label?: string;
  placeholder?: string;
}
