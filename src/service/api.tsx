import axiosInstance from "@/lib/axios";

export const apiService = async ({
  method,
  endpoint,
  data,
}: ApiServiceProps) => {
  switch (method) {
    case "POST":
      return axiosInstance.post(endpoint, data);
    case "PUT":
      return axiosInstance.put(endpoint, data);
    case "DELETE":
      return axiosInstance.delete(endpoint);
    case "GET":
    default:
      return axiosInstance.get(endpoint);
  }
};

type ApiServiceProps = {
  method: MethodProps;
  endpoint: string;
  data?: any;
};

type MethodProps = "POST" | "GET" | "PUT" | "DELETE";
