'use server';

import { createClient } from '@/lib/supabse/server';
import { redirect } from 'next/navigation';

export const logoutAction = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
    return {
      success: false,
      message: 'Somethings went wrong, please try again later',
    };
  }
  redirect('/');
};
