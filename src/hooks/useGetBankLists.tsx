import bankLists from "@/constant/bankLists.json";
const useGetBankLists = () => {
  const bankListsArray = bankLists.map(({ name, code }) => {
    const matchingObject = bankLists.find(
      (obj) => obj.code === code && obj.name === name
    );
    // If a matching object is found, create a new object for the new array
    if (matchingObject) {
      return { value: code, label: name as string };
    }
    // Handle the case where no matching object is found
    return null;
  });

  return { bankListsArray };
};

export default useGetBankLists;
export interface BankListResponse {
  status: boolean;
  message: string;
  data: Data[];
}

export interface Data {
  id: number;
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway?: string;
  pay_with_bank: boolean;
  supports_transfer: boolean;
  active: boolean;
  country: string;
  currency: string;
  type: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}
