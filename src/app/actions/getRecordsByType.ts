'use server';
import prisma from '@/lib/db';
import { buildSearchFilter } from '@/lib/helper/buildSearchFilter';
import { verifySession } from '@/lib/session';
import { Type } from '@/types/records';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
interface Data {
  type: Type;
  startDate: string;
  endDate: string;
  searchTerm: string;
  page: number;
  limit: number;
}
export const getRecordsByType = async (data: Data) => {
  const headersList = headers();
  const referer = headersList.get('referer');
  const { type, startDate, endDate, searchTerm, page, limit } = data;
  console.log(referer, 'jello');

  const session = await verifySession();
  if (!session?.isAuth && !session?.userId) return;
  try {
    // Build dynamic search filter
    const searchFilter = {
      userId: session?.userId,
      ...buildSearchFilter(searchTerm, type, startDate, endDate),
    };

    // Fetch both records and total count in parallel
    const [records, totalRecords] = await Promise.all([
      prisma.record.findMany({
        where: searchFilter,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.record.count({
        where: searchFilter,
      }),
    ]);
    const data = {
      records,
      currentPage: page,
      totalPages: Math.ceil(totalRecords / limit),
      totalRecords,
    };
    if (referer) {
      revalidatePath(referer);
    }
    return {
      success: true,
      data,
      message: 'Records fetched successfully',
    };
  } catch (error) {
    console.error('Error fetching records:', error);
    if (error) {
      return {
        success: false,
        message: 'Something went wrong, Try Again',
      };
    }
  }
};
