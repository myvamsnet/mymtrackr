'use server';
import { createClient } from '@/lib/supabse/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteRecord = async (recordId: string) => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  if (!recordId)
    return {
      success: false,
      error: 'No Record Id Found',
    };

  if (!user?.data?.user?.id) {
    return {
      success: false,
      error: 'User not found',
    };
  }
  const { error } = await supabaseApi
    .from('records')
    .delete()
    .eq('user_id', user?.data?.user?.id)
    .eq('id', recordId);

  if (error) {
    return {
      success: false,
      error: 'Something went wrong, Try Again',
    };
  }
  revalidatePath(`/app/home`);
  redirect('/app/home');
};
