import AppTemplate from "@/components/templates/AppTemplate"
import SettingForm from "@/components/organisms/setting/SettingForm";
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common'];
const EditSettingPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <AppTemplate
            locale={locale}
            translations={resources}>
            <SettingForm />
        </AppTemplate>
    );
}
export default EditSettingPage;