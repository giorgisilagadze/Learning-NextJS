import Image from "next/image";
import car from "../public/5.jpeg";

export default function Oldcars() {
  return (
    <>
      <h1>old cars page</h1>
      <Image src={car} placeholder="blur" alt="car" width="500" height="400" />
      {["1", "2", "3", "4", "5"].map((image) => (
        <Image src={`/${image}.jpeg`} alt="old car" width="300" height="200" />
      ))}
    </>
  );
}
