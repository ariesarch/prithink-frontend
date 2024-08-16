import Input from "@/components/atoms/common/Input";
import { FC } from "react"

interface InputFieldProps{
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null
}
const bkInputField: FC<InputFieldProps> = ({ label, name, type, value, onChange, error}: InputFieldProps) => {
    return(
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <Input 
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full" />
            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        </div>
    )
}
export default bkInputField;