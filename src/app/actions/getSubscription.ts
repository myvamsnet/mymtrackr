'use server';

import { createClient } from '@/lib/supabse/server';

export const getSubscription = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return;
  }

  const { data: subscriptionData, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user?.id)
    .single();

  if (error) {
    console.log(error);
    return {
      data: null,
      message: 'Failed to fetch subscriptions',
      success: false,
    };
  }

  const data = subscriptionData as SubscriptionType;
  return {
    data,
    message: 'Subscriptions fetched successfully',
    success: true,
  } as unknown as SubscriptionPayload;
};

export interface SubscriptionType {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'trial' | 'active';
  amount: number;
  userProfile_id: string;
  expiresAt: string;
  created_at: string;
  updated_at: string;
}
export interface SubscriptionPayload {
  success: boolean;
  message: string;
  data: SubscriptionType;
}
