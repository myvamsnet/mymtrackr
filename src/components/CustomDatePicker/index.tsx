"use client";

import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Control, useController } from "react-hook-form";
import dayjs from "dayjs";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export const CustomDatePicker = ({
  name,
  defaultValue,
  control,
  label,
  placeholder = "Pick a date",
}: Props) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
  });
  return (
    <>
      <Popover>
        <PopoverTrigger
          asChild
          className="bg-white"
        >
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
              {field.value ? (
                dayjs(field.value).format("MMM D, YYYY")
              ) : (
                <span>{placeholder}</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </div>
          </section>
        </PopoverTrigger>
        <PopoverContent
          className=" p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            initialFocus
            className="w-full"
          />
        </PopoverContent>
      </Popover>
    </>
  );
};
interface Props {
  name: string;
  control: Control<any>;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
}
