'use client'
import { FC, useEffect, useState } from 'react';
import TableHeader from '@/components/molecules/common/TableHeader';
import Button from '@/components/atoms/common/Button';
import Pagination from '@/components/molecules/common/Pagination';
import { useUserQuery } from '@/hooks/queries/use-user.query';
import { userTableHeaders } from '@/utils/tableHeaders';
import { useRouter } from 'next/navigation';
import Loading from '@/components/atoms/common/Loading';
import FetchError from '@/components/atoms/common/FetchError';
import NoData from '@/components/atoms/common/NoData';
import TableContainer from '../../common/TableContainer';
import Link from 'next/link';
import TableCell from '@/components/atoms/common/TableCell';
import useUserStore from '@/store/useUserStore';
import { User } from '@/interfaces/user.interface';
const UserTable = ({ }) => {
    const router = useRouter();
    const [page, setPage] = useState(1); 
    const [previousKeys, setPreviousKeys] = useState<string>('{}');
    const { data, isLoading, error, isError } = useUserQuery(page,previousKeys);
    const {setUser} = useUserStore();
    const {
        items = [],
        current_page = 0,
        per_page = 0,
        total_count = 0,
        previous_keys='{}'
    } = data || {};
    
    const onEdit = (user: User) => {
        setUser(user);
        router.push(`/users/${user.user_id}/edit`);
    };
    useEffect(() => {
        if (previous_keys !== '{}' && previous_keys !== previousKeys) {
            setPreviousKeys(previous_keys);
        }
    }, [previous_keys, current_page]);
    return (
        <TableContainer>
            <div className="flex flex-col">
                <div className="flex justify-between mb-4">
                    <h3 className="text-2xl font-extrabold">User Management</h3>
                    <Link href="/users/create">
                        <Button>Create New</Button>
                    </Link>
                </div>
                {isLoading && <Loading />}
                {isError && error && <FetchError message={error.message} />}
                {!isLoading && !isError && items.length === 0 && <NoData />}
                {!isLoading && !isError && items.length > 0 && (
                    <div className="w-full">
                        <table className="min-w-full leading-normal">
                            <TableHeader headers={userTableHeaders} />
                            <tbody>
                                {items.map((user, index) => (
                                    <tr key={user.user_id}>
                                        <TableCell align="left">{index+1}</TableCell>
                                        <TableCell align="left">{user.user_name}</TableCell>
                                        <TableCell align="left">{user.role.role_name}</TableCell>
                                        <TableCell align="left">{user.company.company_name}</TableCell>
                                        <TableCell align="left">
                                            <Button size="sm" variant="outline" onClick={() => onEdit(user)}>Edit</Button>
                                            {/* <Button variant="outline" onClick={() => onDelete(user.id)}>Delete</Button> */}
                                        </TableCell>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination currentPage={current_page} totalPages={Math.ceil(total_count / per_page)} onPageChange={setPage} />
                    </div>
                    )}
            </div>
        </TableContainer>
    );
};

export default UserTable;
