import AppTemplate from "@/components/templates/AppTemplate";
import initTranslations from '@/app/i18n';
import useAuthStore from "@/store/useAuthStore";

const i18nNamespaces = ['common'];
const HomePage =  async ({ params: { locale } }: { params: { locale: string } }) => {
  const {resources} =  await initTranslations(locale, i18nNamespaces);
  return (
    <AppTemplate
      locale={locale}
      translations={resources}>
      <div className="flex justify-center">
        <h1 className="text-2xl font-extrabold">Home! Welcome to Home Page</h1>
      </div>
    </AppTemplate>
  );
};
export default HomePage;
