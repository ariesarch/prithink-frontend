import AppTemplate from "@/components/templates/AppTemplate";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import initTranslations from '@/app/i18n';
import { fetchApiKeys } from "@/hooks/queries/use-api_key.query";
import ApiKeyTable from "@/components/organisms/api_key/ApiKeyTable";
const i18nNamespaces = ['common'];
const ApiKeysPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    const queryClient = new QueryClient();

    queryClient.prefetchQuery({
        queryKey: ["sites", 1],
        queryFn: () => fetchApiKeys,
    });
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {/* <ApiKeyTable /> */}
                <h3>Helo</h3>
            </HydrationBoundary>
        </AppTemplate>
    );
};

export default ApiKeysPage;
