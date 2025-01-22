// Helper function to validate a date
export const isValidDate = (date: any) => {
  return date && !isNaN(new Date(date).getTime());
};
