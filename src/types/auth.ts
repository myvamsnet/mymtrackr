export interface InputLists {
  name: string;
  type: "text" | "email" | "password";
  label: string;
  placeholder: string;
}

export interface UserProfile {
  id: number;
  fullName: string;
  imageUrl: any;
  user_id: string;
  email: string;
  created_at: string;
  phoneNumber: any;
  updateat: string;
  referral_code: string;
  referral_count: number;
  subscription_expiry: string;
  subscription_status: SubscriptionStatusType;
}
export type SubscriptionStatusType =
  | "active"
  | "inactive"
  | "expired"
  | "trialing";
