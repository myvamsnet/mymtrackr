import dayjs from "dayjs";

export const checkSubscription = (expires_at: string) => {
  if (expires_at) {
    const expiryDate = dayjs(expires_at).add(1, "day"); // Add 1 day
    const today = dayjs();
    const remainingDays = expiryDate.diff(today, "day"); // Get difference in days

    return remainingDays;
  }
};
