import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { TaskResponseData, TasksData } from "@/types/tasks";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const useGetAllTasks = () => {
  const { updateQueryParams } = useUpdateQuery();
  const [tasks, setTasks] = useState<TasksData[]>([]);
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
    queryKey: ["tasks", queryStatus, searchTerm],
    queryFn: fetchTasks,
    select: (response) => response,
  });

  useEffect(() => {
    if (status === "success") {
      setTasks(data?.data ?? []);
    }
  }, [data?.data, status]);

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
