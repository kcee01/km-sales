import React, { useState } from "react"

import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";
const Banner = () => {

  const[currentSlide, setCurrentSlide]= useState(0)
  const data = [

  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/327178013_670896714817702_8909315999355674733_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeGHiMvHOtDvaumFzKPnbuOvn5TRoH2Jay2flNGgfYlrLZxsd5GyAH-SjCSv6T97Y_qt9PVLzyLYZiytIiaoMltk&_nc_ohc=IGVB22lgfusAX__BjsB&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfAx86wrexVtqXAAQ4CH0NBA2f6LPXGwdrZDyLRHkGoEAQ&oe=6521915C", 
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/386250528_708137418026190_8640959362428766610_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGwisaNWRNLyXBibcA-vGhlYt6AJHWKXRpi3oAkdYpdGpO9ErEwOs-TkmbJOjwV92myCJ5s7zjx_eZLQNck3Iyp&_nc_ohc=SIXeDQKtTwAAX_q4ql5&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBEUpsvwELEsa84153Tu1EPd50JNtVqANOfDB9hIBzMbg&oe=6522C0D4",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/385263185_707870998052832_4684877131957778259_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeETRydgKtjQEcy1vPW-el-RjWJahiUa_-qNYlqGJRr_6oCrVq3V05f8gQ8cg5-t6UwLT57MCcaL4KvukJcV5uzz&_nc_ohc=dL0xhMcDpJMAX_vpLUD&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfAh2I3SUT8SyayWchihrcy1ow2s91rB4g7Z-jFqgLLUQA&oe=65232F92",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/384472378_707186994787899_7016071501438034761_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeH8U4bLFFFxW5O2CWuJUCHpkljmVOXFoOqSWOZU5cWg6iCMlDAz1Fp2HFTHGrR5iZvFDdXmQqRWbAnHQrqdOW0s&_nc_ohc=WxzJFi58l1AAX8EEbbh&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfAnQLCJUwIeLitXTHZwbtjydSD1LhrCEW19PQUV115LIw&oe=6522CC42",

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
