import { ITableBody } from "@/types/newTable.types";

type CheckDataOptions = {
  isLoading: boolean;
  isError: boolean;
  results: ITableBody[];
};

type DataStatus = {
  isSuccessfullyLoaded: boolean;
  dataNotEmpty: boolean;
  isDataUndefined: boolean;
  checkEmptyData: boolean;
};

export const checkDataStatus = ({
  isLoading,
  isError,
  results,
}: CheckDataOptions): DataStatus => {
  const isSuccessfullyLoaded = !isLoading && !isError;
  const dataNotEmpty = Array.isArray(results) && results?.length > 0;
  const isDataUndefined = results?.length === undefined;
  const checkEmptyData = Boolean(
    !isDataUndefined && !dataNotEmpty && isSuccessfullyLoaded
  );
  return {
    isSuccessfullyLoaded,
    dataNotEmpty,
    isDataUndefined,
    checkEmptyData,
  };
};
