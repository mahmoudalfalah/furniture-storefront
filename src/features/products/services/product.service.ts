import { apiClient } from '@/lib/api-client';
import { Product, ProductsResponse } from '../types/product.types';

export const getProducts = async (page: number = 1): Promise<ProductsResponse> => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
  })

  return apiClient<ProductsResponse>(`/products?${queryParams.toString()}`, {
    method: 'GET',
    next: {
      tags: ['products-list'],
      revalidate: 3600
    }
  });
}