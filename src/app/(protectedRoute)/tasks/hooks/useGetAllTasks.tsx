import axiosInstance from "@/lib/axios";
import { TaskResponseData, TasksData } from "@/types/tasks";
import { useTaskStore } from "@/zustand/TaskStore";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useGetAllTasks = () => {
  const { setTasks, tasks } = useTaskStore();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm");
  const queryStatus = searchParam.get("status");

  const values = {
    status: queryStatus === "completed" ? "true" : "false",
    searchTerm,
  };

  const { data, status, error } = useQuery<TaskResponseData>({
    queryKey: [`tasks-${queryStatus}`, searchTerm ?? ""],
    queryFn: async () => {
      const param = new URLSearchParams(Object(values)).toString();
      const { data } = await axiosInstance.get(
        `/tasks${param ? `?${param}` : ""}`
      );
      return data;
    },
  });
  useEffect(() => {
    if (status === "success" && data?.data) {
      setTasks(data?.data as TasksData[]);
    }
  }, [status, data?.data]);
  return {
    tasks,
    status,
    error,
  };
};

export default useGetAllTasks;

export type Status = "pending" | "completed";
