import { FC } from 'react';
import Link from 'next/link';
import { Product } from '@/interfaces/product.interface';
interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border border-gray-300 rounded-md p-4">
            <Link href={`/product/${product.id}`}>
                    <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                    <p className="text-lg text-gray-600">{product.price}</p>
            </Link>
        </div>
    );
};

export default ProductCard;
