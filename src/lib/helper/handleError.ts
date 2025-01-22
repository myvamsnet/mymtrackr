import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const handleError = (error: unknown) => {
  if (error instanceof AxiosError) {
    // Safely access AxiosError properties
    const errorMessage =
      error.response?.data?.message || "Something went wrong, Try Again";
    toast.error(errorMessage);
  } else if (error instanceof Error) {
    // For non-Axios errors
    toast.error(error.message || "An unknown error occurred");
  } else {
    // Fallback for truly unknown errors
    toast.error("An unknown error occurred");
    console.error(error);
  }
};
