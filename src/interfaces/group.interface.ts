import { User } from "./user.interface";

export interface Group {
  user_id: string;
  group_id: string;   
  group_name: string;
  user: User,
  time_per_day: number;
}
export interface GroupsResponse extends PaginationMeta {
  items: Group[];
}
export interface allGroupsResponse {
  data: Group[];
}
export interface GroupFormValues {
  user_id: string;
  group_name: string;
  time_per_day: number;
}