import { FC } from 'react';
import { formatPrice } from '@/utils/product';
import { ProductDetailsProps } from '@/interfaces/product.interface';
const ProductDetails: FC<ProductDetailsProps> = ({ name, price, description }:ProductDetailsProps) => {
    return (
        <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-lg text-gray-600 mb-4">{formatPrice(price)}</p>
            <p className="text-gray-800 mb-4">{description}</p>
            {/* <ul className="list-disc pl-5">
                {features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default ProductDetails;
