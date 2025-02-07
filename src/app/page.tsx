import Fonts from "@/components/fonts";
import Hero from "@/components/Hero";
import Products from "./products/page";
import Topsell from "./products/sell";
import { DressStyle } from "@/components/dresstyle";
import CustomerCarouse from "@/components/carousel";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Fonts />
      <Products />
      <Topsell />
      <DressStyle />
      <CustomerCarouse />
    </div>
  );
}
