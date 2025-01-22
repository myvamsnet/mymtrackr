"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CookiesPolicy = () => {
  const [storedValue, setValue] = useLocalStorage("terms", false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client-side render
  }, []);

  const handleAccept = () => {
    setValue(true);
  };

  // Avoid rendering on the server
  if (!isClient || storedValue) return null;

  return (
    <section className="md:w-[386px] bg-white w-full fixed md:bottom-10 bottom-2 z-30 md:left-10 left-0 rounded-lg shadow-lg p-4 space-y-2">
      <h2 className="text-black font-medium capitalize">
        This website uses cookies
      </h2>
      <p className="text-dark-gray text-sm">
        This website uses cookies. For further information on how we use
        cookies, please read our{" "}
        <Link
          href="/privacy-policy"
          className="text-primary"
        >
          Privacy and Cookie notice
        </Link>
        .
      </p>
      <div className="flex justify-end items-center">
        <button
          className="text-white bg-primary py-2 px-4 rounded-md text-sm"
          onClick={handleAccept}
          disabled={storedValue}
        >
          Accept Cookies
        </button>
      </div>
    </section>
  );
};

export default CookiesPolicy;
