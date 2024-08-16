export interface Site {
  site_id: string;
  site_name: string;  
}
export interface SitesResponse extends PaginationMeta {
  data: Site[];
}
export interface SiteFormValues {
  site_name: string;
}
