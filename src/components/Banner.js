import React, { useState } from "react"

import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";
const Banner = () => {

  const[currentSlide, setCurrentSlide]= useState(0)
  const data = [

  "https://scontent.fgbe5-1.fna.fbcdn.net/v/t39.30808-6/555385456_1253780490127980_7529016883310133360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2aVwc6dTV9y1UNwmq6zGvJQcNiuKxVVMlBw2K4rFVU4ASJGknzhc-Ub1D18mXkovrpMLD0-j5IHccirQjmdrI&_nc_ohc=VBjA3k6TIWsQ7kNvwHAwy0k&_nc_oc=AdlIL5ZQgnWxKIMeWGX-hCJL6mCqnuWFMzDdQvQMeG_Nyub2VMg7GWHL48PPorFM31I&_nc_zt=23&_nc_ht=scontent.fgbe5-1.fna&_nc_gid=eJj6xjwgsgmHAi1EupMoQQ&oh=00_AffTCW5Dyy5bo99kl8RwEsbYfmcR4GbDS3MUvMh_1gyQ8g&oe=68F4DE62", 
  "https://scontent.fgbe5-1.fna.fbcdn.net/v/t39.30808-6/489960350_1114233567416007_2658964981347821858_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGF_A4CtVttANamoWOVB3nqTE3xvyUbBilMTfG_JRsGKeSGgSygQcng41XIYT5rZRwy851Znbw5Ha92I2ar5602&_nc_ohc=Q_aRIQeZim0Q7kNvwFFpr6b&_nc_oc=AdktFwXXS2CQxKtrwoidKUqznzBWU6UgL1UChoMl90CK-B1usCzZhhhvi1klXKghdfU&_nc_zt=23&_nc_ht=scontent.fgbe5-1.fna&_nc_gid=z4MIuS7UjCy4aiN02FK-VQ&oh=00_Afe9k8MdYgzw_Id34_POVwqB7O5frFzAjuNGzQy5yJAi3A&oe=68F4DE12",
  "https://scontent.fgbe5-1.fna.fbcdn.net/v/t39.30808-6/490060773_1114234154082615_1039213702637001084_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH8pyPfQuztQBNOkrJhZ_44QYLoAz-VyDNBgugDP5XIM2tGDVFJTNWXC9jgQJGH5KAgVw8sOHQZYrmftiUVj12C&_nc_ohc=uJ4eQsXcPPAQ7kNvwHmDoTE&_nc_oc=Admv6Qmq_BFmaZmhhqEXrESJlNs4xLJRnasapOQiyQ632nUD8CgGEs5Pm8Y-JvJTgSw&_nc_zt=23&_nc_ht=scontent.fgbe5-1.fna&_nc_gid=8mkwjVt3gGedQgHbhj5SEg&oh=00_AffBNSvf9TMWYRmVlQ1tod5a6Nfxh5Y4igs8zv1xcw2QGg&oe=68F4C94C",
  "https://scontent.fgbe4-1.fna.fbcdn.net/v/t39.30808-6/468363400_969356295237633_6090392475183059069_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq9RkGmLqWM7AyGDA8B91Ggr7mK5EvRUWCvuYrkS9FRV_ltUY_EepmKuRTMmxsTjAS6CaDTouaxqbJ6hyBHArr&_nc_ohc=v0PyjM3MnhsQ7kNvgEzJt-K&_nc_zt=23&_nc_ht=scontent.fgbe4-1.fna&_nc_gid=A5-doX-Bf6S395WJfQ8pbg4&oh=00_AYBL2WdljbSUL0T8BTYZ3hzRY5zPYLGOsq8hAzIzFq8-1Q&oe=6772F18B",
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
