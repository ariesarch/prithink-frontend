import { RolesResponse } from "@/interfaces/role.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const roleService = new CoreApi(API_ENDPOINTS.ROLES);

export const fetchRoles = async (): Promise<RolesResponse> => {
    const { data } = await roleService.findAll();
    return data;
};

export const useRolesQuery = () => {
  return useQuery<RolesResponse, Error>({
    queryKey: [API_ENDPOINTS.ROLES],
    queryFn: async () => {
      return await fetchRoles();
    },
    placeholderData:keepPreviousData, // Keep old data while fetching new data
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Data remains in cache for 10 minutes
  });
};

