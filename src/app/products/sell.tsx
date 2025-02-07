"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four, Nfour } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import swal from "sweetalert2";
import { addToCard } from "../actions/actions";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(Nfour);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
      swal.fire({
          position : 'top-right',
          icon : 'success',
          title : `${product.name} added to cart`,
          showConfirmButton : false,
          timer : 1000
      })
      addToCard(product);
      
    };


  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8 pt-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center p-10">
      TOP SELLING
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((products) => (
          <div
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
            key={products._id}
          >
            <Link href={`/product/${products.slug?.current || 'default-slug'}`}>
            {products.image && (
              <Image
                src={urlFor(products.image).url()}
                alt="image"
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            <h2 className="text-1lg font-bold mt-4">{products.name}</h2>

            <p className="text-gray-600 mt-3">
              {products.price ? `$${products.price}` : "Price not available"}
            </p>
            <button
                className="bg-gradient-to-r from-red-500 to-gray-400 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, products)}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
