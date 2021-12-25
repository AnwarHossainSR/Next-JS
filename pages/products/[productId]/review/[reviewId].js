import { useRouter } from "next/router";
import React from "react";

const ReviewDetails = () => {
  const router = useRouter();
  return (
    <div>
      product {router.query.productId} page inside review Details{" "}
      {router.query.reviewId}
    </div>
  );
};

export default ReviewDetails;
