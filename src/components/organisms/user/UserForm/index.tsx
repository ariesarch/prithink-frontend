'use client'
import { FC, useEffect } from 'react';
import Button from '@/components/atoms/common/Button';
import InputField from '@/components/molecules/common/InputField';
import { usePathname, useRouter } from 'next/navigation';
import PasswordField from '@/components/molecules/common/PasswordField';
import SelectField from '@/components/molecules/common/SelectField';
import { useUserForm } from '@/hooks/forms/use-user.form';
import { UserFormValues } from '@/interfaces/user.interface';
import useRolesStore from '@/store/useRoleStore';
import { useCreateUserMutation, useUpdateUserMutation } from '@/hooks/mutations/use-user.mutation';
import { handleError, handleMessage }from '@/utils/messageHandler';
import useAuthStore from '@/store/useAuthStore';
import useUserStore from '@/store/useUserStore';
import { useTranslation } from 'react-i18next';

const UserForm: FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, setError, reset } = useUserForm();
    const { mutate: createUser } = useCreateUserMutation();
    const { mutate: updateUser } = useUpdateUserMutation();
    const {roles} = useRolesStore();
    const {user} = useUserStore();
    const {AuthUser} = useAuthStore();
    const roleOptions: { label: string; value: string }[] = roles.map((role) => ({
        label: role.role_name,
        value: role.role_id
    }));
    const handleBackClick = () => {
        router.back(); 
    };
    useEffect(() => {
        if (pathname.includes('/edit') && user) {
            reset({
                user_name: user?.user_name,
                role_id: user?.role_id,
                password: user?.password
            });
        }
    }, [reset, user?.user_id, pathname])
    const onSubmit = (data: UserFormValues) => {
        console.log("Form submitted:", data);
        data.company_id = AuthUser?.company_id as string
        if (pathname.includes('/edit') && user) {
            updateUser({ id: user.user_id, data }, {
                onSuccess: () => {
                    handleMessage("success", t('MESSAGE.record-updated'))
                    router.push('/users');
                },
                onError: (error: any) => {
                    handleError<UserFormValues>(t(error))
                }
            });
        } else {
            createUser(data, {
                onSuccess: () => {
                    handleMessage("success", t('MESSAGE.record-created'))
                    router.push('/users')
                },
                onError: (error: any) => {
                    handleError<UserFormValues>(t(error))
                }
            })
        }
    };

    return (
        <div className="w-1/2 p-4 bg-white flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4 '>
                <InputField
                    id="user_name"
                    label="field-user-name"
                    type="text"
                    {...register("user_name")}
                    error={errors.user_name?.message}
                />
                <PasswordField
                    label="field-password"
                    type="password"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <SelectField
                    label="field-role"
                    options={roleOptions}
                    {...register("role_id")}
                    error={errors.role_id?.message}
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

export default UserForm;


