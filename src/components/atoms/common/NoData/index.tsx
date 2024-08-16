'use client'
import { FC } from 'react';

const NoData: FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-500">No data available..</p>
        </div>
    );
};

export default NoData;
