import { UserFormValues } from "@/interfaces/user.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

const userService = new CoreApi(API_ENDPOINTS.USERS);
export const useCreateUserMutation = ():UseMutationResult<void, Error, UserFormValues>  => {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn:(input: UserFormValues) => userService.create(input),
            onSettled: () => {
                queryClient.invalidateQueries({queryKey:['users']});
            },
        }
    )
};

export const useUpdateUserMutation = (): UseMutationResult<void, Error, { id: string; data: UserFormValues }> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: UserFormValues }) => userService.update(id, data),
        onSettled: (data, error, variables, context) => {
            console.log("Mutation settled");
            if (error) {
                console.error("Error during mutation:", error);
            } else {
                console.log("Mutation succeeded with data:", data);
            }
            console.log("Invalidating queries...");
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};