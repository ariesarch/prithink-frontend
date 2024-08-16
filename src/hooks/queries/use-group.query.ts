import { allGroupsResponse, GroupsResponse } from "@/interfaces/group.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from "axios";

const groupService = new CoreApi(API_ENDPOINTS.GROUPS);

export const fetchAllGroups = async (): Promise<allGroupsResponse> => {
    const { data } = await new CoreApi('all_groups').findAll();
    return data;
};
export const fetchGroups = async (page: number = 1, 
  per_page: number = 10,
  previous_keys: string = '{}'): Promise<GroupsResponse> => {
  const response: AxiosResponse<{data: GroupsResponse}> = await groupService.fetchByPage(page, per_page,previous_keys);
  return response.data.data;
};

export const useGroupsQuery = (page: number, previous_keys?:string) => {
  return useQuery<GroupsResponse, Error>({
    queryKey: [API_ENDPOINTS.GROUPS, page,previous_keys],
    queryFn: () => fetchGroups(page, 10 ,previous_keys),
    placeholderData:keepPreviousData, // Keep old data while fetching new data
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Data remains in cache for 10 minutes
  });
};


