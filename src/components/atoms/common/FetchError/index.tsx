'use client'
import { FC } from 'react';

interface FetchErrorProps {
    message: string;
}

const FetchError: FC<FetchErrorProps> = ({ message }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-600 p-4 rounded-lg">
            <p className="text-lg font-semibold">Error: {message}</p>
        </div>
    );
};

export default FetchError;