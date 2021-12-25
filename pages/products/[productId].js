import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  return <div>Product details page {router.query.productId}</div>;
};

export default ProductDetails;
