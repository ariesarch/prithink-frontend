import { ApiKeyFormValues } from "@/interfaces/api_key.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

const groupService = new CoreApi(API_ENDPOINTS.API_KEYS);
export const useCreateApiKeyMutation = ():UseMutationResult<void, Error, ApiKeyFormValues>  => {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn:(input: ApiKeyFormValues) => groupService.create(input),
            onSettled: (data, error, variables, context) => {
                console.log("Mutation settled");
                if (error) {
                    console.error("Error during mutation:", error);
                } else {
                    console.log("Mutation succeeded with data:", data);
                }
                queryClient.invalidateQueries({queryKey:[API_ENDPOINTS.API_KEYS]});
            },
        }
    )
};
export const useUpdateApiKeyMutation = (): UseMutationResult<void, Error, { id: string; data: ApiKeyFormValues }> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: ApiKeyFormValues }) => groupService.update(id, data),
        onSettled: (data, error, variables, context) => {
            console.log("Mutation settled");
            if (error) {
                console.error("Error during mutation:", error);
            } else {
                console.log("Mutation succeeded with data:", data);
            }
            console.log("Invalidating queries...");
            queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.API_KEYS] });
        },
    });
};