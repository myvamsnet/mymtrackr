'use server';
import { cloudinary_url } from '@/constant/path';
import { createClient } from '@/lib/supabse/server';
import { uploadImageToCloudinary } from '@/lib/uploadImageToCloudinary';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const updateProfileAction = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const fullName = formData.get('fullName') as string;
  const phoneNumber = formData.get('phoneNumber') as string;
  const image = formData.get('file') as File;

  if (!email || !fullName || !phoneNumber) {
    return {
      success: false,
      error: 'Please provide email, full name, and phone number',
    };
  }

  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();

  if (!user?.data?.user?.id) {
    return {
      success: false,
      error: 'User not found',
    };
  }

  try {
    // Update profile in Supabase
    const updateData: {
      email: string;
      fullName: string;
      phoneNumber: string;
      imageUrl?: string;
    } = { email, fullName, phoneNumber };
    // Only upload the image if one is provided
    if (image) {
      const imageUrl = (await uploadImageToCloudinary(image)) as string;
      if (!imageUrl) {
        return { success: false, message: 'Failed to upload image' };
      }
      updateData.imageUrl = imageUrl;
    }

    const { data, error } = await supabaseApi
      .from('userProfile')
      .update(updateData)
      .eq('email', email)
      .eq('id', user.data.user.id)
      .select()
      .single();

    if (error) {
      console.log(error, 'Failed to update profile');
      return { success: false, error: 'Failed to update profile' };
    }

    revalidatePath('/app/home');
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Something went wrong',
    };
  }
};
