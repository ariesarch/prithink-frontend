import { FC } from 'react';
import ProductImageGallery from '@/components/molecules/product/ProductImageGallery';
import ProductDetails from '@/components/molecules/product/ProductDetails';
import { Product } from '@/interfaces/product.interface';
interface ProductDetailProps {
    product: Product;
}

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* <ProductImageGallery images={product.images} /> */}
            <ProductDetails
                name={product.name}
                price={product.price}
                description={product.description}
                // features={product.features}
            />
        </div>
    );
};

export default ProductDetail;
