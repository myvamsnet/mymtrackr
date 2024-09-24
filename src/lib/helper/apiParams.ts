export const apiParams = (values: ValuesProps) => {
  let url = ``;
  if (
    values.searchTerm !== null &&
    values.searchTerm !== "" &&
    values.searchTerm !== undefined
  ) {
    url += `searchTerm=${values.searchTerm}`;
  }
  if (
    values.startDate !== null &&
    values.startDate !== "" &&
    values.startDate !== undefined &&
    values.startDate !== "Invalid Date"
  ) {
    url += `startDate=${values.startDate}`;
  }
  if (
    values.endDate !== null &&
    values.endDate !== "" &&
    values.endDate !== undefined &&
    values.endDate !== "Invalid Date"
  ) {
    url += `endDate=${values.endDate}`;
  }
  if (
    values.yearlyRange !== null &&
    values.yearlyRange !== "" &&
    values.yearlyRange !== undefined
  ) {
    url += `year=${values.yearlyRange}`;
  }
  if (values.type !== null && values.type !== undefined) {
    url += `&type=${values.type}`;
  }

  return url;
};
export interface ValuesProps {
  startDate?: string;
  endDate?: string;
  searchTerm?: string;
  yearlyRange?: string;
  type: "income" | "expense" | "payable" | "debtor";
}
