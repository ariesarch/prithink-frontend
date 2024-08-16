import GroupTable from "@/components/organisms/group/GroupTable";
import AppTemplate from "@/components/templates/AppTemplate";
import { fetchGroups } from "@/hooks/queries/use-group.query";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common'];
const GroupPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    const queryClient = new QueryClient();

    queryClient.prefetchQuery({
        queryKey: ["groups", 1],
        queryFn: () => fetchGroups,
    });
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <GroupTable />
                </HydrationBoundary>
        </AppTemplate>
    );
};

export default GroupPage;
