import prisma from '@/lib/db';
import { buildSearchFilter } from '@/lib/helper/buildSearchFilter';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  // Get query parameters
  const type = searchParams.get('type') as Type;
  const startDate = searchParams.get('startDate') as string;
  const endDate = searchParams.get('endDate') as string;
  const searchTerm = searchParams.get('searchTerm') as string;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie as string);
  if (!session?.isAuth && !session?.userId) {
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  }

  try {
    // Build dynamic search filter
    const searchFilter = {
      userId: session?.userId,
      ...buildSearchFilter(searchTerm, type, startDate, endDate),
    };
    console.log(searchFilter);
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

    return NextResponse.json(
      {
        success: true,
        data,
        message: 'Records fetched successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching records:', error);
    if (error) {
      console.error('Unexpected error:', error);
      return NextResponse.json(
        { error: 'Failed to get records' },
        { status: 500 }
      );
    }
  }
}

type Type = 'income' | 'expense' | 'payable' | 'debtor';
