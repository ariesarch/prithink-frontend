import Input from '@/components/atoms/common/Input';
import { FC, forwardRef } from 'react';

interface CheckboxFieldProps {
    label: string;
    type?: string;
    id?: string;
    error?: string | null;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: FC<CheckboxFieldProps> = forwardRef<HTMLInputElement, CheckboxFieldProps>(
    ({ label, type, id, error, ...props }: CheckboxFieldProps, ref) => {
        return (
            <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
                <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-700">
                    {label}
                </label>
                {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
            </div>
        );
    }
);
CheckboxField.displayName = "CheckboxField"
export default CheckboxField;