import Image from "next/image";
import { useSettings } from "@/context/setting.context";
import { cn } from "@/utils/style.config";
import { siteSettings } from "@/utils/settings/site-settings";
import Link from "next/link";
const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
    className,
    ...props
}) => {
    const { logo, siteTitle } = useSettings();
    return (
        <Link
            href={siteSettings.logo.href}
            className={cn("inline-flex", className)}
            {...props}
        >
            <span
                className="overflow-hidden relative"
                style={{
                    width: siteSettings.logo.width,
                    height: siteSettings.logo.height,
                }}
            >
                <Image
                    src={logo?.original ?? siteSettings.logo.url}
                    alt={siteTitle ?? siteSettings.logo.alt}
                    layout="fill"
                    objectFit="contain"
                    loading="eager"
                />
            </span>
        </Link>
    );
};

export default Logo;
