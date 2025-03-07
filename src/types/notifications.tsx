export interface Notification {
  id: string;
  title: string;
  body: string;
}

export interface NotificationApiResponse {
  success: boolean;
  message: string;
  data: NotificationData[];
}

export interface NotificationData {
  created_at: string;
  title: string;
  body: string;
  id: string;
  updated_at: string;
}
