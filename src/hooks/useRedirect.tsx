"use client";
import { useRouter } from "next/navigation";

export const useRedirect = () => {
  const navigate = useRouter();

  const redirectToPage = (path?: string) => {
    if (!path) {
      // Replace the current history entry with a clean URL (no query)
      window.history.replaceState({}, "", window.location.pathname);
      // Navigate back
      return navigate.back();
    }

    // Prevent the back button from returning to the current page
    window.history.replaceState({}, "", path);
    navigate.replace(path);
  };

  return redirectToPage;
};
