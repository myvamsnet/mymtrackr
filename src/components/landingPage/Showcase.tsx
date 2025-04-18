"use client";
import { ShowCaseImg } from "./ShowCaseImg";
import { ShowCaseNav } from "./ShowCaseNav";
import { ShowCaseTitle } from "./ShowCaseTitle";
import PWAInstallPrompt from "./PWAInstallPrompt";

export const Showcase = () => {
  return (
    <main className="bg-overlay bg-cover bg-center overflow-hidden grid   pt-3  lg:gap-[100px] gap-10 rounded-br-2xl rounded-bl-2xl ">
      <ShowCaseNav />
      <ShowCaseTitle />
      <ShowCaseImg />
      <PWAInstallPrompt />
    </main>
  );
};
