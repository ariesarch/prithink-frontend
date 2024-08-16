'use client'
import { cn } from "@/utils/style.config";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef,useState } from "react";
import { EyeIcon } from "../Icon";
import { EyeOffIcon } from "../Icon";
// Define styles using CVA
const passwordInputStyles = cva(
    [
        "border rounded-md",
        "focus:outline-none",
        "transition-colors duration-300"
    ],
    {
        variants: {
            variant: {
                solid: "bg-white border-gray-300",
                outline: "bg-transparent border-gray-300",
                ghost: "bg-transparent border-none"
            },
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg"
            },
            colorschema: {
                primary: "border-primary-500 placeholder-primary-500",
                secondary: "border-secondary-500 placeholder-secondary-500"
            }
        },
        compoundVariants: [
            {
                variant: "solid",
                colorschema: "primary",
                className: "bg-primary-100 focus:border-primary-600"
            },
            {
                variant: "outline",
                colorschema: "primary",
                className: "border-primary-500 focus:border-primary-600"
            },
            {
                variant: "ghost",
                colorschema: "primary",
                className: "text-primary-600 placeholder-primary-300"
            }
        ],
        defaultVariants: {
            variant: "outline",
            size: "md",
            colorschema: "primary"
        }
    }
);

// Define type for props
type PasswordInputProps = ComponentProps<"input"> & VariantProps<typeof passwordInputStyles>;

// Create Input component with forwardRef
const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ variant, size, colorschema, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative">
            <input
                ref={ref}
                type={showPassword ? "text" : "password"}
                className={cn(passwordInputStyles({ variant, size, colorschema, className }))}
                {...props}
            />
            <label
                htmlFor={""}
                className="absolute end-4 top-5 -mt-2 text-body cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
            >
                {showPassword}
                {showPassword ? (
                    <EyeOffIcon className="w-6 h-6" />
                ) : (
                    <EyeIcon className="w-6 h-6" />
                )}
            </label>
        </div>
    );
});

// Set display name for better debugging
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
