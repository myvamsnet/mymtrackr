'use server';
import prisma from '@/lib/db';
import { verifySession } from '@/lib/session';
import { revalidatePath } from 'next/cache';

export async function getAllRecords(
  page: number = 1,
  limit: number = 10,
  type?: string
) {
  const session = await verifySession();
  if (!session?.isAuth) return null;

  const filters = { userId: session?.userId, ...(type && { type }) };

  try {
    const [records, totalRecords] = await Promise.all([
      prisma?.record?.findMany({
        where: filters,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma?.record.count({ where: filters }),
    ]);
    const data = {
      records,
      currentPage: page,
      totalPages: Math.ceil(totalRecords / limit),
      totalRecords,
    };
    revalidatePath('/home');
    return {
      success: true,
      data,
      message: 'Records fetched successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error fetching records',
    };
  }
}
