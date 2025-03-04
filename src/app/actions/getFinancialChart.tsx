import { createClient } from "@/lib/supabse/server";

export async function getFinancialChart(startDate: string, endDate: string) {
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
  const { data: userData, error: userError } = await supabase
    .from("userprofile")
    .select("created_at, role, subscriptions(status)")
    .eq("role", "user")
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  if (incomeError || expenseError || userError) {
    console.error(
      "Error fetching stats:",
      incomeError || expenseError || userError
    );
    return [];
  }

  // Aggregate data by date
  const statsMap = new Map();

  incomeData.forEach(({ created_at, amount }) => {
    const date = new Date(created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    if (!statsMap.has(date))
      statsMap.set(date, {
        date,
        "Total Income": 0,
        "Total Expense": 0,
        "Total Profit": 0,
        "Total Users": 0,
        "Total Subscribed": 0,
        "Total Unsubscribed": 0,
      });
    statsMap.get(date)["Total Income"] += amount;
  });

  expenseData.forEach(({ created_at, amount }) => {
    const date = new Date(created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    if (!statsMap.has(date))
      statsMap.set(date, {
        date,
        "Total Income": 0,
        "Total Expense": 0,
        "Total Profit": 0,
        "Total Users": 0,
        "Total Subscribed": 0,
        "Total Unsubscribed": 0,
      });
    statsMap.get(date)["Total Expense"] += amount;
  });

  userData.forEach(({ created_at, subscriptions }) => {
    const date = new Date(created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    if (!statsMap.has(date))
      statsMap.set(date, {
        date,
        "Total Income": 0,
        "Total Expense": 0,
        "Total Profit": 0,
        "Total Users": 0,
        "Total Subscribed": 0,
        "Total Unsubscribed": 0,
      });
    statsMap.get(date)["Total Users"] += 1;
    if (subscriptions?.some((sub) => sub.status === "active")) {
      statsMap.get(date)["Total Subscribed"] += 1;
    }
  });

  // Compute profit and unsubscribed users
  statsMap.forEach((stat) => {
    stat["Total Profit"] = stat["Total Income"] - stat["Total Expense"];
    stat["Total Unsubscribed"] = stat["Total Users"] - stat["Total Subscribed"];
  });

  return Array.from(statsMap.values());
}
