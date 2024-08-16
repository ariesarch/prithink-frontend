'use client';
import { FC, useEffect, useState } from 'react';
import TableHeader from '@/components/molecules/common/TableHeader';
import Button from '@/components/atoms/common/Button';
import Pagination from '@/components/molecules/common/Pagination';
import { apiKeyTableHeaders } from '@/utils/tableHeaders';
import { useRouter } from 'next/navigation';
import Loading from '@/components/atoms/common/Loading';
import NoData from '@/components/atoms/common/NoData';
import FetchError from '@/components/atoms/common/FetchError';
import Link from 'next/link';
import TableContainer from '../../common/TableContainer';
import TableCell from '@/components/atoms/common/TableCell';
import { useApiKeysQuery } from '@/hooks/queries/use-api_key.query';
import { ApiKey } from '@/interfaces/api_key.interface';
import useApikeyStore from '@/store/useApiKeyStore';

const ApiKeyTable: FC = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [previousKeys, setPreviousKeys] = useState<string>('{}');
    const { data, isLoading, error, isError } = useApiKeysQuery(page, previousKeys);
    const {
        items = [],
        current_page = 0,
        per_page = 0,
        total_count = 0,
        previous_keys = '{}'
    } = data || {};

    const { setApiKey } = useApikeyStore();

    const onEdit = (apiKey: ApiKey) => {
        setApiKey(apiKey);
        router.push(`/integrated-api-keys/${apiKey.api_key_id}/edit`);
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
                    <h3 className="text-2xl font-extrabold">API Keys Management</h3>
                    <Link href="/integrated-api-keys/create">
                        <Button>Create New</Button>
                    </Link>
                </div>
                {isLoading && <Loading />}
                {isError && error && <FetchError message={error.message} />}
                {!isLoading && !isError && items.length === 0 && <NoData />}
                {!isLoading && !isError && items.length > 0 && (
                    <div className="w-full">
                        <table className="min-w-full leading-normal">
                            <TableHeader headers={apiKeyTableHeaders} />
                            <tbody>
                                {items.map((apiKey, index) => (
                                    <tr key={apiKey.api_key_id}>
                                        <TableCell align="left">{index + 1}</TableCell>
                                        <TableCell align="left">{apiKey.api_key}</TableCell>
                                        <TableCell align="left">{apiKey.company.company_name}</TableCell>
                                        <TableCell align="left">{apiKey.site.site_name}</TableCell>
                                        <TableCell align="left">
                                            <Button size="sm" variant="outline" onClick={() => onEdit(apiKey)}>Edit</Button>
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

export default ApiKeyTable;
