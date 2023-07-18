import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleMap, Marker } from "@react-google-maps/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const route = useRouter();
  const handleOnClick = () => {
    route.push("/product");
  };

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const name = process.env.DB_NAME;
  console.log(name);

  return (
    <>
      <Head>
        <title>Learning Next.js</title>
        <meta name="description" content="Learning Next.js" />
      </Head>
      <h1>Home Page</h1>
      <Link href="/product">product page</Link>
      <button onClick={handleOnClick}>place order</button>
      <p>{process.env.NEXT_PUBLIC_NUMBER}</p>
    </>
  );
}
