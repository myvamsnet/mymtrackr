import { cloudinary_preset, cloudinary_url } from '@/constant/path';
import axios from 'axios';

export const uploadImageToCloudinary = async (image: File) => {
  const formData = new FormData();
  formData.append('file', image as File);
  formData.append('upload_preset', cloudinary_preset);

  try {
    const { data: response } = await axios.post(cloudinary_url, formData);
    return response?.secure_url as string;
  } catch (error) {
    return null;
  }
};
