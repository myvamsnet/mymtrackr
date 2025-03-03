export function calculateWorth(
  records: {
    type: string;
    amount: number | string;
  }[]
) {
  let totalIncome = 0;
  let totalPayable = 0;
  let totalDebtor = 0;
  let totalExpense = 0;

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
