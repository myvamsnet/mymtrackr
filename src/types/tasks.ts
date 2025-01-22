export interface TaskResponseData {
  success: string;
  message: string;
  data: TasksData[];
}
export interface SingleTaskResponseData {
  success: string;
  message: string;
  data: TasksData;
}

export interface TasksData {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
  status: boolean;
  taskDate: string;
  updated_at: string;
}
