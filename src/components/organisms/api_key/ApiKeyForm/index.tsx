'use client'
import { FC, useEffect, useState } from 'react';
import Button from '@/components/atoms/common/Button';
import InputField from '@/components/molecules/common/InputField';
import { usePathname, useRouter } from 'next/navigation';
import SelectField from '@/components/molecules/common/SelectField';
import { useGroupForm } from '@/hooks/forms/use-group-form';
import { useCreateApiKeyMutation, useUpdateApiKeyMutation } from '@/hooks/mutations/use-api_key.mutation';
import { GroupFormValues } from '@/interfaces/group.interface';
import { handleError, handleMessage } from '@/utils/messageHandler';
import useAuthStore from '@/store/useAuthStore';
import useGroupStore from '@/store/useGroupStore';
import { useTranslation } from 'react-i18next';
import useSiteStore from '@/store/useSiteStore';
import { ApiKeyFormValues } from '@/interfaces/api_key.interface';
import { useApiKeyForm } from '@/hooks/forms/use-api_key-form';
import useApikeyStore from '@/store/useApiKeyStore';

const ApiKeyForm: FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, setError, reset } = useApiKeyForm();
    const { mutate: createApiKey } = useCreateApiKeyMutation();
    const { mutate: updateApiKey } = useUpdateApiKeyMutation();
    const { AuthUser } = useAuthStore();
    const [globalError, setGlobalError] = useState<string | null>(null);
    const { sites } = useSiteStore();
    const { apiKey } = useApikeyStore();
    const siteOptions: { label: string; value: string }[] = sites.map((site) => ({
        label: site.site_name,
        value: site.site_id
    }));
    console.log("SItes: ", siteOptions)
    useEffect(() => {
        if (pathname.includes('/edit')) {
            reset({
                company_id: apiKey?.company_id,
                site_id: apiKey?.site_id,
                api_key: apiKey?.api_key
            });
        }else if(AuthUser) {
            reset({
                company_id: AuthUser.company_id
            })
        }
    }, [apiKey, reset, AuthUser?.user_id, pathname])
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        data.company_id = AuthUser?.company_id
        if (pathname.includes('/edit') && apiKey) {
            updateApiKey({ id: apiKey?.api_key_id, data }, {
                onSuccess: () => {
                    handleMessage("success", t('MESSAGE.record-updated'))
                    router.push('/integrated-api-keys');
                },
                onError: (error: any) => {
                    handleError<ApiKeyFormValues>(t(error))
                }
            });
        } else {
            createApiKey(data, {
                onSuccess: () => {
                    handleMessage("success", t('MESSAGE.record-created'))
                    router.push('/integrated-api-keys')
                },
                onError: (error: any) => {
                    handleError<ApiKeyFormValues>(t(error))
                }
            })
        }
    };
    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className="w-1/2 p-4 bg-white justify-center">
            {globalError && <div className="text-red-500 mb-4">{globalError}</div>}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4 '>
                <SelectField
                    label="field-site"
                    options={siteOptions}
                    {...register("site_id")}
                    error={errors.site_id?.message}
                />
                <InputField
                    id="company_id"
                    label="field-company-id"
                    type="hidden"
                    {...register("company_id")}
                    error={errors.company_id?.message}
                />
                <InputField
                    id="api_key"
                    label="field-api-key"
                    type="text"
                    {...register("api_key")}
                    error={errors.api_key?.message}
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

export default ApiKeyForm;
