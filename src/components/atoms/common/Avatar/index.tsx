import { cn } from "@/utils/style.config";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { ComponentProps } from "react";

// Define styles using CVA
const avatarStyles = cva(
    [
        "relative overflow-hidden transition-colors duration-300",
        "cursor-pointer"
    ],
    {
        variants: {
            size: {
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-12 h-12"
            },
            border: {
                none: "border-none",
                light: "border-border-200",
                dark: "border-border-600"
            },
            rounded: {
                true: "rounded-full",
                false: ""
            }
        },
        defaultVariants: {
            size: "md",
            border: "light",
            rounded: false
        }
    }
);

type AvatarProps = {
    className?: string;
    src: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    border?: "none" | "light" | "dark";
    rounded?: boolean; // Add rounded prop
} & ComponentProps<"div">;

const Avatar: React.FC<AvatarProps> = ({
    src,
    className,
    alt = "Avatar",
    size,
    border,
    rounded,
    ...rest
}) => {
    return (
        <div
            className={cn(
                avatarStyles({ size, border, rounded }),
                className
            )}
            {...rest}
        >
            <Image alt={alt} src={src} layout="fill" priority={true} />
        </div>
    );
};

export default Avatar;
