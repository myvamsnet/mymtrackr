import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { TaskResponseData } from "@/types/tasks";
import useTaskStore from "@/zustand/taskStore";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useCallback } from "react";

const useGetAllTasks = () => {
  const { setTasks, tasks } = useTaskStore();
  const { updateQueryParams } = useUpdateQuery();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm") || "";
  const queryStatus = searchParam.get("status");
  const statusValue = queryStatus === "completed" ? "true" : "false";

  const fetchTasks = useCallback(async () => {
    const params = new URLSearchParams({
      status: statusValue,
      searchTerm,
    }).toString();

    const response = await axiosInstance.get(
      `/tasks${params ? `?${params}` : ""}`
    );
    return response.data;
  }, [statusValue, searchTerm]);

  const { data, status, error } = useQuery<TaskResponseData>({
    queryKey: ["tasks", queryStatus ?? "", searchTerm ?? ""],
    queryFn: fetchTasks,
  });

  useEffect(() => {
    if (status === "success") {
      setTasks(data?.data ?? []);
    }
  }, [data?.data, status, setTasks]);

  useEffect(() => {
    if (
      queryStatus === "" ||
      queryStatus === undefined ||
      queryStatus === null
    ) {
      updateQueryParams({
        status: "pending",
      });
    }
  }, [queryStatus, updateQueryParams]);

  return {
    tasks,
    status,
    error,
    setTasks,
  };
};

export default useGetAllTasks;

export type Status = "pending" | "completed";
