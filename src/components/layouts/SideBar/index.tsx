'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarItem from "@/components/atoms/common/SidebarItem";
import { siteSettings } from "@/utils/settings/site-settings";
import Scrollbar from "../ScrollBar";
// import { useTranslation } from "react-i18next";

const SideBar  = () =>{
    // const { t } = useTranslation('en');
    // console.log("Tis: ", t)
    return (
        <aside className="shadow w-1/6 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full transition-all duration-300">
            <Scrollbar className="w-full h-full">
            <div className="flex flex-col space-y-10 py-20">
                    {siteSettings.sidebarLinks.admin.map(({ href, label, icon }) => (
                        <SidebarItem
                            href={href}
                            label={label}
                            icon={icon}
                            key={href}
                        />
                    ))}
            </div>
        </Scrollbar>

        </aside>
    );
}
export default SideBar;