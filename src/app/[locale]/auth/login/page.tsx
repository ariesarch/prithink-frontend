import { FC } from 'react';
import AuthPageTemplate from '@/components/templates/auth/AuthPageTemplate';
import LoginForm from '@/components/organisms/auth/LoginForm';
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['common'];
const LoginPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <AuthPageTemplate
            locale={locale}
            translations={resources}>
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <LoginForm />
        </AuthPageTemplate>
    );
};

export default LoginPage;
