import { ApiKeysResponse } from "@/interfaces/api_key.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from "axios";

const useApiKeyService = new CoreApi(API_ENDPOINTS.API_KEYS);
export const fetchApiKeys = async (page: number = 1, 
  per_page: number = 10,
  previous_keys: string = '{}'): Promise<ApiKeysResponse> => {
    const response: AxiosResponse<{data: ApiKeysResponse}> = await useApiKeyService.fetchByPage(page, per_page,previous_keys);
    return response.data.data;
};

export const useApiKeysQuery = (page: number, previous_keys?:string) => {
  return useQuery<ApiKeysResponse, Error>({
    queryKey: [API_ENDPOINTS.API_KEYS, page,previous_keys],
    queryFn: () => fetchApiKeys(page, 10 ,previous_keys),
    placeholderData:keepPreviousData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000, 
  });
};



