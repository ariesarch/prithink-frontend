import Input from "@/components/atoms/common/Input";
import { FC, forwardRef } from "react";
import { useTranslation } from "react-i18next";

interface InputFieldProps {
    label: string;
    type?: string;
    id?: string;
    error?: string | null;
    value?: string; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const InputField: FC<InputFieldProps> = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, type, id, error, ...props }: InputFieldProps, ref) => {
        const { t } = useTranslation();
        return (
            <div className="mb-4">
                {type!=='hidden' &&(
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                        {t(label)}
                    </label>
                )}
                <Input
                    type={type}
                    ref={ref}
                    className="mt-1 block w-full"
                    {...props}
                />
                {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
            </div>
        );
    }
);

InputField.displayName = "InputField";
export default InputField;
