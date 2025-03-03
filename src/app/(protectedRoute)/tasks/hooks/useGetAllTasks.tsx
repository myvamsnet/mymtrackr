import axiosInstance from "@/lib/axios";
import { TaskResponseData } from "@/types/tasks";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";

const useGetAllTasks = () => {
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

  return {
    tasks: data?.data,
    status,
    error,
  };
};

export default useGetAllTasks;

export type Status = "pending" | "completed";
