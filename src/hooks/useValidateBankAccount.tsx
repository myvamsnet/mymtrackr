import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useValidateBankAccount = ({
  account_number,
  bank_code,
}: {
  account_number: string;
  bank_code: string;
}) => {
  const { isLoading, error, isError, data } = useQuery<DataResponse | null>({
    queryKey: ["validateBankDetails", account_number ?? "", bank_code ?? ""],
    queryFn: async () => {
      if (!account_number || !bank_code) {
        // Return null if the required parameters are missing
        return null;
      }
      const res = await axios.get(
        `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
        {
          headers: {
            Authorization: `Bearer ${
              process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY as string
            }`,
          },
        }
      );
      return res.data;
    },
    enabled: !!account_number && !!bank_code, // Ensure the query only runs if both values are provided
  });

  return { data, isLoading, error, isError };
};

export default useValidateBankAccount;

export interface DataResponse {
  status: boolean;
  message: string;
  data: Data;
}

export interface Data {
  account_number: string;
  account_name: string;
  bank_id: number;
}
