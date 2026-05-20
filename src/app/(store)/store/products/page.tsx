import { getProducts } from "@/features/products/services/product.service";
import ProductListing from "@/features/products/components/ProductListing";


const ProductListingPage = async () => {
  const products = await getProducts(1);

  console.log("Fetched products:", products);

  return (
    <div className="text-2xl font-bold">
      <ProductListing products={products} />
    </div>
  )
}

export default ProductListingPage