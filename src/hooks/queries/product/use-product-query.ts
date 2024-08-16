import { productService } from '@/services/product.service';
import { Product, ProductsResponse } from '@/interfaces/product.interface';
import { API_ENDPOINTS } from '@/utils/api/endpoints'
import { useQuery,keepPreviousData } from '@tanstack/react-query';

export const useProductQuery = (page: number) => {
  return useQuery<ProductsResponse, Error>({
    queryKey: ['products', page],
    queryFn: async () => {
      const { products, totalPages, currentPage } = await productService.fetchProducts(page as number);
      return { products, totalPages, currentPage };
    },
    placeholderData:keepPreviousData, // Keep old data while fetching new data
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Data remains in cache for 10 minutes
  });
};


export const useProductDetailQuery = (slug: string) => {
  return useQuery<Product, Error>({
    queryKey: [API_ENDPOINTS.PRODUCTS, slug],
    queryFn: ()=>productService.fetchProductDetail(slug)
});
};
