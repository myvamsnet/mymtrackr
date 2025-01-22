export const apiParams = (values: IApiParams) => {
  let url = ``;
  if (
    values.searchTerm !== null &&
    values.searchTerm !== "" &&
    values.searchTerm !== undefined
  ) {
    url += `&searchTerm=${values.searchTerm}`;
  }

  if (
    values.startDate !== null &&
    values.startDate !== "" &&
    values.startDate !== undefined
  ) {
    url += `&startDate=${values.startDate}`;
  }
  if (
    values.endDate !== null &&
    values.endDate !== "" &&
    values.endDate !== undefined
  ) {
    url += `&endDate=${values.endDate}`;
  }
  if (
    values.status !== null &&
    values.status !== "" &&
    values.status !== undefined &&
    values.status !== "all"
  ) {
    url += `&status=${values.status}`;
  }
  if (values.page !== null && values.page !== undefined) {
    url += `&page=${values.page}`;
  }

  return { url };
};

interface IApiParams {
  searchTerm?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: string;
}
