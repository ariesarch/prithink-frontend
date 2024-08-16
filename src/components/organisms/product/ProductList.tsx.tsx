import { FC } from 'react';
import { Product } from '@/interfaces/product.interface';
import ProductCard from '@/components/molecules/product/ProductCard';
interface ProductListProps {
    products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
