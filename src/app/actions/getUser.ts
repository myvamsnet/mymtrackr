'use server';
import { createClient } from '@/lib/supabse/server';
import { revalidatePath } from 'next/cache';

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data: userProfileData, error: userProfileError } = await supabase
      .from('userProfile')
      .select('*')
      .eq('id', user.id)
      .single();

    if (userProfileError) {
      console.log(userProfileError.message, 'User Profile Fetch Failed');
      return {
        success: false,
        message: 'User Profile Fetch Failed',
      };
    }

    const data: UserProfile = {
      id: userProfileData.id,
      email: userProfileData.email,
      fullName: userProfileData.fullName,
      imageUrl: userProfileData.imageUrl,
      phoneNumber: userProfileData.phoneNumber,
      referralCode: userProfileData.referralCode,
    };
    revalidatePath('/app/home');
    return {
      success: true,
      data,
    } as Payload;
  }
}
export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  imageUrl: string;
  phoneNumber: string;
  referralCode: string;
}

export interface Payload {
  success: boolean;
  message?: string;
  data?: UserProfile;
}
