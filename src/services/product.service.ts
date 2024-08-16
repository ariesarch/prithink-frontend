import http from '@/utils/api/http';
import { API_ENDPOINTS } from '@/utils/api/endpoints';
import { Product, ProductsResponse } from '@/interfaces/product.interface';
import { CoreApi } from '@/utils/api/core.api';

class ProductService extends CoreApi{
    async fetchProducts(page: number): Promise<ProductsResponse> {
        const { data } = await http.get(API_ENDPOINTS.PRODUCTS, {
            params: { page },
        });
        return data;
    }

    async fetchProductDetail(slug: string): Promise<Product> {
        const { data } = await http.get(`${API_ENDPOINTS.PRODUCTS}/${slug}`);
        return data;
    }
}

export const productService = new ProductService(API_ENDPOINTS.PRODUCTS)
