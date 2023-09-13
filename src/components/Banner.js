import React, { useState } from "react"

import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";
const Banner = () => {

  const[currentSlide, setCurrentSlide]= useState(0)
  const data = [

  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/327178013_670896714817702_8909315999355674733_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeGHiMvHOtDvaumFzKPnbuOvn5TRoH2Jay2flNGgfYlrLZxsd5GyAH-SjCSv6T97Y_qt9PVLzyLYZiytIiaoMltk&_nc_ohc=JMHpsfyqMU0AX_TkTIG&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfD0GZHbdoymRrSUCHE_cWwUTGuyN1DUtn-4_mC_gt3zkA&oe=6503E79C", 
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/364751335_672837111556221_8067783962716218248_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHWS5sHXyIPSu7w8O38Q-rBWFwZpIeExJFYXBmkh4TEkXMhM_DPAJhGFNjHOYbSg35Qr6DFDWb1R5EbSqv9iRDT&_nc_ohc=eTbk7nbd8vkAX_a59We&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBJA7Ni3BPTbHmQ6r4uXP2dTzo3qpWkHJC1duxlZIhBTg&oe=65048B89",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/375190072_692021862971079_8559857128482999390_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeH-Q_PIOdpGXIIvJrn88qOcelZZGMLQQFZ6VlkYwtBAVtA418Z_-8xjSsqlU7m-1nT_n6kASpwn3uC8sEdNhrR7&_nc_ohc=xD63ynWQl1AAX-LNhZO&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfDmlxXUFjY76_CRoGC-R3AGsHImViiRBP-ekD2rLeP1OA&oe=6502F919",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/367427358_681921663981099_3850291072506975902_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFm9Xa5t5YSe8swB0vtC2YY6BgJ5moo2wPoGAnmaijbA4Z8nAYHRiVDGEtMrbJMwmuymjDFgwTi4QCTSs5yvRmi&_nc_ohc=Jbz1JDFaos8AX-ekOBw&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBSfyfYzTbKyoXrTLeKLOLXuAwEWD1GBAJqOiUdcrmbyw&oe=650384BC",

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
