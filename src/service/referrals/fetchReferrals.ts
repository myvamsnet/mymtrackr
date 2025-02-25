/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/axios";

export const fetchReferrals = async (
  page: number,
  status?: string // Optional parameter
): Promise<{ data: any }> => {
  try {
    // Construct query parameters dynamically
    const params = new URLSearchParams({ page: page.toString() });
    if (status) {
      params.append("status", status); // Only include status if it's provided
    }

    const { data } = await axiosInstance.get(`referrals?${params.toString()}`);
    return data;
  } catch (error: any) {
    console.error("Error fetching referrals:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch referrals."
    );
  }
};
