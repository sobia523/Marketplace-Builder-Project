import { BreadcrumbDemo } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { RiDeleteBinFill } from "react-icons/ri";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { IoArrowForwardSharp } from "react-icons/io5";

interface Icart {
    imageurl: string,
    title: string,
    id: number,
    size: string,
    color: string,
    price: string
}

const cartItem: Icart[] = [
    {
        imageurl: "/image17.png",
        title: "Gradient Graphic T-shirt",
        id: 1,
        size: "Large",
        color: "White",
        price: "$145"
    },
    {
        imageurl: "/image3.png",
        title: "CHECKERED SHIRT",
        id: 2,
        size: "Medium",
        color: "Red",
        price: "$180"
    },
    {
        imageurl: "/image2.png",
        title: "SKINNY FIT JEANS",
        id: 3,
        size: "Large",
        color: "Blue",
        price: "$240"
    },
];

export default function Cart() {
    return (
        <>
            <div className="pl-5">
                <BreadcrumbDemo />
                <h1 className="text-2xl md:text-3xl font-extrabold mt-9 ml-9">YOUR CART</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <div className="h-full w-full md:w-[700px] md:h-[500px] border rounded-[20px]">
                    {
                        cartItem.map((item) => {
                            return (
                                <div key={item.id} className="flex justify-between"> {/* Add key here */}
                                    <div className="flex mt-4 p-4 border-b gap-2">
                                        <Image className="rounded-[16px]" src={item.imageurl} alt={item.title} width={100} height={100} />
                                        <div>
                                            <h2 className="font-bold">{item.title}</h2>
                                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                                            <p className="text-sm text-gray-500">Color: {item.color}</p>
                                            <p className="font-bold">{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between items-center space-y-5 mr-5 mb-3">
                                        <RiDeleteBinFill className="text-[#FF3333] mt-12 ml-12" />
                                        <div className="w-[100px] h-[40px] flex justify-between p-3 mr-5 items-center rounded-[62px] bg-[#F0F0F0] text-black">
                                            <Minus />
                                            1
                                            <Plus />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="w-full h-full md:w-[450px] border rounded-[20px] md:h-[490px] flex flex-col justify-start items-center p-4">
                    <div className="w-[90%] space-y-2">
                        <h1 className="text-xl font-bold">Order Summary</h1>
                        <p className="flex justify-between text-gray-500">Subtotal<span className="text-black">$565</span></p>
                        <p className="flex justify-between text-gray-500">Discount (-20%)<span className="text-[#FF3333]">-$113</span></p>
                        <p className="flex justify-between text-gray-500">Delivery Fee<span className="text-black">$15</span></p>
                        <hr />
                        <p className="flex justify-between text-gray-500">Total<span className="text-black">$467</span></p>
                        <div className="flex">
                            <input className="bg-[#F0F0F0] w-[200px] md:w-full text-gray-400 outline-none py-2 px-5 rounded-[16px]" placeholder="Add promo code" />
                            <Button className="ml-1 rounded-[16px]">Apply</Button>
                        </div>
                        <Button className="w-full rounded-[16px]">Go to Checkout <IoArrowForwardSharp /></Button>
                    </div>
                </div>
            </div>
        </>
    );
}
