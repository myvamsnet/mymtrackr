import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <section className="container mx-auto  md:max-w-[700px] font-inter lg:p-0 px-3 gap-4   my-3 h-screen  grid place-content-center text-center">
      <div className="animate-pulse">
        <Image src={"/images/logo.svg"} alt="loader" width={109} height={30} />
      </div>
    </section>
  );
};

export default loading;
