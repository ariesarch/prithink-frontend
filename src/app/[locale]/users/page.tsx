import UserTable from "@/components/organisms/user/UserTable";
import AppTemplate from "@/components/templates/AppTemplate";
import { fetchUsers } from "@/hooks/queries/use-user.query";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common'];
const UserPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    const queryClient = new QueryClient();
    queryClient.prefetchQuery({
        queryKey: ["users",1],
        queryFn: ()=> fetchUsers,
    });
    return (
            <AppTemplate 
                locale={locale}
                translations={resources}>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <UserTable />
                </HydrationBoundary>
        </AppTemplate>
    );
};

export default UserPage;
