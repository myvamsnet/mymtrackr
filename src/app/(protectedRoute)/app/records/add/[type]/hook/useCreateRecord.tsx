'use client';
import { createRecordAction } from '@/app/actions/createRecordAction';
import { useRedirect } from '@/hooks/useRedirect';
import { useUploadImage } from '@/hooks/useUploadImage';
import {
  addRecordsSchema,
  AddRecordsSchemaType,
} from '@/lib/Schema/incomeSchema';
import { uploadImageToCloudinary } from '@/lib/uploadImageToCloudinary';
import { Type } from '@/types/records';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useCreateRecord = () => {
  const { type } = useParams();
  const [uploading, setUploading] = useState(false);
  const redirect = useRedirect();
  const { image, handleFileChange, errorMessage, previewUrl } =
    useUploadImage();

  const { control, handleSubmit, reset } = useForm<AddRecordsSchemaType>({
    defaultValues: {
      amount: '',
      name: '',
      note: '',
    },
    resolver: zodResolver(addRecordsSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: AddRecordsSchemaType) => {
      if (!image) {
        const res = await createRecordAction({
          ...data,
          type: type as Type,
          note: data.note || undefined,
        });
        return res;
      }
      const imageUrl = await uploadImageToCloudinary(image);
      if (!imageUrl) throw new Error('Image upload failed');
      const paylaod = {
        ...data,
        imageUrl,
        type: type as Type,
        note: data.note || undefined,
      };
      const res = await createRecordAction(paylaod);
      return res;
    },
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message ?? 'Error adding record');
        return;
      }
      toast.success('Record Added Successfully');
      reset();
      redirect();
    },
    onError: (error) => {
      if (
        error?.message !== undefined &&
        error?.message !== null &&
        error?.message !== ''
      ) {
        toast.error('Something went wrong , Try Again');
      }
      return;
    },
  });

  return {
    control,
    handleSubmit,
    handleFileChange,
    errorMessage,
    previewUrl,
    uploading,
    setUploading,
    redirect,
    image,
    mutate,
    isPending,
  };
};
