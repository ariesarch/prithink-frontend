import AppTemplate from "@/components/templates/AppTemplate";
import initTranslations from '@/app/i18n';
import ApiKeyForm from "@/components/organisms/api_key/ApiKeyForm";

const i18nNamespaces = ['common'];
const EditApiKeyPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
            <ApiKeyForm />
        </AppTemplate>
    );
};
export default EditApiKeyPage;
