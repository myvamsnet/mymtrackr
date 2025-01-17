export interface ReferalResponseData {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  users: RefereeUser[];
  totalPages: number;
  page: number;
}

export interface RefereeUser {
  referee: Referee;
}

export interface Referee {
  id: string;
  email: string;
  fullName: string;
  created_at: string;
  last_active: any;
  phoneNumber?: string;
  subscriptions: Subscriptions;
  imageUrl: string;
}

export interface Subscriptions {
  status: string;
}
