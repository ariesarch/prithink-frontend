import UserTable from "@/components/organisms/user/UserTable";
import SettingTable from "@/components/organisms/setting/SettingTable";
import AppTemplate from "@/components/templates/AppTemplate";
import { fetchSettings } from "@/hooks/queries/use-setting.query";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common'];
const SettingPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    const queryClient = new QueryClient();
    queryClient.prefetchQuery({
        queryKey: ["settings", 1],
        queryFn: () => fetchSettings,
    });
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <SettingTable />
                </HydrationBoundary>
        </AppTemplate>
    );
};

export default SettingPage;
