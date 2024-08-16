import { GroupFormValues } from "@/interfaces/group.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

const groupService = new CoreApi(API_ENDPOINTS.GROUPS);
export const useCreateGroupMutation = ():UseMutationResult<void, Error, GroupFormValues>  => {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn:(input: GroupFormValues) => groupService.create(input),
            onSettled: (data, error, variables, context) => {
                console.log("Mutation settled");
                if (error) {
                    console.error("Error during mutation:", error);
                } else {
                    console.log("Mutation succeeded with data:", data);
                }
                queryClient.invalidateQueries({queryKey:['groups']});
            },
        }
    )
};
export const useUpdateGroupMutation = (): UseMutationResult<void, Error, { id: string; data: GroupFormValues }> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: GroupFormValues }) => groupService.update(id, data),
        onSettled: (data, error, variables, context) => {
            console.log("Mutation settled");
            if (error) {
                console.error("Error during mutation:", error);
            } else {
                console.log("Mutation succeeded with data:", data);
            }
            console.log("Invalidating queries...");
            queryClient.invalidateQueries({ queryKey: ['groups'] });
        },
    });
};