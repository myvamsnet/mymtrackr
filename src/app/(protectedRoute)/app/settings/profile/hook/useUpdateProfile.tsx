'use client';
import { updateProfileAction } from '@/app/actions/updateUserProfileAction';
import { cloudinary_preset } from '@/constant/path';
import { useUploadImage } from '@/hooks/useUploadImage';
import { profileSchema, ProfileSchemaType } from '@/lib/Schema/profileSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useUpdateProfile = () => {
  const { handleFileChange, image, previewUrl, setImage } = useUploadImage();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<ProfileSchemaType>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
    resolver: zodResolver(profileSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: PayloadData) => {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);

      if (data.phoneNumber) formData.append('phoneNumber', data.phoneNumber);
      if (image && cloudinary_preset) {
        formData.append('file', image as File);
        formData.append('upload_preset', cloudinary_preset);
      }
      return await updateProfileAction(formData);
    },
    onSuccess: () => {
      toast.success('Profile updated successfully');
      setImage(null);
    },
    onError: (error) => {
      if (error?.message) toast.error(error.message);
    },
  });

  const onSubmit = (data: ProfileSchemaType) => {
    const payload: PayloadData = {
      email: data.email,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber || '',
    };
    mutate(payload);
  };

  return {
    control,
    handleSubmit,
    handleFileChange,
    image,
    previewUrl,
    onSubmit,
    isPending,
    setValue,
    isValid,
  };
};

export interface PayloadData {
  email: string;
  fullName: string;
  phoneNumber?: string;
}

export interface IProfile {
  id: number;
  fullName: string;
  imageUrl: string;
  user_id: string;
  email: string;
  created_at: string;
  phoneNumber: string;
}
