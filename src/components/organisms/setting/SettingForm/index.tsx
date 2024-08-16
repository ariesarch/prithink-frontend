'use client'
import { FC, useEffect } from 'react';
import Button from '@/components/atoms/common/Button';
import InputField from '@/components/molecules/common/InputField';
import { usePathname, useRouter } from 'next/navigation';
import CheckboxField from '@/components/molecules/common/CheckboxField';
import { useSettingForm } from '@/hooks/forms/use-setting.form';
import { useCreateSettingMutation, useUpdateSettingMutation } from '@/hooks/mutations/use-user-setting.mutation';
import SelectField from '@/components/molecules/common/SelectField';
import useGroupStore from '@/store/useGroupStore';
import useAuthStore from '@/store/useAuthStore';
import useSettingStore from '@/store/useSettingStore';
import { handleError, handleMessage } from '@/utils/messageHandler';
import { useTranslation } from 'react-i18next';
import { SettingFormValues } from '@/interfaces/setting.interface';

const SettingForm: FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, setError, reset } = useSettingForm();
    const { mutate: createSetting } = useCreateSettingMutation();
    const { mutate: updateSetting } = useUpdateSettingMutation();
    const {groups} = useGroupStore();
    const { AuthUser } = useAuthStore();
    const {setting} = useSettingStore();
    const groupOptions: { label: string; value: string }[] = groups.map((group) => ({
        label: group.group_name,
        value: group.group_id
    }));
    useEffect(() => {
        if (pathname.includes('/edit') && setting) {
            reset({
                group_id: setting?.group_id,
                URL: setting?.URL,
                owned_by_user: setting?.owned_by_user
            });
        }
    }, [setting, reset, AuthUser?.user_id, pathname])
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        data.user_id = AuthUser?.user_id
        data.company_id = AuthUser?.company_id
        if (pathname.includes('/edit') && setting) {
            updateSetting({ id: setting.setting_id, data }, {
                onSuccess: () => { 
                    handleMessage("success", t('MESSAGE.record-updated'))
                    router.push('/settings');
                },
                onError: (error:any)=>{
                    handleError<SettingFormValues>(t(error))
                }
            });
        } else {
            createSetting(data, {
                onSuccess: () => { 
                    handleMessage("success", t('MESSAGE.record-created'))
                    router.push('/settings') 
                },
                onError: (error: any) => {
                    handleError<SettingFormValues>(t(error))
                }
            })
        }
    };

    const handleBackClick = () => {
        router.back(); 
    };

    return (
        <div className="w-1/2 p-4 bg-white flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4 '>
                <SelectField
                    label="field-group"
                    options={groupOptions}
                    {...register("group_id")}
                    error={errors.group_id?.message}
                />
                <InputField
                    label="URL"
                    {...register("URL")}
                    error={errors.URL?.message}
                />
                <CheckboxField
                    type="checkbox"
                    label="Own by User"
                    {...register("owned_by_user")}
                    error={errors.owned_by_user?.message}
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

export default SettingForm;