import { User } from "../auth";

export interface UserAdminApiresponse {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  users: User[];
  totalPages: number;
  page: number;
}
