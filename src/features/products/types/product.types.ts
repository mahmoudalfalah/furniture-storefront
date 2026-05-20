export type Product = {
  id: number;
  slug: string;
  name: string;
  thumbnail: string;
  retailPrice: number;
  salePrice: number;
  discount: number;
  hasDiscount: boolean;
  stockStatus: "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";
  availableQuantity: number;
  isNewArrival: boolean;
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
  };
}

export type ProductsResponse = {
  data: Product[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}