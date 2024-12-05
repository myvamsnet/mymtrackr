import { updateRecordAction } from '@/app/actions/updateRecordAction';
import useModal from '@/hooks/useModal';
import { useRedirect } from '@/hooks/useRedirect';
import { useUploadImage } from '@/hooks/useUploadImage';
import {
  addRecordsSchema,
  AddRecordsSchemaType,
} from '@/lib/Schema/incomeSchema';
import { uploadImageToCloudinary } from '@/lib/uploadImageToCloudinary';
import { Type } from '@/types/records';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useEditRecord = () => {
  const { onCancel } = useModal();
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const redirect = useRedirect();
  const { image, handleFileChange, errorMessage, previewUrl, setPreviewUrl } =
    useUploadImage();
  const { control, handleSubmit, setValue } = useForm<AddRecordsSchemaType>({
    defaultValues: {
      amount: '',
      name: '',
      note: '',
    },
    resolver: zodResolver(addRecordsSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Payload) => {
      const formData = new FormData();
      formData.append('amount', data.amount);
      formData.append('name', data.name);
      formData.append('type', data?.type as Type);
      formData.append('recordId', data?.recordId as string);
      if (data.note) formData.append('note', data.note);
      if (image) {
        formData.append('image', image);
      }
      return await updateRecordAction(formData);
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['records'] });
        toast.success('Record Added Successfully');
        onCancel();
      }
      data?.error && toast.error(data?.error as string);
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
    setValue,
    setPreviewUrl,
  };
};
export interface Payload {
  amount: string;
  name: string;
  note: string;
  image: string;
  type: Type;
  recordId: string;
}
