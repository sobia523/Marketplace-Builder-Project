import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Interproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let product: Interproducts[] = [
  {
    title: "Gradient Graphic T-shirt",
    id: 1,
    price: "$145",
    img_url: "/image17.png",
  },
  {
    title: "Polo with Tipping Details",
    id: 2,
    price: "$180",
    img_url: "/image18.png",
  },
  {
    title: "Black Striped T-shirt",
    id: 3,
    price: "$120",
    img_url: "/image19.png",
    old_price: "$150",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 4,
    price: "$240",
    img_url: "/image2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 5,
    price: "$130",
    img_url: "/image3.png",
    old_price: "$160",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 6,
    price: "$130",
    img_url: "/image4.png",
    old_price: "$180",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 7,
    price: "$130",
    img_url: "/image5.png",
    old_price: "$160",
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 8,
    price: "$145",
    img_url: "/image6.png",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 9,
    price: "$80",
    img_url: "/image7.png",
  },
];

let star = [<FaStar key="1" />, <FaStar key="2" />, <FaStar key="3" />, <FaStar key="4" />, <FaStar key="5" />];

export default function CasualShirts() {
  return (
    <div className="w-full h-full sm:h-[500px]">
      <h1 className="text-3xl md:text-4xl font-extrabold text-start p-10">Casual</h1>
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {product.map((data) => {
          return (
            <div key={data.id} className="mb-6">
              <Link href={`/products/${data.id}`}>
                <div className="w-[240px] h-[230px] bg-[#F0EEED] rounded-[19px]">
                  <Image className="w-full h-full rounded-[19px]" src={data.img_url} alt={data.title} width={100} height={100}></Image>
                </div>
              </Link>
              <div>
                <p className="text-lg mt-2 font-bold">{data.title}</p>
                <p className="flex text-yellow-400">{star}</p>
                <p className="font-bold mt-1">
                  {data.price}{" "}
                  <span className="text-gray-400 font-bold line-through">{data.old_price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
