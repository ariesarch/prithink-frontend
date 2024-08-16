export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  // features: string[];  // Use string[] for arrays of strings
  imageUrl: string;    // Single image URL
  // images: string[];    // Array of image URLs
}
export interface ProductDetailsProps {
  name: string;
  price: number;
  description: string;
  // features: string[];
}
export interface ProductsResponse {
  products: Product[]
  currentPage: number
  totalPages: number,
  // previousCursor?: number;
  // nextCursor?: number;
  // pages:any
}
