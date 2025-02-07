import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product | null> {
    const products = await client.fetch(
        groq`*[_type == "products" && slug.current == $slug] {
        _id,
        name,
        price,
        image,
        description
    }`, { slug }
    );
    return products[0] || null; 
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return <div>Loading...</div>; 
    }

    console.log(product);  

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-8 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-bold">${product.price}</p>
                    <p className="text-gray-500">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
