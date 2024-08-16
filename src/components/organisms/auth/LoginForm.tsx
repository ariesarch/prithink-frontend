'use client'
import { FC, useState } from 'react';
import Button from '@/components/atoms/common/Button';
import InputField from '@/components/molecules/common/InputField';
import { useRouter } from 'next/navigation';
import PasswordField from '@/components/molecules/common/PasswordField';
import { useLoginForm } from '@/hooks/forms/use-login.form';
import { LoginFormValues } from '@/interfaces/auth.interface';
import { useLoginMutation } from '@/hooks/mutations/use-login.mutation';
import { handleError }from '@/utils/messageHandler';
import useAuthStore from '@/store/useAuthStore';

const LoginForm: FC = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useLoginForm();
    const { mutate: createUser } = useLoginMutation();
    const [globalError, setGlobalError] = useState<string | null>(null);
    const router = useRouter();
    const { setAuthUser,setToken } = useAuthStore((state) => state)
    const onSubmit = (data: LoginFormValues) => {
        console.log("Form submitted:", data);
        createUser(data, {
            onSuccess: (response) => { 
                setAuthUser(response.data.user)
                router.push('/') 
            },
            onError: (error: any) => {
                handleError<LoginFormValues>(error, setError, setGlobalError);
            },
        })
    };
    return (
        <div className="w-full p-4 bg-white justify-center">
            {globalError && <div className="text-red-500 mb-4">{globalError}</div>}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4'>
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
            <Button type="submit" className="w-full mt-4">Login</Button>
        </form>
        </div>
    );
};

export default LoginForm;
