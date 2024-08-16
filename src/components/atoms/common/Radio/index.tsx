import { cn } from "@/utils/style.config"
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps, forwardRef } from "react"

const radioStyles = cva([
    "cursor-pointer",
    "accent-primary-500"
],
    {
        variants: {
            variant: {
                solid: "",
                readonly: "cursor-not-allowed",
            },
            size: {
                sm: "px-4 py-2 w-2 h-2",
                md: "px-4 py-2 w-4 h-4",
                lg: "px-6 py-3 w-8 h-8"
            }
        },
        defaultVariants: {
            variant: "solid",
            size: "md"
        }
    }
)
type RadioProps = ComponentProps<"input"> & VariantProps<typeof radioStyles>
const Radio = forwardRef<HTMLInputElement, RadioProps>(({ variant, size, ...props }, ref) => {
    return <input ref={ref} type="radio" {...props} className={cn(radioStyles({ variant, size }))} disabled={variant === "readonly"} />
})
Radio.displayName = "Radio"
export default Radio;