import { SettingFormValues } from "@/interfaces/setting.interface";
import { CoreApi } from "@/utils/api/core.api";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

const groupService = new CoreApi(API_ENDPOINTS.SETTINGS);
export const useCreateSettingMutation = ():UseMutationResult<void, Error, SettingFormValues>  => {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn:(input: SettingFormValues) => groupService.create(input),
            onSettled: () => {
                queryClient.invalidateQueries({queryKey:['settings']});
            },
        }
    )
};
export const useUpdateSettingMutation = (): UseMutationResult<void, Error, { id: string; data: SettingFormValues }> => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: SettingFormValues }) => groupService.update(id, data),
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['settings'] });
        },
    });
};