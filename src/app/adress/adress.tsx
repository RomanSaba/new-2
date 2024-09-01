import React from 'react'
import Image from "next/image";
const page = () => {
    return(
        <div><div className="flex p-6 font-serif">
        <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full ">
       
          <Image src="/map.jpg" alt="" className=" w-24 h-30 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"   width="384" height="512"></Image>
           
        </div>
        <form className="flex-auto pl-6">
          <div className="relative flex flex-wrap items-baseline  before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-black">
              Address
            </h1>
           
           
          </div>
         
          
          <p className="text-xl">
            Backside Mianwali Hotel adda khanpur street#1 house no 4 Rahim Yar Khan
                  
          </p>
        </form>
      </div></div>
    )

}
export default page
