import { kmsales, paymentblacklogo } from "../assests"

import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"

import {MdLocationOn} from "react-icons/md";

import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            {/* Logicon start here */}
        
            
            <div className="flex flex-col gap-4">
             <img className='w-32 mb-30' src={kmsales} alt="KM sales logo" />
             <p className='text-white text-sm tracking-wide'>@Kmsale.com</p>
             <img className="w-50" src={paymentblacklogo} alt="the payment logo for various options"/>

             <div className=" flex gap-5 text-lg text-gray-400">
              <FaFacebook className="hover:text-white duration-200 cursor-pointer"/>
              <FaTwitter className="hover:text-white duration-200 cursor-pointer"/>
              <FaInstagram className="hover:text-white duration-200 cursor-pointer"/>
              <FaYoutube className="hover:text-white duration-200 cursor-pointer"/>
             </div>
             </div>    
              {/* Logicon here */}

              {/* locateus start here */}
                <div className="pl-20">
                  <h2 className="text-2xl font-semibold text-white mb-5 ">LOCATE US</h2>
                    <div className="text-base flex flex-col gap-2">

                      <p>Gaborone Main Mall,Mebala Centre Unit 14</p>
                      <p>Phone number: +267 74 233 651</p>
                      <p>E-mail: motswagole@yahoo.com</p>

                    </div>
                </div>
              {/* Locateus end here */}

              {/* profile start here */}

              <div className="pl-20">

                <h2 className="text-2xl font-semibold text-white mb-5 ">PROFILE</h2>

                  <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                    <span>
                      <BsPersonFill/>
                    </span>
                    My account

                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                    <span className="text-lg">
                      <BsPaypal/>
                    </span>
                    Checkout
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                    <span>
                      <FaHome/>
                    </span>
                    Order Tracking
                    </p>

                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                    <span>
                      <MdLocationOn/>
                    </span>
                    Help & Support
                    </p>


              </div>  
              {/* profile end here */}

              {/* subscribe start here */}

                <div className="flex flex-col justify-center pl-10">
                  <input className="bg-transparent border px-4 py-2 text-sm"
                  placeholder="e-mail"
                  type="text" />
                  <button className="text-sm border text-white border-t-0 hover:bg-gray-900
                   active:bg-white active:text-black">
                    Subscribe
                  </button>
                </div>

              {/* subscribe end here */}
    </div>
    </div>
  );
};

export default Footer
