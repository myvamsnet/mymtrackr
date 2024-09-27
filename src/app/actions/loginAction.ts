'use server';
import bcrypt from 'bcryptjs';
import dayjs from 'dayjs'; // For manipulating and comparing dates
import prisma from '@/lib/db';
import { createSession } from '@/lib/session';

export async function loginAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const validateUserError = 'Invalid login credentials';
  // Step 1: Fetch the user by email
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      referrals: {
        include: {
          referee: {
            include: {
              subscription: true,
            },
          },
        },
      },
      subscription: true,
    },
  });

  if (!user) {
    return {
      success: false,
      message: validateUserError,
    };
  }

  // Step 2: Check if the password matches
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return {
      success: false,
      message: validateUserError,
    };
  }

  // Step 3: Check if the subscription exists and whether it has expired
  if (user.subscription) {
    const now = dayjs();

    // Check if the subscription has expired
    const subscriptionExpiryDate = dayjs(user.subscription.expiresAt);
    if (subscriptionExpiryDate.isBefore(now)) {
      // If the subscription has expired, update its status to "expired"
      await prisma.subscription.update({
        where: { userId: user.id },
        data: { status: 'expired' },
      });
    }
  }

  // Step 4: Check if the user has referred at least 3 users with active subscriptions
  const referees = user.referrals.map((ref) => ref.referee);

  const activeRefereesCount = referees.filter(
    (referee) => referee.subscription?.status === 'active'
  ).length;

  // Step 5: If the user has referred 3 or more users and all referees have active subscriptions, extend the user's subscription
  if (activeRefereesCount >= 3) {
    if (user.subscription && user.subscription.status === 'active') {
      const newExpiryDate = dayjs(user.subscription.expiresAt)
        .add(1, 'year')
        .toDate();

      await prisma.subscription.update({
        where: { userId: user.id },
        data: { expiresAt: newExpiryDate },
      });
    } else {
      // If the user has no active subscription, handle the case appropriately
      console.log('User does not have an active subscription');
    }
  }

  // Step 6: Redirect the user to the home page after successful login
  // 4. If login successful, create a session for the user and redirect

  await createSession(user.id);
}
