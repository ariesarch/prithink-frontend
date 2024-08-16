import { FC } from 'react';

interface ProductImageGalleryProps {
    images: string[];
}

const ProductImageGallery: FC<ProductImageGalleryProps> = ({ images }) => {
    return (
        <div className="w-full md:w-1/2">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Product image ${index + 1}`} className="w-full h-auto mb-4" />
            ))}
        </div>
    );
};

export default ProductImageGallery;
