import { AccordionDemo } from "@/components/accordion";
import { CheckboxDemo } from "@/components/checkbox";
import CasualShirts from "@/components/shirts";
import Size from "@/components/size";
import { SliderDemo } from "@/components/slider";
import Style from "@/components/style";

export default function Casual(){
    return(
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-5">
            <div className="h-full w-full md:w-[295px] md:h-[1200px] border rounded-[16px]">
                <AccordionDemo />
                <SliderDemo />
                <CheckboxDemo />
                <Size />
                <Style />
            </div>
            <div className="w-full md:w-[900px] h-full sm:h-[1200px]">
                <CasualShirts />
            </div>
        </main>
    )
}

