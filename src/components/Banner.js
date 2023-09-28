import React, { useState } from "react"

import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";
const Banner = () => {

  const[currentSlide, setCurrentSlide]= useState(0)
  const data = [

  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/327178013_670896714817702_8909315999355674733_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeGHiMvHOtDvaumFzKPnbuOvn5TRoH2Jay2flNGgfYlrLZxsd5GyAH-SjCSv6T97Y_qt9PVLzyLYZiytIiaoMltk&_nc_ohc=_FYsMcbPUSwAX926L5Q&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfC58E1Tuo5h-s28gdLjh6HlhocOSZajjbEw8c4UhaZojg&oe=6519A85C", 
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/382500599_704731548366777_3665181939409328176_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGdZlC5puZ94MRMCZFmRYiK_bpBCJ2lREz9ukEInaVETA3Gk2ec_i0vm_2oBuFC1qhvFQyo8V6m9W4HrpUmoZhs&_nc_ohc=30c-iWNSs8wAX9-CiKs&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBr1EQ2CjK_lsfNoxr9A64EU4-K4EHiaoOhFyDGvCgqTw&oe=651AA8F4",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/381387244_703585838481348_31383554627108234_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGTn17pt6-PJBQEYx4whdZQ-_gQfbQRtdP7-BB9tBG1037a0Yf0egQP83znqfLWJZvPo-7mfuXy2YgcMUSZfRV2&_nc_ohc=OXEijriSyMIAX9URt2d&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfCfJLJb1KQPOUat3MQCUuDlvkXIrv2DQfG6q--c-DkWUQ&oe=651A63C7",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/367427358_681921663981099_3850291072506975902_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFm9Xa5t5YSe8swB0vtC2YY6BgJ5moo2wPoGAnmaijbA4Z8nAYHRiVDGEtMrbJMwmuymjDFgwTi4QCTSs5yvRmi&_nc_ohc=3U-s43IEhFwAX9whWJS&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBwLI5jD-FoG_lTT6X72S2kpOf8q-mfWQ8lXrJl2bRRww&oe=6519457C",

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
