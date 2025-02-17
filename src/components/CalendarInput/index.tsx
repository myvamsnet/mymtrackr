"use client";

import { useState } from "react";
import { format, startOfYear, endOfYear } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  type Control,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface CalendarInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
}

export function CalendarInput<T extends FieldValues>({
  control,
  name,
  label,
}: CalendarInputProps<T>) {
  const { field, fieldState } = useController({ name, control });

  const [month, setMonth] = useState<number>(
    field.value ? field.value.getMonth() : new Date().getMonth()
  );
  const [year, setYear] = useState<number>(
    field.value ? field.value.getFullYear() : new Date().getFullYear()
  );
  const [open, setOpen] = useState(false);

  const handleMonthChange = (newMonth: string) => {
    setMonth(Number.parseInt(newMonth, 10));
  };

  const handleYearChange = (newYear: string) => {
    setYear(Number.parseInt(newYear, 10));
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
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
                format(field.value, "PPP")
              ) : (
                <span>Pick a date</span>
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
        <PopoverContent className="bg-white p-0" align="start">
          <div className="flex flex-col space-y-2 p-3 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Select value={month.toString()} onValueChange={handleMonthChange}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {format(new Date(year, i), "MMMM")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={year.toString()} onValueChange={handleYearChange}>
              <SelectTrigger className="w-full sm:w-[140px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 21 }, (_, i) => {
                  const yearValue = new Date().getFullYear() - 10 + i;
                  return (
                    <SelectItem key={yearValue} value={yearValue.toString()}>
                      {yearValue}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(date) => {
              field.onChange(date);
              if (date) {
                setMonth(date.getMonth());
                setYear(date.getFullYear());
                setOpen(false);
              }
            }}
            month={new Date(year, month)}
            onMonthChange={(newMonth) => {
              setMonth(newMonth.getMonth());
              setYear(newMonth.getFullYear());
            }}
            className="rounded-md border bg-white w-full"
            fromDate={startOfYear(new Date(year - 100, 0))}
            toDate={endOfYear(new Date(year + 100, 11))}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
