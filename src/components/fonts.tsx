import { Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat } from "next/font/google";

const Playfair = Playfair_Display({subsets:["latin"]});
const Cinze = Cinzel({subsets:["latin"]});
const Bodoni = Bodoni_Moda({subsets:["latin"]});
const Prat = Prata({subsets:["latin"],weight:"400"});
const  Montserra = Montserrat({subsets:["latin"]});

export default function Fonts(){
    return(
        <div className="bg-black text-white w-full h-[122px] max-w-screen-2xl mx-auto flex justify-center space-x-2 md:justify-between items-center text-2xl md:text-4xl absolute px-6 flex-wrap">
            <h1 className={`${Playfair.className}`}>VERCASE</h1>
            <h1 className={`${Cinze.className}`}>ZARA</h1>
            <h1 className={`${Bodoni.className}`}>GUCCI</h1>
            <h1 className={`${Prat.className}`}>PARADA</h1>
            <h1 className={`${Montserra.className}`}>Calvin Klein</h1>
        </div>
    );
}
