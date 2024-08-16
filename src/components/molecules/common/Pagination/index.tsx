import { FC } from 'react';
import Button from '@/components/atoms/common/Button';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <div className="bg-white min-w-full flex flex-col items-center mt-1">
            <div className="flex items-center">
                <Button
                    variant="rounded"
                    disabled={currentPage == 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </Button>
                {/* Render page numbers */}
                <div className="flex items-center mx-4">
                    {pageNumbers.map(page => (
                        <Button
                            variant="rounded"
                            key={page}
                            className={`mx-1 ${page === currentPage ? 'bg-primary-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </Button>
                    ))}
                </div>

                <Button
                    variant="rounded"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </Button>
            </div>
            <div className="my-1">
                <span>Page {currentPage} of {totalPages}</span>
            </div>
        </div>
    );
};

export default Pagination;
