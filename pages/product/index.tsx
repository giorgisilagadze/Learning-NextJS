import Footer from "@/components/Footer";

export default function Product() {
  return <h1>Product page</h1>;
}

Product.getLayout = function pageLayout(page: any) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
