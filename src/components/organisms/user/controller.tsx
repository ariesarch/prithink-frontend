'use client';

import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '@/components/molecules/common/InputField';
import PasswordField from '@/components/molecules/common/PasswordField';
import SelectField from '@/components/molecules/common/SelectField';
import CheckboxField from '@/components/molecules/common/CheckboxField';
import Button from '@/components/atoms/common/Button';
import { useRouter } from 'next/navigation';
import { userValidationSchema } from '@/utils/validations/userValidation';
import { UserFormValues } from '@/interfaces/user.interface';

const UserForm: FC = () => {
    const router = useRouter();
    const { control, handleSubmit, formState: { errors } } = useForm<UserFormValues>({
        resolver: yupResolver(userValidationSchema),

    });

    const onSubmit = async (data: UserFormValues) => {
        try {
            // Replace with actual form submission logic
            console.log("Form submitted:", data);
            router.push('/users');
        } catch (err) {
            console.error('An error occurred while submitting the form', err);
        }
    };

    const options = [
        { value: "09A6F8541C45", label: "admin" },
        { value: "09A6F8541C45ED", label: "Operator" },
    ];

    return (
        <div className="w-1/2 p-4 bg-white flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4'>
                <Controller
                    name="user_name"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            label="User Name"
                            type="text"
                            {...field}
                            error={errors.user_name?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <PasswordField
                            label="Password"
                            type="password"
                            {...field}
                            error={errors.password?.message}
                        />
                    )}
                />
                <Controller
                    name="role_id"
                    control={control}
                    render={({ field }) => (
                        <SelectField
                            label="Role"
                            options={options}
                            {...field}
                            error={errors.role_id?.message}
                        />
                    )}
                />
                <div className="flex justify-between">
                    <Button variant="outline" onClick={() => router.back()}>
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
