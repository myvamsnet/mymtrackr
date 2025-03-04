import { createClient } from "@/lib/supabse/server";

export async function getFinancialStats(startDate: string, endDate: string) {
  const supabase = createClient();

  // Fetch total income (sum of all subscriptions) within date range
  const { data: incomeData, error: incomeError } = await supabase
    .from("subscriptions")
    .select("amount, created_at")
    .eq("status", "active")
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  // Fetch total referral expenses (sum of all referral earnings) within date range
  const { data: expenseData, error: expenseError } = await supabase
    .from("referrals")
    .select("amount, created_at")
    .eq("status", "active")
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  // Fetch total users, total subscribed, and total unsubscribed within date range
  const { count: totalSubscribed, error: subscribedError } = await supabase
    .from("userprofile")
    .select(
      "*, subscriptions!inner(*), referrals!referrals_referrer_id_fkey(id)",
      {
        count: "exact", // Ensure total count is returned
        head: true,
      }
    )
    .eq("role", "user")
    .eq("subscriptions.status", "active")
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  const { count: totalUsers, error: totalUserError } = await supabase
    .from("userprofile")
    .select("*", {
      count: "exact", // Ensure total count is returned
      head: true,
    })
    .eq("role", "user")
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  if (incomeError || expenseError || subscribedError || totalUserError) {
    console.error("Error fetching stats:", incomeError || expenseError);
    return {
      totalIncome: 0,
      totalExpense: 0,
      totalProfit: 0,
      totalUsers: 0,
      totalSubscribed: 0,
      totalUnsubscribed: 0,
    };
  }

  const totalIncome = incomeData.reduce((acc, cur) => acc + cur.amount, 0);
  const totalExpense = expenseData.reduce((acc, cur) => acc + cur.amount, 0);
  const totalProfit = totalIncome - totalExpense; // Profit = Income - Expense
  const totalUnsubscribed = Number(totalUsers) - Number(totalSubscribed);

  return {
    totalIncome,
    totalExpense,
    totalProfit,
    totalUsers: (Number(totalUsers) as number) || 0,
    totalSubscribed: Number(totalSubscribed) || 0,
    totalUnsubscribed,
  };
}
