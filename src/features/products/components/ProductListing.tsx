"use client";

import type { ProductsResponse } from "../types/product.types";

const ProductListing = ({ products }: { products: ProductsResponse }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.retailPrice.toFixed(2)}</p>
          <p>${product.salePrice.toFixed(2)}</p>
          <img src={product.thumbnail} alt={product.name} />
        </div>
      ))}
    </div>
  )
}

export default ProductListing