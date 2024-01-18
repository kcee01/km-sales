import React, { useState } from "react"

import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";
const Banner = () => {

  const[currentSlide, setCurrentSlide]= useState(0)
  const data = [

  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/419748806_768670385306226_321327977911106572_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE0-TZZTlxxNZnHOoZg1GCOQZRs4HzKVfVBlGzgfMpV9boprXUlJsqM5qMMzx3SN5Q95ItaJveH8qE8N76IZhWQ&_nc_ohc=f0hTIHHwJHEAX8N7hyF&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfDydax46detnRTP7jgEEfZISyy90-RMVFGFZEXsiCHTHw&oe=65AED8A1", 
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/415219386_758901666283098_3949093223842346827_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF6qqXL1k5X5ap13BGqqIN0s3uXspuwnhyze5eym7CeHAHIv3s_aM7HtkQwaoCnCSJEAO8ejTkEMbDixpu1h_AX&_nc_ohc=ZW1qUWRo1n4AX_GB10S&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBw9A-6HrksHm8Xct9PBGPqqw3yP_fjnthfT0FWYVuYHg&oe=65ADA01B",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/415383220_758856352954296_1688968789747087405_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHococMa4NTQiZPtDU2e_B945t-xPbgoDvjm37E9uCgO_gqlrKWaYWVTHzizntYRAY7Er032zVCOsAb71PcOJqP&_nc_ohc=9tXesn4UDb0AX_-y5aI&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBHCgYPd3dcXWs4g5lPjW5R_t7ATKmfUjAkixnQ6avzDw&oe=65AE32FB",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/414401970_757536353086296_2069175166069504724_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHw_O0_y2gsb5OBNXB8m3TqcOlnUD4ShIZw6WdQPhKEhh9ol0tnVscY1wZZ4q7T-LQdrWd6sRS3UsVQRXFf6sBP&_nc_ohc=w-UBXkk2MoQAX9-AL_p&_nc_oc=AQlOt7l_GpbRyMlQFAikjnqqOV1UYjbilLmLV03sgsM3KOgBWLk0K9qxLgFOyoP1X6I&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfDpPCJLTVGaZ_-2_wf_adD9QFI1uLGwQteYm8a_MjEr6Q&oe=65AE08E8",

  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  

  
    return (
    <div className="w-screen h-screen overflow-x-hidden">
       <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-screen flex transition-transform duration-1000">
          <img 
          className="w-screen h-full  object-fit" 
          src={data[1]} 
          alt="new balance blue shoes from km sales shop"
        />

          <img 
          className="w-screen h-full object-cover" 
          src={data[2]} 
          alt="front of the km sales shop" 
        />

          <img 
          className="w-screen h-full object-cover" 
          src={data[3]} 
          alt="front of the km sales shop" 
        />

          <img 
          className="w-screen h-full object-cover" 
          src={data[0]} 
          alt="front of the km sales shop" 
          loading="priority"/> 
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-40 bottom-44">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer
           hover:text-white active:bg-gray-900 duration-300">
            <AiFillCaretLeft/>
          </div>

          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer
           hover:text-white active:bg-gray-900 duration-300">
          <AiFillCaretRight/>
          </div>
        </div>
      </div> 
      
    </div>
  )
}

export default Banner
