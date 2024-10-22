"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const CookiesPolicy = () => {
  const [cookies, setCookie] = useCookies(["terms"]);
  const [terms, setTerms] = React.useState("");

  const handleAccept = () => {
    setCookie("terms", "accepted", { path: "/" }); // Ensure cookie is set site-wide
    setTerms("accepted");
  };
  useEffect(() => {
    if (cookies?.terms === "accepted") {
      setTerms(cookies?.terms);
    }
  }, [cookies]);

  if (terms === "accepted") return null;
  return (
    <>
      <section className="md:w-[386px] bg-white w-full fixed md:bottom-10 bottom-2 z-50 md:left-10 left-0 rounded-lg shadow-lg p-4 space-y-2">
        <h2 className="text-black font-medium capitalize">
          This website uses cookies
        </h2>
        <p className="text-dark-gray text-sm">
          This website uses cookies. For further information on how we use
          cookies you can read our{" "}
          <Link
            href="/privacy-policy"
            className="text-primary"
          >
            Privacy and Cookie notice
          </Link>
        </p>
        <div className="flex justify-end items-center">
          <button
            className="text-white bg-primary py-2 px-4 rounded-md text-sm"
            onClick={handleAccept}
            disabled={terms === "accepted"}
          >
            Accept Cookies
          </button>
        </div>
      </section>
    </>
  );
};

export default CookiesPolicy;
