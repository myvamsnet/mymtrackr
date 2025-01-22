export interface BusinessResponseData {
  success: boolean;
  data: BusinessData;
}

export interface BusinessData {
  id: string;
  created_at: string;
  user_id: string;
  imageUrl: string;
  businessName: string;
  businessEmail: string;
  phoneNumber1: string;
  phoneNumber2: string;
  brandColor: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  termsOfService: string;
}
