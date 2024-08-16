import { Company } from "./company.interface";
import { Group } from "./group.interface";
import { User } from "./user.interface";

export interface Setting {
  setting_id: string;
  user_id: string;
  company_id: string;
  group_id: string;
  owned_by_user:boolean;
  site_unique: string;
  URL: string;   
  user: User;
  group: Group;
  company:Company
}

export interface SettingsResponse extends PaginationMeta {
  items: Setting[];
}
export interface SettingFormValues {
  group_id: string;
  URL: string;
  owned_by_user: boolean;
}