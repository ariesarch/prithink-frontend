import UserForm from "@/components/organisms/user/UserForm";
import AppTemplate from "@/components/templates/AppTemplate"
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common', 'form'];
const EditUserPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
            <UserForm />
        </AppTemplate>
    );
}
export default EditUserPage;