'use server';
import prisma from '@/lib/db';
import { verifySession } from '@/lib/session';
import { revalidatePath } from 'next/cache';

export async function createRecordAction(data: {
  name: string;
  amount: string;
  type: string;
  imageUrl?: string;
  note?: string;
}) {
  // Verify session and check if the user is authenticated
  const session = await verifySession();
  if (!session?.isAuth) {
    return {
      success: false,
      message: 'User is not authenticated',
    };
  }

  // Create the record directly
  const record = await prisma.record.create({
    data: {
      userId: session.userId as string,
      amount: data.amount,
      imageUrl: data.imageUrl || '',
      name: data.name,
      type: data.type,
      note: data.note,
    },
  });

  if (!record) {
    return {
      success: false,
      message: 'Error creating record',
    };
  }

  // Revalidate the path
  revalidatePath('/home');
  return {
    success: true,
    message: 'Record created successfully',
  };
}
