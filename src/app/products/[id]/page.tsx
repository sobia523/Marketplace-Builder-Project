'use client'
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Reviews from "@/components/reviews";
import TShirt from "@/components/t-shirt";
import { BreadcrumbDemo } from "@/components/Breadcrumb";

interface Interproducts {
    title: string;
    price: string;
    id: number;
    rating?: string;
    old_price?: string;
    img_url: string;
    img1: string;
    img2: string;
    img3: string;
}

let product: Interproducts[] = [
    {
        title: "T-SHIRT WITH TAPE DETAILS",
        id: 1,
        price: "$120",
        img_url: "/image1.png",
        img1: "/image9.png",
        img2: "/image10.png",
        img3: "/image11.png"
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$240",
        img_url: "/image2.png",
        old_price: "$260",
        img1: "/image9.png",
        img2: "/image10.png",
        img3: "/image11.png"
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: "$180",
        img_url: "/image3.png",
        img1: "/image9.png",
        img2: "/image10.png",
        img3: "/image11.png"
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: "$130",
        img_url: "/image4.png",
        old_price: "$160",
        img1: "/image9.png",
        img2: "/image10.png",
        img3: "/image11.png"
    },
];

export default function Pre_Detail() {
    const params = useParams();
    const id = params.id;
    const item = product.find((item) => item.id === Number(id));

    if (!item) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
            <BreadcrumbDemo />
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
                {/* Images Section */}
                <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] sm:order-1">
                    <Image className="w-[100px] sm:w-full h-[100px] sm:h-[150px]" src={item.img1} alt="product-detail" width={100} height={100}></Image>
                    <Image className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" src={item.img2} alt="product-detail" width={100} height={100}></Image>
                    <Image className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" src={item.img3} alt="product-detail" width={100} height={100}></Image>
                </div>

                {/* Large Image Section */}
                <div className="w-full sm:w-[444px] h-[200px] sm:h-[500px] mt-5 sm:mt-0 sm:order-2">
                    <Image className="w-full h-full" src={item.img3} alt="product-detail" width={100} height={100}></Image>
                </div>

                {/* Product Details Section */}
                <div className="w-full sm:w-[600px] sm:h-[500px] mt-5 sm:mt-0 sm:order-3">
                    <h1 className="text-2xl md:text-3xl font-extrabold">{item.title}</h1>
                    <div className="flex text-yellow-500">{[<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />]}</div>
                    <p className="font-bold mt-1">{item.price} <span className="text-gray-400 line-through">{item.old_price}</span></p>
                    <p className="text-gray-400 mt-2">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

                    {/* Select Colors Section */}
                    <div className="mt-5">
                        <p>Select Colors</p>
                        <div className="flex space-x-3 mt-3">
                            {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
                                <div key={index} className="w-[40px] h-[40px] rounded-full flex justify-center items-center" style={{ backgroundColor: color }}>
                                    <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Choose Size Section */}
                    <div className="mt-4">
                        <p className="text-gray-500 mt-2">Choose Size</p>
                        <div className="flex space-x-3">
                            {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                                <div key={index} className={`w-[80px] h-[50px] flex justify-center items-center rounded-[62px] ${size === "Large" ? "bg-[#000000] text-white" : "bg-[#F0F0F0] text-gray-400"}`}>
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex justify-start items-center mt-7 space-x-4 gap-4">
                        <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                            <Minus />
                            1
                            <Plus />
                        </div>
                        <Button className="bg-black text-white w-full sm:w-[300px] rounded-[20px]">Add to Cart</Button>
                    </div>
                </div>
            </div>
            <Reviews />
            <TShirt />
        </>
    );
};
