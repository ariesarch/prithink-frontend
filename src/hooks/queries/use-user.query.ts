import { User, UsersResponse } from '@/interfaces/user.interface';
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { useQuery,keepPreviousData } from '@tanstack/react-query';
import { CoreApi } from '@/utils/api/core.api';
import { AxiosResponse } from 'axios';

const userService = new CoreApi(API_ENDPOINTS.USERS);

export const fetchUsers = async (page: number = 1, per_page: number = 10, previous_keys:string = '{}'): Promise<UsersResponse> => {
  // try {
    const response: AxiosResponse<{data: UsersResponse}> = await userService.fetchByPage(page, per_page,previous_keys);
    return response.data.data;
  // } catch (error) {
  //   console.error("Error fetching groups:", error);
  //   return CoreApi.defaultResponse;
  // }
};


export const useUserQuery = (page: number, previous_keys?:string) => {
  return useQuery<UsersResponse, Error>({
    queryKey: ['users', page, previous_keys],
    queryFn: async () => {
      return await fetchUsers(page, 10, previous_keys);
    },
    placeholderData:keepPreviousData, // Keep old data while fetching new data
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Data remains in cache for 10 minutes
  });
};