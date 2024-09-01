import React from 'react'
import Image from "next/image";
const page = () => {
    return(
        <div><div className="flex p-6 font-serif">
        <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full ">
       
          <Image src="/me.jpg" alt="" className=" w-24 h-30 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"   width="384" height="512"></Image>
           
        </div>
        <form className="flex-auto pl-6">
          <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
              ROMAN SABA
            </h1>
           
            <div className="relative uppercase text-violet-500 ml-3">
              Full stack Developer
            </div>
          </div>
         
          <div className="flex space-x-2 mb-4 text-sm font-medium">
            <div className="flex space-x-4">
              
              
            </div>
            
          </div>
          <p className="text-xl">
            Hi, myself Roman Saba.I'm a web Developer also a student of ADP CS.After ADP i'm willing to choose BS Artificial Intelligence
          </p>
        </form>
      </div></div>
    )

}
export default page
