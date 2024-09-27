'use server';
import prisma from '@/lib/db';
import { verifySession } from '@/lib/session';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
export async function getUser() {
  const session = await verifySession();

  if (!session) return null;
  // Step 1: Fetch the user by id
  const user = await prisma.user.findUnique({
    where: { id: session?.userId as string },
    include: {
      subscription: true, // Include subscription details
      referredUsers: true, // Include referred users details
      referrals: true, // Include referrals where this user was the referee
    },
  });

  if (!user) {
    return {
      success: false,
      message: 'User not found',
    };
  }
  const data = {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    imageUrl: user.imageUrl,
    phoneNumber: user.phoneNumber,
    referralCode: user.referralCode,
    subscription: user.subscription,
    referredUsers: user.referredUsers,
    referrals: user.referrals,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return {
    success: true,
    data,
  };
}
