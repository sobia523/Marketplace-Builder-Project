import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Information from "./information";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto">
      {/* Information Section */}
      <span className="absolute top-[-130px]">
        <Information />
      </span>

      {/* Container */}
      <div className="flex flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b">
        {/* Top Section */}
        <div className="flex flex-col justify-center items-center w-[200px] md:ml-32">
          <ul>
            <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
            <p className="text-sm mt-1 text-gray-500  md:text-left">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 mt-3 justify-start md:justify-start">
              <FaTwitter className="text-xl" />
              <FaFacebook className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaGithub className="text-xl" />
              
            </div>
          </ul>
        </div>

        {/* Middle Section (Grid Layout) */}
        <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center gap-8 mt-8 md:mt-0">
          {/* Box 1 */}
          <ul className="space-y-3 mr-12">
            <h2 className="text-sm sm:text-2xl">Company</h2>
            <li className="text-sm text-gray-600">About</li>
            <li className="text-sm text-gray-600">Features</li>
            <li className="text-sm text-gray-600">Works</li>
            <li className="text-sm text-gray-600">Career</li>
          </ul>

          {/* Box 2 */}
          <ul className="space-y-3">
            <h2 className="text-sm sm:text-2xl">Help</h2>
            <li className="text-sm text-gray-600">Customer Support</li>
            <li className="text-sm text-gray-600">Delivery Details</li>
            <li className="text-sm text-gray-600">Terms & Conditions</li>
            <li className="text-sm text-gray-600">Privacy Policy</li>
          </ul>

          {/* Box 3 */}
          <ul className="space-y-3">
            <h2 className="text-sm sm:text-2xl">FAQ</h2>
            <li className="text-sm text-gray-600">Account</li>
            <li className="text-sm text-gray-600">Manage Deliveries</li>
            <li className="text-sm text-gray-600">Orders</li>
            <li className="text-sm text-gray-600">Payments</li>
          </ul>

          {/* Box 4 */}
          <ul className="space-y-3">
            <h2 className="text-sm sm:text-2xl">Resources</h2>
            <li className="text-sm text-gray-600">Free eBooks</li>
            <li className="text-sm text-gray-600">Development Tutorial</li>
            <li className="text-sm text-gray-600">How to - Blog</li>
            <li className="text-sm text-gray-600">Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-4 p-5 border-t">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex justify-center sm:justify-start items-center gap-8 mt-3 sm:mt-0 px-20">
          <Image
            src="/Visa.png"
            className="w-[50px]"
            width={100}
            height={100}
            alt="Visa"
          />
          <Image
            src="/Mastercard.png"
            className="w-[50px]"
            width={100}
            height={100}
            alt="Mastercard"
          />
          <Image
            src="/Paypal.png"
            className="w-[50px]"
            width={100}
            height={100}
            alt="Paypal"
          />
          <Image
            src="/Pay.png"
            className="w-[50px]"
            width={100}
            height={100}
            alt="Pay"
          />
          <Image
            src="/GPay.png"
            className="w-[50px]"
            width={100}
            height={100}
            alt="GPay"
          />
        </div>
      </div>
    </main>
  );
}
