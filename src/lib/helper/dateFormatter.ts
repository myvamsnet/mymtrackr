import dayjs from "dayjs";

export const dateFormatter = (date: string, type = "short" as string) => {
  if (date && type === "short") {
    return dayjs(date).format("MMM D, YYYY");
  }
  return dayjs(date).format("MMM D, YYYY h:mm A");
};
