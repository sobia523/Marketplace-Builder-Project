import React from 'react';
import { RxCross2 } from "react-icons/rx";

const Anouncementbar = () => {
  return (
    <main className='bg-[#000] w-full h-[38px] flex justify-center items-center relative max-w-screen-2xl mx-auto'>
      <div className='flex justify-center items-center'>
        <h3 className='text-white text-xs sm:text-sm font-sans'>Sign up and get 20% off to your first order.</h3>
        <button className='text-white ml-3 underline text-xs sm:text-sm font-sans'>Sign Up Now</button>
      </div>
      <RxCross2 className='text-white absolute right-[50px] hidden sm:block' />
    </main>
  );
}

export default Anouncementbar;