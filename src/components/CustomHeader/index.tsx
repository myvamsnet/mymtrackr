"use client";
import { ArrowBackIcon } from "@/assets/icons/ArrowBackIcon";
import { useRedirect } from "@/hooks/useRedirect";

export const CustomHeader = ({ title, link }: CustomHeaderProps) => {
  const redirect = useRedirect();
  const handleBack = () => {
    if (link) return redirect(link);
    redirect();
  };
  return (
    <section className="bg-[#F4F8FF] sticky top-0 z-30">
      <header className="w-full flex items-center gap-4  py-3 px-4  ">
        <div
          onClick={handleBack}
          className=" cursor-pointer"
        >
          <ArrowBackIcon />
        </div>

        <h2 className="font-semibold text-dark text-base capitalize flex-1 text-center w-full">
          {title}
        </h2>
      </header>
    </section>
  );
};
interface CustomHeaderProps {
  title: string;
  link?: string;
}
