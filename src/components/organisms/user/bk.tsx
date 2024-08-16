'use client'
import { FC, useState } from 'react';
import Button from '@/components/atoms/common/Button';
import InputField from '@/components/molecules/common/InputField';
import { useRouter } from 'next/navigation';
import PasswordField from '@/components/molecules/common/PasswordField';
import SelectField from '@/components/molecules/common/SelectField';
import { useUserForm } from '@/hooks/forms/use-user.form';
import { UserFormValues } from '@/interfaces/user.interface';

const UserForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useUserForm();

    const [user_name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const onSubmit = (data: UserFormValues) => {
        console.log("Form submitted:", data);
        // Handle form submission logic
        router.push('/users');  // Redirect to a different page after submission
    };


    const options = [
        { value: "09A6F8541C45", label: "admin" },
        { value: "09A6F8541C45ED", label: "Operator" },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(event.target.value);
    };

    const handleBackClick = () => {
        router.back(); // Navigate back to the previous page
    };

    return (
        // <div className="flex flex-col items-center">
        <div className="w-1/2 p-4 bg-white flex justify-center">
            <div>Hello {user_name}</div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md space-y-4 '>
                <InputField
                    label="User Name"
                    type="text"
                    {...register("user_name")}
                    error={errors.user_name?.message}
                />
                <PasswordField
                    label="Password"
                    type="password"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <SelectField
                    label="Role"
                    options={options}
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
