import Image from "next/image"
export function DressStyle (){
    return(
        <div className="w-full h-full sm:h-[500px] bg-[#F0F0F0] flex-col flex justify-center items-center pt-10 max-w-screen-2xl mx-auto">
            <div className="mt-10">
                <h1 className="text-3xl mt-8 sm:mt-0 font-extrabold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
            </div>
            <div className="w-[90%] h-full sm:h-[600px] flex flex-wrap justify-center items-center mt-10">
                <div className="w-[400px] h-[200px] m-1 relative">
                    <Image src={"/image12.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dresstyle"></Image>
                    <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
                </div>
                <div className="w-[600px] h-[200px] m-1 relative">
                    <Image src={"/image13.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dresstyle"></Image>
                    <span className="absolute top-10 left-5 font-bold text-xl">Formal</span>
                </div>
                <div className="w-[600px] h-[200px] m-1 relative">
                    <Image src={"/image14.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dresstyle"></Image>
                    <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
                </div>
                <div className="w-[400px] h-[200px] m-1 relative">
                    <Image src={"/image15.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="dresstyle"></Image>
                    <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
                </div>
            </div>
        </div>
    )
}


