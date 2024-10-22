export function buildSearchFilter(
  searchTerm?: string,
  type?: string,
  startDate?: string,
  endDate?: string
) {
  const searchFilter: any = {};

  // Add type to the filter if it exists
  if (type) {
    searchFilter.type = type;
  }

  // Add search term filters if searchTerm is provided and valid
  if (
    searchTerm &&
    searchTerm !== "" &&
    searchTerm !== "undefined" &&
    searchTerm !== "null" &&
    searchTerm !== "NaN"
  ) {
    searchFilter.OR = [
      { name: { contains: searchTerm, mode: "insensitive" } }, // Search by name (case-insensitive)
      { amount: { contains: searchTerm, mode: "insensitive" } }, // Search by amount as a string (case-insensitive)
    ];
  }

  // Validate startDate and endDate before adding the filter
  const validStartDate = startDate && !isNaN(new Date(startDate).getTime());
  const validEndDate = endDate && !isNaN(new Date(endDate).getTime());

  if (validStartDate || validEndDate) {
    searchFilter.createdAt = {
      ...(validStartDate && { gte: new Date(startDate) }), // Start date filter (greater than or equal)
      ...(validEndDate && { lte: new Date(endDate) }), // End date filter (less than or equal)
    };
  }

  return searchFilter;
}
