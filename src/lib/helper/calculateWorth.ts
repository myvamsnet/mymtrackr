import { Records } from '@/types/records';

export function calculateWorth(records: Records[]) {
  let totalIncome = 0;
  let totalPayable = 0;
  let totalDebtor = 0;
  let totalExpense = 0;

  records?.forEach((record) => {
    switch (record?.type) {
      case 'income':
        totalIncome += record?.amount;
        break;
      case 'payable':
        totalPayable += record?.amount;
        break;
      case 'debtor':
        totalDebtor += record?.amount;
        break;
      case 'expense':
        totalExpense += record?.amount;
        break;
    }
  });

  const grossWorth = Number(totalIncome) - Number(totalExpense);
  const netWorth =
    Number(grossWorth) + (Number(totalDebtor) - Number(totalPayable));

  return {
    grossWorth,
    netWorth,
    totalIncome,
    totalPayable,
    totalDebtor,
    totalExpense,
  };
}
