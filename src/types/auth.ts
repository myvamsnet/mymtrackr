export interface InputLists {
  name: string;
  type: "text" | "email" | "password" | "ordinary";
  label: string;
  placeholder: string;
}

export interface UserResponse {
  success: boolean;
  data: User;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  imageUrl: string | null;
  phoneNumber: string | null;
  referralCode: string | null;
  subscriptions: Subscription;
  businessProfile: BusinessProfileType;
  referredUsers: any[]; // Assuming an array, define a specific type if needed
  referrals: any[]; // Assuming an array, define a specific type if needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  role: "user" | "admin";
  last_active: string;
  created_at: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
}

interface Subscription {
  id: string;
  userId: string;
  status: "trial" | "active" | "expired"; // Assuming these are the possible statuses
  expired_at: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  amount: string;
}
export interface userprofile {
  id: number;
  fullName: string;
  imageUrl: any;
  user_id: string;
  email: string;
  created_at: string;
  phoneNumber: any;
  update_at: string;
}

export interface BusinessProfileType {
  id: string;
  userId: string;
  bankName: string;
  imageUrl: string;
  brandColor: string;
  createdAt: string;
  accountName: string;
  businessName: string;
  phoneNumber1: string;
  phoneNumber2: string;
  accountNumber: string;
  businessEmail: string;
  termsOfService: string;
}
