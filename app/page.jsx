import { altProductData } from "./data/data";
import Link from "next/link";
import Image from "next/image";

export default function Productcards() {
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <h1 className="text-6xl">Products:</h1>
        {altProductData.map((product) => (
          <Link
            href={`/${product.ref}`}
            key={product.ref}
            className="my-8 w-80 h-80"
          >
            <p className="text-xl">{product.name}</p>
            <Image
              alt={product.name}
              width={300}
              height={300}
              src={product.image}
              className="object-cover w-full h-full"
            />
          </Link>
        ))}
      </main>
    </>
  );
}
