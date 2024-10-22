'use server';
import { createClient } from '@/lib/supabse/server';
import { uploadImageToCloudinary } from '@/lib/uploadImageToCloudinary';
import { revalidatePath } from 'next/cache';

export const updateRecordAction = async (formData: FormData) => {
  const type = formData.get('type');
  const amount = formData.get('amount') as string;
  const name = formData.get('name') as string;
  const note = formData.get('note') as string;
  const image = formData.get('image') as File;
  const recordId = formData.get('recordId') as string;

  if (!recordId) {
    return { success: false, error: 'Record Not found' };
  }

  const supabaseApi = createClient();
  const { data: userData } = await supabaseApi.auth.getUser();

  const userId = userData?.user?.id;
  if (!userId) {
    return { success: false, error: 'User not found' };
  }

  const payload: IPayload = {
    name,
    amount,
    note,
    type,
    user_id: userId,
  };

  if (image) {
    const imageUrl = (await uploadImageToCloudinary(image)) as string;
    if (!imageUrl) {
      return { success: false, message: 'Failed to upload image' };
    }

    payload.imageUrl = imageUrl;
  }
  try {
    const { data, error } = await supabaseApi
      .from('records')
      .update({
        amount: payload.amount,
        name: payload.name,
        note: payload.note,
        image: payload.imageUrl,
        type: payload.type,
      })
      .eq('user_id', userId)
      .eq('id', recordId)
      .select()
      .single();

    if (error) {
      return { success: false, error: 'Failed to retrieve record' };
    }

    revalidatePath(`/details/${recordId}`);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Something went wrong',
    };
  }
};
interface IPayload {
  name: string;
  amount: string;
  note: string;
  type: FormDataEntryValue | null;
  user_id: string;
  imageUrl?: string;
}
