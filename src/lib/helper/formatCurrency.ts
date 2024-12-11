export function formatCurrency(value: string): string {
  // Remove non-digit characters
  const digits = value.replace(/\D/g, "");

  // Format with commas for display
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseInt(digits) || 0);
}
