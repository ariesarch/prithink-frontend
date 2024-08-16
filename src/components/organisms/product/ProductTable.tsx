'use client'
import { FC, useState } from 'react';
import TableHeader from '@/components/molecules/common/TableHeader';
import Button from '@/components/atoms/common/Button';
import Pagination from '@/components/molecules/common/Pagination';
import { Product, ProductsResponse } from '@/interfaces/product.interface';
import { useProductQuery } from '@/hooks/queries/product/use-product-query';
import { useQuery } from '@tanstack/react-query';
import TableCell from '@/components/atoms/common/TableCell';
interface ProductTableProps {
    // products: Product[];
    // currentPage: number;
    // totalPages: number;
    // onPageChange: (page: number) => void;
    // onEdit: (id: string) => void;
    // onDelete: (id: string) => void;
}
// const ProductTable: FC<ProductTableProps> = ({ products, currentPage, totalPages, onPageChange, onEdit, onDelete }) => {
const ProductTable: FC<ProductTableProps> = ({  }) => {
    // const{isError,error,data} =  useQuery({
    //     queryKey: ['products'],
    //     queryFn: getProducts
    // });
    const [page, setPage] = useState(1); // Default to page 1
    const { data, isLoading, error, isError } = useProductQuery(page);
    if (isError && error) return <div>{error.message}</div>;
    if (!data) return <div>No data available</div>;
    const { products,currentPage, totalPages } = data
    return (
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
                {/* <TableHeader /> */}
                <tbody>
                    {products.map(user => (
                        <tr key={user.id}>
                            <TableCell align="left">{user.name}</TableCell>
                            <TableCell align="left">{user.price}</TableCell>
                            {/* <td className="p-2">
                                <Button variant="outline" onClick={() => onEdit(user.id)}>Edit</Button>
                                <Button variant="outline" onClick={() => onDelete(user.id)}>Delete</Button>
                            </TableCell> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default ProductTable;
