import { FC, ReactNode } from 'react';

interface LoginLayoutProps {
    children: ReactNode;
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
    return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                {children}
            </div>
    );
};

export default LoginLayout;
