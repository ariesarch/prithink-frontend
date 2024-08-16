import Link from "next/link";
import { getIcon } from "@/utils/get-icon";
import * as sidebarIcons from "@/components/atoms/common/Icon";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
    href: string;
    label: string;
    icon: any;
    onClick?: () => void; // Add onClick prop
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, label, icon, onClick }) => {
    const { t } = useTranslation();
    return (
        <Link
            href={href}
            className="flex w-full items-center text-base text-body-dark text-start focus:text-accent"
            onClick={onClick} // Add onClick handler
        >
            {getIcon({
                iconList: sidebarIcons,
                iconName: icon,
                className: "w-5 h-5 me-4",
            })}
            {t(label)}
        </Link>
    );
};

export default SidebarItem;
