import { MdOutlineEmail } from "react-icons/md";

export default function Information() {
  return (
    <main className="w-full flex justify-center items-center mt-16 max-w-screen-2xl mx-auto">
      <div className="w-[80%] h-full sm:h-[160px] bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px]">
        <h1 className="text-2xl sm:text-5xl font-extrabold">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="space-y-3">
          <div className="flex justify-start items-center sm:w-[330px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
            <MdOutlineEmail className="text-xl ml-2 text-gray-500" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full h-full ml-2 outline-none rounded-[62px] bg-[#F0F0F0]"
            />
          </div>
          <div className="flex justify-center items-center sm:w-[330px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
            <p className="text-black font-bold">Subscribe to Newsletter</p>
          </div>
        </div>
      </div>
    </main>
  );
}
