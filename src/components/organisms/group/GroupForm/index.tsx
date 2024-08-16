'use client'
import { FC, useEffect, useState } from 'react';
import Button from '@/components/atoms/common/Button';
import InputField from '@/components/molecules/common/InputField';
import { usePathname, useRouter } from 'next/navigation';
import SelectField from '@/components/molecules/common/SelectField';
import { useGroupForm } from '@/hooks/forms/use-group-form';
import { useCreateGroupMutation, useUpdateGroupMutation } from '@/hooks/mutations/use-group.mutation';
import { GroupFormValues } from '@/interfaces/group.interface';
import { handleError, handleMessage }from '@/utils/messageHandler';
import useAuthStore from '@/store/useAuthStore';
import useGroupStore from '@/store/useGroupStore';
import { useTranslation } from 'react-i18next';

const GroupForm: FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, setError,reset } = useGroupForm();
    const { mutate: createGroup } = useCreateGroupMutation();
    const { mutate: updateGroup } = useUpdateGroupMutation();
    const { AuthUser } = useAuthStore();
    const [globalError, setGlobalError] = useState<string | null>(null);
    const { group } = useGroupStore();
    useEffect(() => {
        if (pathname.includes('/edit')) {
            reset({
                group_name: group?.group_name,
                time_per_day: group?.time_per_day,
                // user_id: group?.user_id
            });
        } else if (AuthUser) {
            reset({
                user_id: AuthUser.user_id
            })
        }
    }, [group, reset, AuthUser?.user_id, pathname])
    const onSubmit = (data:any) => {
        console.log("Form submitted:", data);
        if (pathname.includes('/edit') && group) {
            updateGroup({ id: group?.group_id, data }, {
                onSuccess: () => {
                    handleMessage("success", t('MESSAGE.record-updated'))
                    router.push('/groups');
                },
                onError: (error: any) => {
                    handleError<GroupFormValues>(t(error))
                }
            });
        }else{
            createGroup(data, {
                onSuccess: () => {
                    handleMessage("success", t('MESSAGE.record-created'))
                    router.push('/groups')
                },
                onError: (error: any) => {
                    handleError<GroupFormValues>(t(error))
                }
            })
        }
    };
    const options = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "4", label: "4" },
        { value: "6", label: "6" },
        { value: "12", label: "12" },
        { value: "24", label: "24" },
    ];
    const handleBackClick = () => {
        router.back();
    };    

    return (
        <div className="w-1/2 p-4 bg-white justify-center">
            {globalError && <div className="text-red-500 mb-4">{globalError}</div>}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4 '>
                <InputField
                    id="user_id"
                    label="field-user-id"
                    type="hidden"
                    {...register("user_id")}
                    error={errors.user_id?.message}
                />
                <InputField
                    id="group_name"
                    label="field-group-name"
                    type="text"
                    {...register("group_name")}
                    error={errors.group_name?.message}
                />
                <SelectField
                    label="field-time-per-day"
                    options={options}
                    {...register("time_per_day")}
                    error={errors.time_per_day?.message}
                />
                <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handleBackClick}>
                        &larr; Back
                    </Button>
                    <Button size="sm" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default GroupForm;
