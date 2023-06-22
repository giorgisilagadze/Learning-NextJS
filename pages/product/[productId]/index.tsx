import { useRouter } from "next/router";
import data from "../../../data.json";

export default function ProductId() {
  const route = useRouter();
  const producId = data.find((item) => item.id == route.query.productId);
  return <h1>Product page of {producId?.text}</h1>;
}
