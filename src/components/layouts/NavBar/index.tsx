import { NavbarIcon } from "@/components/atoms/common/Icon";
import Logo from "@/components/atoms/common/Logo";
import { useUI } from "@/context";
import { motion } from "framer-motion";
import SideBar from "@/components/layouts/SideBar";
import AuthorizedMenu from "../navigation/auth-menus";
import { siteSettings } from "@/utils/settings/site-settings";
import SidebarItem from "@/components/atoms/common/SidebarItem";
import LanguageChanger from "@/components/atoms/common/LanguageSwitcher";
import DrawerWrapper from "@/components/layouts/DrawerWrapper";
import Drawer from "@/components/layouts/Drawer"
const NavBar = () => {
    const { toggleSidebar, displaySidebar, closeSidebar } = useUI();

    return (
        <header className="bg-white shadow fixed w-full z-40">
            <nav className="px-5 md:px-8 py-2 flex items-center justify-between">
                {/* <!-- Mobile menu button --> */}
                <motion.button
                    whileTap={{ scale: 0.88 }}
                    onClick={toggleSidebar}
                    className="flex p-2 h-full items-center justify-center focus:outline-none focus:text-primary lg:hidden"
                >
                    <NavbarIcon />
                </motion.button>

                <div className="hidden md:flex ms-5 me-auto">
                    <Logo />
                </div>

                <Drawer open={displaySidebar} onClose={closeSidebar} variant="left">
                    <DrawerWrapper onClose={closeSidebar}>
                        <div className="flex flex-col space-y-6 p-5">
                            {/* <Sidebar/> */}
                            {siteSettings.sidebarLinks.admin.map(({ href, label, icon }) => (
                                <SidebarItem
                                    href={href}
                                    label={label}
                                    icon={icon}
                                    key={href}
                                    onClick={closeSidebar}
                                />
                            ))}
                        </div>
                    </DrawerWrapper>
                </Drawer>

                <div className="flex items-center space-s-8">
                    <LanguageChanger/>
                    {/* {hasAccess(adminAndOwnerOnly, permissions) && (
                        <LinkButton
                            href={ROUTES.CREATE_SHOP}
                            className="ms-4 md:ms-6"
                            size="small"
                        >
                            {t("common:text-create-shop")}
                        </LinkButton>
                    )} */}

                    <AuthorizedMenu />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
