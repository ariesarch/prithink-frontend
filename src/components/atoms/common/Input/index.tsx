import { cn } from "@/utils/style.config";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

// Define styles using CVA
const inputStyles = cva(
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
type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

// Create Input component with forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>(({ variant, size, colorschema, className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={cn(inputStyles({ variant, size, colorschema, className }))}
            {...props}
        />
    );
});

// Set display name for better debugging
Input.displayName = "Input";

export default Input;
