import React from 'react';

interface TableContainerProps {
    children: React.ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = ({ children }) => {
    return (
        <div className="bg-white p-2 mx-auto shadow-lg rounded-lg overflow-x-auto min-w-full">
            {children}
        </div>
    );
};

export default TableContainer;
