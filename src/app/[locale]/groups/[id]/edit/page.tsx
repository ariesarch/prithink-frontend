import AppTemplate from "@/components/templates/AppTemplate"
import GroupForm from "@/components/organisms/group/GroupForm";
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common'];
const EditGroupPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
            <GroupForm />
        </AppTemplate>
    );
}
export default EditGroupPage;