import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      {" "}
      this is preview n{reviewId} of product n{productId}{" "}
    </h1>
  );
}
