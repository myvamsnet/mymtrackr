'use server';

import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/session';
import prisma from '@/lib/db';

export async function RegisterAction({
  email,
  password,
  fullName,
  referralCode,
}: {
  email: string;
  password: string;
  fullName: string;
  referralCode?: string | null;
}) {
  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return {
      success: false,
      message: 'User already exists',
    };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      fullName,
      referralCode, // Store the referral code in the User table
    },
  });

  // Handle referral logic AFTER user is created
  if (referralCode) {
    const referrer = await prisma.user.findUnique({
      where: { referralCode },
    });

    if (referrer) {
      // If the referral code exists, create a referral entry
      await prisma.referral.create({
        data: {
          referrerId: referrer.id,
          refereeId: user.id, // Set the newly created user as the referee
        },
      });
    }
  }

  // Create a trial subscription for the new user
  const trialExpiration = new Date();
  trialExpiration.setDate(trialExpiration.getDate() + 14);

  const subscriptionCreation = await prisma.subscription.create({
    data: {
      userId: user.id,
      status: 'trial',
      expiresAt: trialExpiration,
      amount: '0', // Set the amount for the subscription, can be adjusted based on your pricing model
    },
  });

  if (!subscriptionCreation) {
    return { message: 'Failed to create subscription.', success: false };
  }

  await createSession(user.id);
}
