import { SettingsResponse } from "@/interfaces/setting.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from "axios";

// export const fetchSettings = async (page: number = 1, per_page: number = 10, previous_keys:string = '{}'): Promise<SettingsResponse> => {
//   // try {
//     const response: AxiosResponse<{data: SettingsResponse}> = await userSettingService.fetchByPage(page, per_page, previous_keys);
//     return response.data.data;
//   // } catch (error) {
//   //   console.error("Error fetching settings:", error);
//   //   return CoreApi.defaultResponse;
//   // }
// };
// export const useSettingsQuery = (page: number, previous_keys?:string) => {
//   return useQuery<SettingsResponse, Error>({
//     queryKey: [API_ENDPOINTS.SETTINGS, previous_keys],
//     queryFn: async () => {
//       return await fetchSettings(page, 10, previous_keys);
//     },
//     staleTime: 5 * 60 * 1000,
//     gcTime: 10 * 60 * 1000,
//   });
// };

const userSettingService = new CoreApi(API_ENDPOINTS.SETTINGS);
export const fetchSettings = async (page: number = 1, 
  per_page: number = 10,
  previous_keys: string = '{}'): Promise<SettingsResponse> => {
  // try {
    const response: AxiosResponse<{data: SettingsResponse}> = await userSettingService.fetchByPage(page, per_page,previous_keys);
    return response.data.data;
  // } catch (error) {
  //   console.error("Error fetching settings:", error);
  //   return CoreApi.defaultResponse;
  // }
};

export const useSettingsQuery = (page: number, previous_keys?:string) => {
  return useQuery<SettingsResponse, Error>({
    queryKey: [API_ENDPOINTS.SETTINGS, page,previous_keys],
    queryFn: () => fetchSettings(page, 10 ,previous_keys),
    placeholderData:keepPreviousData, // Keep old data while fetching new data
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Data remains in cache for 10 minutes,
    // refetchOnWindowFocus: false, 
  });
};



