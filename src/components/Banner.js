import React, { useState } from "react"

import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";
const Banner = () => {

  const[currentSlide, setCurrentSlide]= useState(0)
  const data = [

  "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/327178013_670896714817702_8909315999355674733_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGMvGwUxwTz9XfpWxDzb31vn5TRoH2Jay2flNGgfYlrLdTpVVaUZp7TjIRT1VC3FFH3NuA7f8rGK-UXPv6h0z1t&_nc_ohc=bn24MGUTeV4Q7kNvgF3HAwI&_nc_zt=23&_nc_ht=scontent.fgbe4-1.fna&_nc_gid=ALHZPeG23n3WDN82PFS9AR_&oh=00_AYAC-JqbTcqJOqXYIXi9WjbwHNOb5alDMikz29UWhqgz3Q&oe=67730C9C", 
  "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/470874778_987682960071633_3507708772853749164_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEam-ooXdwULtIAo624uWiWTZTBHqtSAERNlMEeq1IARM5I4y8Vl_M_2nZVhSQqRtIltF3xVayjs4HdLgKGBf2k&_nc_ohc=2KUymno1BIgQ7kNvgG5Tzl6&_nc_zt=23&_nc_ht=scontent.fgbe4-1.fna&_nc_gid=A3DA6TMvUdcTAuPAY1c0-uq&oh=00_AYDo6MPwsdxhin4ZvCZnwW4Pv0VQb2vFqK7UIUYj40qPYw&oe=6772EDF5",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/428650710_790315289808402_6477564917636465246_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeG0JoKWRAuNdhy52HBA9aqI0LJFj-6WkvrQskWP7paS-jwehUeGIYkA1a16GVugqqOaJ8H8TIJpcERwH7NO6VN6&_nc_ohc=UDQ7YIjQjGUAX-vdoyP&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfBeoSoW0UoWpkiechd8i_wpx84p86xhzQ8dgDGA5QnlpA&oe=65DD3DFA",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/414401970_757536353086296_2069175166069504724_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHw_O0_y2gsb5OBNXB8m3TqcOlnUD4ShIZw6WdQPhKEhh9ol0tnVscY1wZZ4q7T-LQdrWd6sRS3UsVQRXFf6sBP&_nc_ohc=w-UBXkk2MoQAX9-AL_p&_nc_oc=AQlOt7l_GpbRyMlQFAikjnqqOV1UYjbilLmLV03sgsM3KOgBWLk0K9qxLgFOyoP1X6I&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfDpPCJLTVGaZ_-2_wf_adD9QFI1uLGwQteYm8a_MjEr6Q&oe=65AE08E8",
  "https://scontent.fgbe3-1.fna.fbcdn.net/v/t39.30808-6/425619008_780502967456301_5904748908004899264_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFIIx794S4tJeWzIxxDj16b0YvRurubKYPRi9G6u5spg0nWti_eYvCUoF3V3iPD3_lfi6QX8rtQASgSzBRpG4dv&_nc_ohc=EOQZynxr50wAX86h_3M&_nc_oc=AQlHeEpLb7BOe_1oFBw3y_DcKKe6zZrX-d4vcqu_I1cPUrtWPs_50vCmc1RIlrZDnQQ&_nc_zt=23&_nc_ht=scontent.fgbe3-1.fna&oh=00_AfDyavOh1uyyHxLUFqW1RSRV7_PVrUIoKkxJSf-mZwKe9A&oe=65DCCEA3"
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
