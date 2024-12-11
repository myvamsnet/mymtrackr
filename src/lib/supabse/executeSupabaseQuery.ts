"use server";
import { createClient } from "./server";

// Initialize Supabase client (replace with your Supabase credentials)
const supabaseApi = createClient();
type QueryOptions = {
  table: string;
  fields?: string[];
  filters?: Record<string, any>;
  rangeFilters?: Record<string, { gte?: any; lte?: any }>;
  searchFilters?: Record<string, { ilike?: string; eq?: any }>;
  sortField?: string;
  ascending?: boolean;
};

type QueryResult<T> = {
  data: T | null;
  error: any;
};

/**
 * Utility function to create a Supabase query.
 *
 * @param {QueryOptions} options - Query options.
 * @returns {Promise<QueryResult<T>>} The fetched data and error (if any).
 */
export async function executeSupabaseQuery<T>({
  table,
  fields = ["*"],
  filters = {},
  rangeFilters = {},
  searchFilters = {},
  sortField = "updated_at",
  ascending = false,
}: QueryOptions): Promise<QueryResult<T>> {
  try {
    // Initialize the query
    let query = supabaseApi.from(table).select(fields.join(","));

    // Apply filters
    for (const [key, value] of Object.entries(filters)) {
      query = query.eq(key, value);
    }

    // Apply range filters
    for (const [key, value] of Object.entries(rangeFilters)) {
      if (value.gte) query = query.gte(key, value.gte);
      if (value.lte) query = query.lte(key, value.lte);
    }

    // Apply search filters
    for (const [key, value] of Object.entries(searchFilters)) {
      if (value.ilike) query = query.ilike(key, `%${value.ilike}%`);
      if (value.eq) query = query.eq(key, value.eq);
    }

    // Apply sorting
    query = query.order(sortField, { ascending });

    // Execute the query
    const { data, error } = await query;

    return { data, error };
  } catch (error) {
    console.error("Error executing query:", error);
    return { data: null, error };
  }
}

type FetchRecordsOptions = {
  type: string;
  user_id: string;
  startDate?: string;
  endDate?: string;
  searchTerm?: string;
  sortField?: string;
  ascending?: boolean;
};

/**
 * Fetch records using the reusable query function.
 *
 * @param {FetchRecordsOptions} options - Filter options.
 * @returns {Promise<QueryResult<any>>} The fetched data and error (if any).
 */
export async function fetchRecords({
  type,
  user_id,
  startDate,
  endDate,
  searchTerm,
  sortField = "updated_at",
  ascending = false,
}: FetchRecordsOptions): Promise<QueryResult<any>> {
  const filters: Record<string, any> = { type, user_id };
  const rangeFilters: Record<string, { gte?: any; lte?: any }> = {};
  const searchFilters: Record<string, { ilike?: string; eq?: any }> = {};

  if (startDate) {
    rangeFilters.created_at = { ...rangeFilters.created_at, gte: startDate };
  }

  if (endDate) {
    rangeFilters.created_at = { ...rangeFilters.created_at, lte: endDate };
  }

  if (searchTerm && searchTerm.trim() !== "") {
    const numericSearchTerm = Number(searchTerm);

    if (!isNaN(numericSearchTerm)) {
      searchFilters.amount = { eq: numericSearchTerm };
    } else {
      searchFilters.name = { ilike: searchTerm.trim() };
    }
  }

  return executeSupabaseQuery({
    table: "records",
    filters,
    rangeFilters,
    searchFilters,
    sortField,
    ascending,
  });
}
