'use client'

import { FC, useEffect } from 'react';
import useRolesStore from '@/store/useRoleStore';
import { fetchRoles } from '@/hooks/queries/use-role.query';
import useGroupStore from '@/store/useGroupStore';
import { fetchAllGroups, fetchGroups } from '@/hooks/queries/use-group.query';
import SideBar from '@/components/layouts/SideBar';
import TranslationsProvider from '@/providers/TranslationProvider'; 
import NavBar from '@/components/layouts/NavBar'
import useSitesStore from '@/store/useSiteStore';
import { fetchSites } from '@/hooks/queries/use-site.query';
interface AppTemplateProps {
    children: React.ReactNode;
    locale: string; 
    translations: any;
}

const AppTemplate: FC<AppTemplateProps> = ({ children, locale, translations }) => {
    const { setRoles } = useRolesStore((state) => state);
    const { setGroups } = useGroupStore((state) => state);
    const { setSites } = useSitesStore((state)=> state)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rolesResponse = await fetchRoles();
                const roles = rolesResponse.data;
                setRoles(roles);
                const groupsResponse = await fetchAllGroups();
                setGroups(groupsResponse.data);
                const siteResponse = await fetchSites();
                const sites = siteResponse?.data;
                console.log("Fetch site?")
                setSites(sites);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchData();
    }, [setRoles, setGroups]);
    
    return (
        <TranslationsProvider
            namespaces={['common']}
            locale={locale}
            resources={translations}
        >
            <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
                <NavBar />
                <div className="flex flex-1 pt-10">
                    <SideBar />
                    <main className={`w-full flex-1 transition-all duration-300 lg:ps-56 xl:ps-76`}>
                        <div className="p-4 md:p-6 overflow-y-auto h-full">{children}</div>
                    </main>
                </div>
            </div>
        </TranslationsProvider>
    );
};

export default AppTemplate;
