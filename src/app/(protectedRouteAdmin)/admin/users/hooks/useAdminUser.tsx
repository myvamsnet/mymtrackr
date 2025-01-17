import { useFetch } from "@/hooks/useFetch";
import React from "react";

const useAdminUser = <T = unknown,>(id: string) => {
  const query = useFetch<T>(
    "/admin/users", // Dynamically set the endpoint based on `id`
    id, // If your `useFetch` accepts additional options, pass them here or replace `undefined`.
    "admin/users",
    true
  );

  return query;
};

export default useAdminUser;
