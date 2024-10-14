export interface InputLists {
  name: string;
  type: 'text' | 'email' | 'password';
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
  subscription: Subscription;
  referredUsers: any[]; // Assuming an array, define a specific type if needed
  referrals: any[]; // Assuming an array, define a specific type if needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

interface Subscription {
  id: string;
  userId: string;
  status: 'trial' | 'active' | 'expired'; // Assuming these are the possible statuses
  expiresAt: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  amount: string;
}
export interface UserProfile {
  id: number;
  fullName: string;
  imageUrl: any;
  user_id: string;
  email: string;
  created_at: string;
  phoneNumber: any;
  update_at: string;
}
