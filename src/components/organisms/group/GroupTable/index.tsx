'use client';
import { FC, useEffect, useState } from 'react';
import TableHeader from '@/components/molecules/common/TableHeader';
import Button from '@/components/atoms/common/Button';
import Pagination from '@/components/molecules/common/Pagination';
import { useGroupsQuery } from '@/hooks/queries/use-group.query';
import { groupTableHeaders } from '@/utils/tableHeaders';
import { useRouter } from 'next/navigation';
import { Group } from '@/interfaces/group.interface';
import Loading from '@/components/atoms/common/Loading';
import NoData from '@/components/atoms/common/NoData';
import FetchError from '@/components/atoms/common/FetchError';
import useGroupStore from '@/store/useGroupStore';
import Link from 'next/link';
import TableContainer from '../../common/TableContainer';
import TableCell from '@/components/atoms/common/TableCell';

const GroupTable: FC = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [previousKeys, setPreviousKeys] = useState<string>('{}');
    const { data, isLoading, error, isError } = useGroupsQuery(page, previousKeys);
    const {
        items = [],
        current_page = 0,
        per_page = 0,
        total_count = 0,
        previous_keys ='{}'
    } = data || {};

    const { setGroup } = useGroupStore();

    const onEdit = (group: Group) => {
        setGroup(group);
        router.push(`/groups/${group.group_id}/edit`);
    };
    useEffect(() => {
        // if (current_page !== 0 && page !== current_page) {
        //     setPage(current_page);
        // }
        if (previous_keys !== '{}' && previous_keys !== previousKeys) {
            setPreviousKeys(previous_keys);
        }
    }, [previous_keys,current_page]);
    return (
        <TableContainer>
            <div className="flex flex-col">
                <div className="flex justify-between mb-4">
                    <h3 className="text-2xl font-extrabold">Group Management</h3>
                    <Link href="/groups/create">
                        <Button>Create New</Button>
                    </Link>
                </div>
                {isLoading && <Loading />}
                {isError && error && <FetchError message={error.message} />}
                {!isLoading && !isError && items.length === 0 && <NoData />}
                {!isLoading && !isError && items.length > 0 && (
                    <div className="w-full">
                        <table className="min-w-full leading-normal">
                            <TableHeader headers={groupTableHeaders} />
                            <tbody>
                                {items.map((group, index) => (
                                    <tr key={group.group_id}>
                                        <TableCell align="left">{index + 1}</TableCell>
                                        <TableCell align="left">{group.group_name}</TableCell>
                                        <TableCell align="left">{group.user.user_name}</TableCell>
                                        <TableCell align="left">{group.time_per_day}</TableCell>
                                        <TableCell align="left">
                                            <Button size="sm" variant="outline" onClick={() => onEdit(group)}>Edit</Button>
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

export default GroupTable;
