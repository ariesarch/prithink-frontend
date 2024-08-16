import { FC } from 'react';
import UserTable from '@/components/organisms/user/UserTable';
import Pagination from '@/components/molecules/common/Pagination';
interface TableWrapperTemplateProps {
    users: any[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const TableWrapperTemplate: FC<TableWrapperTemplateProps> = ({ users, currentPage, totalPages, onPageChange, onEdit, onDelete }) => {
    return (
        <div>
            {/* <UserTable users={users} onEdit={onEdit} onDelete={onDelete} /> */}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};

export default TableWrapperTemplate;
