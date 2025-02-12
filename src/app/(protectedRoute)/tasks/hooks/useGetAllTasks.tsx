import axiosInstance from "@/lib/axios";
import { TaskResponseData, TasksData } from "@/types/tasks";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useGetAllTasks = () => {
  const [tasks, setTasks] = useState<TasksData[] | []>([]);
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm") || "";
  const queryStatus = searchParam.get("status");
  const statusValue = queryStatus === "completed" ? "true" : "false";

  const { data, status, error } = useQuery<TaskResponseData>({
    queryKey: ["tasks", queryStatus, searchTerm],
    queryFn: async () => {
      const params = new URLSearchParams({
        status: statusValue,
        searchTerm,
      }).toString();
      const response = await axiosInstance.get(
        `/tasks${params ? `?${params}` : ""}`
      );
      return response.data;
    },
    select: (response) => {
      return response;
    },
  });

  useEffect(() => {
    const getTasksData = () => {
      if (data?.data && data?.data?.length > 0 && status === "success") {
        setTasks(data?.data);
      }
    };
    getTasksData();
  }, [data?.data, status]);

  return {
    tasks,
    status,
    error,
    setTasks,
  };
};

export default useGetAllTasks;

export type Status = "pending" | "completed";
