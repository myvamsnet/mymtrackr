import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export const useUpdateQuery = () => {
  const navigate = useRouter();
  const pathname = usePathname();

  const updateQueryParams = useCallback(
    (newParams: Record<string, string>) => {
      const currentParams = new URLSearchParams(window.location.search);

      for (const [key, value] of Object.entries(newParams)) {
        if (value === "" || value == "all" || value === "Filter Products By") {
          delete newParams[key]; // Use delete to remove the key from newParams
          currentParams.delete(key); // Delete the parameter if the value is empty
        } else {
          currentParams.set(key, value); // Set or update the parameter if it has a value
        }
      }

      // Update the URL without a page reload
      navigate.replace(`${pathname}?${currentParams.toString()}`);
    },
    [navigate, pathname]
  );

  return {
    updateQueryParams,
  };
};
