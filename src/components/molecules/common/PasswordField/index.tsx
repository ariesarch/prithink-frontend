'use client'
import { FC, forwardRef } from "react"
import PasswordInput from "@/components/atoms/common/PasswordInput";
import { useTranslation } from "react-i18next";
interface PasswordFieldProps {
    label: string;
    type?: string;
    id?: string;
    error?: string | null;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const PasswordField: FC<PasswordFieldProps> = forwardRef<HTMLInputElement, PasswordFieldProps>(
    ({ label, type, id, error, ...props }: PasswordFieldProps, ref) => {
        const { t } = useTranslation();
        return (
        <div className="mb-4">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">
                    {t(label)}
            </label>
            <PasswordInput
                ref={ref}
                {...props}
                className="mt-1 block w-full" />
            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        </div>
    )
}
);
PasswordField.displayName = "PasswordField";
export default PasswordField;