import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";

const Allreviews = [
  {
    name: "Samantha D.",
    feedback:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
    verified: true,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Alex M.",
    feedback:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
    verified: true,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Ethan R.",
    feedback:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
    verified: false,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Olivia P.",
    feedback:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
    verified: true,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Liam K.",
    feedback:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: 5,
    verified: true,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Ava H.",
    feedback:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 5,
    verified: true,
    date: "Posted on August 14, 2023",
  },
];

let star = [<FaStar key="1" />, <FaStar key="2" />, <FaStar key="3" />, <FaStar key="4" />, <FaStar key="5" />];

export default function Reviews() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="px-6 flex justify-between">
        <h1 className="sm:text-xl md:text-2xl  font-extrabold py-5">
          All Reviews
        </h1>
        <div className="space-x-3 flex mt-3 px-5">
          <Button variant={"outline"} className="hidden md:block">
            Latest
          </Button>
          <Button>Write a Review</Button>
        </div>
      </div>
      <div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 px-5 mt-3 md:mt-0">
          {Allreviews.map((data, index) => {
            return (
              <div key={index} className="border p-6 rounded-[20px]">
                <p className="flex text-yellow-500">{star}</p>
                <h2 className="font-bold mt-1 flex text-xl">
                  {data.name}{" "}
                  {data.verified && <Check className="bg-green-800 rounded-full text-white" />}
                </h2>
                <p className="text-sm text-gray-500">{data.feedback}</p>
                <p className="mt-5 text-gray-500">{data.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
