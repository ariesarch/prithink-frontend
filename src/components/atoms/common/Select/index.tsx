import { cn } from "@/utils/style.config";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";

// Define styles using CVA
const selectStyles = cva(
    [
        "border rounded-md",
        "focus:outline-none",
        "transition-colors duration-300",
        "bg-white"
    ],
    {
        variants: {
            variant: {
                solid: "border-gray-300",
                outline: "border-gray-300",
                ghost: "border-none"
            },
            size: {
                sm: "px-3 py-2 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg"
            },
            colorschema: {
                primary: "border-primary-500",
                secondary: "border-secondary-500"
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
                className: "text-primary-600"
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
type SelectProps = ComponentProps<"select"> & VariantProps<typeof selectStyles> & {
    options: Array<{ value: string; label: string }>;
};

// Create Select component with forwardRef
const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ variant, size, colorschema, className, options, ...props }, ref) => {
        return (
            <select
                ref={ref}
                className={cn(selectStyles({ variant, size, colorschema, className }))}
                {...props}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
);

// Set display name for better debugging
Select.displayName = "Select";

export default Select;
