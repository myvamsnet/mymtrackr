import { Records } from "@/types/records";

export function calculateWorth(records: Records[]) {
  let totalIncome = 0;
  let totalPayable = 0;
  let totalDebtor = 0;
  let totalExpense = 0;
  let totalCapital = 0;

  records?.forEach((record) => {
    switch (record?.type) {
      case "income":
        totalIncome += Number(record?.amount);
        break;
      case "payable":
        totalPayable += Number(record?.amount);
        break;
      case "debtor":
        totalDebtor += Number(record?.amount);
        break;
      case "expense":
        totalExpense += Number(record?.amount);
      case "capital":
        totalCapital += Number(record?.amount);
        break;
    }
  });

  const avaliableBalance =
    Number(totalCapital) + Number(totalIncome) - Number(totalExpense); //avalibalance
  const finalBalance =
    Number(avaliableBalance) + (Number(totalDebtor) - Number(totalPayable)); //final balance
  const profit = Number(totalIncome) - Number(totalExpense);

  return {
    avaliableBalance,
    finalBalance,
    profit,
    totalIncome,
    totalPayable,
    totalDebtor,
    totalExpense,
    totalCapital,
  } as BalanceResponse;
}

export interface BalanceResponse {
  avaliableBalance: number;
  finalBalance: number;
  profit: number;
  totalIncome: number;
  totalPayable: number;
  totalDebtor: number;
  totalExpense: number;
  totalCapital: number;
}
