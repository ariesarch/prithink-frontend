import TranslationsProvider from '@/providers/TranslationProvider';
import { FC } from 'react';

interface AuthPageTemplateProps {
    children: React.ReactNode;
    locale: string;
    translations: any;
}

const AuthPageTemplate: FC<AuthPageTemplateProps> = ({ children, locale, translations }) => {
    return (
        <TranslationsProvider
            namespaces={['common']}
            locale={locale}
            resources={translations}
        >
        <div className="min-h-screen w-full p-4 flex items-center justify-center bg-gray-200">
            <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg">
                {children}
            </div>
        </div>
        </TranslationsProvider>
    );
};

export default AuthPageTemplate;
