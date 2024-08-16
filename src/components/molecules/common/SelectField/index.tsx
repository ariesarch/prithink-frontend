import { FC, forwardRef } from "react";
import Select from "@/components/atoms/common/Select";
import { useTranslation } from "react-i18next";

interface Option {
    value: string;
    label: string;
}

interface SelectFieldProps {
    label: string;
    type?: string;
    options: Option[];
    error?: string | null;
}

const SelectField: FC<SelectFieldProps> = forwardRef<HTMLSelectElement,SelectFieldProps>(
    ({label, type, options, error, ...props}: SelectFieldProps, ref) => {
        const { t } = useTranslation();
        return (
            <div className="mb-4">
                <label htmlFor={label} className="block text-sm font-medium text-gray-700">
                    {t(label)}
                </label>
                <Select
                    ref={ref}
                    {...props}
                    options={options}
                    className="mt-1 block w-full"
                />
                {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
            </div>
        );
    } 
);
SelectField.displayName = "SelectField"
export default SelectField;
