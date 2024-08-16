import { SitesResponse } from "@/interfaces/site.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const siteTimeService = new CoreApi(API_ENDPOINTS.SITES);

export const fetchSites = async (): Promise<SitesResponse> => {
    const { data } = await siteTimeService.findAll();
    return data;
};

export const useSitesQuery = () => {
  return useQuery<SitesResponse, Error>({
    queryKey: [API_ENDPOINTS.SITES],
    queryFn: async () => {
      return await fetchSites();
    },
    placeholderData:keepPreviousData, // Keep old data while fetching new data
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Data remains in cache for 10 minutes
  });
};

