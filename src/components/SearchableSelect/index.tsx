/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDownIcon, CheckIcon, SearchIcon } from "lucide-react";
import { useController, Control } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  label?: string;
  placeholder?: string;
  searchable?: boolean;
}

export function SearchableSelect({
  name,
  control,
  options,
  label,
  searchable = false,
  placeholder = "Select an option...",
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = useMemo(() => {
    return options?.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={`${name}-select`}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative w-full" ref={wrapperRef}>
        <button
          id={`${name}-select`}
          type="button"
          className={`w-full h-[45px] px-4 text-left bg-white border ${error ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none  flex items-center justify-between`}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate text-gray-500">
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </button>
        {isOpen && (
          <div className="absolute z-40 w-full h-[50vh] overflow-auto mt-1 bg-white border border-gray-300 rounded-md shadow-lg ">
            {searchable && (
              <div className="p-2">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full h-[45px] pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            )}

            <ul
              className=" relative  z-40 h-[50vh] overflow-y-auto"
              role="listbox"
              id={`${name}-listbox`}
              aria-labelledby={`${name}-select`}
            >
              {filteredOptions.map((option, i) => (
                <li
                  key={`${option.value}-${i}`}
                  id={`${name}-option-${option.value}`}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-dark/90 ${value === option.value ? "bg-gray-200" : ""
                    }`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  role="option"
                  aria-selected={value === option.value}
                >
                  <div className="flex items-center text-sm py-2">
                    <span className="flex-grow truncate">{option.label}</span>
                    {value === option.value && (
                      <CheckIcon className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </li>
              ))}
              {filteredOptions.length === 0 && (
                <li className="px-4 py-2 text-gray-500 h-[45px] flex items-center capitalize">
                  No options found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
