import { User } from "../auth";

export interface UserAdminApiresponse {
  success: boolean;
  message: string;
  data: User[];
}

