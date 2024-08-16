import { cn } from "@/utils/style.config";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

// Define styles using CVA
const checkboxStyles = cva(
    [
        "transition-colors duration-300",
        "focus:outline-none"
    ],
    {
        variants: {
            variant: {
                solid: "bg-primary-500 border-primary-500",
                outline: "bg-transparent border-gray-300",
                ghost: "bg-transparent border-transparent"
            },
            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
                lg: "w-6 h-6"
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
                className: "bg-primary-500 border-primary-500"
            },
            {
                variant: "outline",
                colorschema: "primary",
                className: "border-primary-500"
            },
            {
                variant: "ghost",
                colorschema: "primary",
                className: "border-primary-500"
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
type CheckboxProps = ComponentProps<"input"> & VariantProps<typeof checkboxStyles>;

// Create Checkbox component with forwardRef
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ variant, size, colorschema, className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            type="checkbox"
            className={cn(checkboxStyles({ variant, size, colorschema, className }))}
            {...props}
        />
    );
});

// Set display name for better debugging
Checkbox.displayName = "Checkbox";

export default Checkbox;
