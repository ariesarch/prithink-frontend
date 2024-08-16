import { Company } from "./company.interface";
import { Site } from "./site.interface";

export interface ApiKey {
  api_key_id: string;
  api_key: string;
  company_id: string;  
  company: Company;
  site_id: string;
  site: Site
}
export interface ApiKeysResponse extends PaginationMeta {
  items: ApiKey[];
}

export interface ApiKeyFormValues {
  api_key_id?: string;
  company_id: string;
  site_id: string;
  api_key: string;
}