'use server';
import { cloudinary_url } from '@/constant/path';
import { createClient } from '@/lib/supabse/server';
import axios from 'axios';
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
    let imageUrl = '';

    // Only upload the image if one is provided
    if (image) {
      const { data: response } = await axios.post(cloudinary_url, formData);
      if (response?.secure_url) {
        imageUrl = response.secure_url;
      } else {
        return { success: false, error: 'Image upload failed' };
      }
    }

    // Update profile in Supabase
    const updateData: {
      email: string;
      fullName: string;
      phoneNumber: string;
      imageUrl?: string;
    } = { email, fullName, phoneNumber };
    if (imageUrl) updateData.imageUrl = imageUrl;

    const { data, error } = await supabaseApi
      .from('usersprofile')
      .update(updateData)
      .eq('email', email)
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Something went wrong',
    };
  } finally {
    redirect('/home');
  }
};
