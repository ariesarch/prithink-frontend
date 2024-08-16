import { Company } from "./company.interface";
import { Role } from "./role.interface";

export interface User {
  user_id: string;
  role_id: string;
  password: string;
  company_id: string;
  user_name: string;  
  company: Company;
  role: Role;
  profile?: string;
}
export interface UsersResponse extends PaginationMeta {
  items: User[];
}
export interface UserFormValues {
  user_name: string;
  password: string;
  role_id: string;
  company_id?: string;
}
