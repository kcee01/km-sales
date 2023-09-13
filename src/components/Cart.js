import React, { useEffect, useState } from 'react'

import CartItem from "./CartItem";

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
const Cart = () => {

  const productData = useSelector((state) => state.km.productData);
   

  const [totalAmount, settotalAmount] = useState("");

  useEffect(()=> {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    settotalAmount(price.toFixed(2));
  },[productData]);
  return (

    <div>
      
    <div className='max-w-screen-xl mx-auto py-20 flex'> 
       <CartItem/>

       <div className='w-1/3 bg-gray-50 py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Totals</h2>
              <p className='flex items-center gap-4 text-base'>Subtotal{" "}
                <span className='font-titleFont font-bold text-lg'>
                  ${totalAmount}
                </span>
              </p>

                <p>
                  Delivery{" "}
                  <span className='font-titleFont text-sm pl-3'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, voluptate. Quae, beatae quis? Sit ipsam dolores sed exercitationem, eius cum autem voluptatibus iusto et nisi! Repellat adipisci laborum quasi atque?
                  </span>
                </p>
          </div>

            <p className='font-titleFont font-semibold flex justify-between nt-6'>
              Total <span className='text-xl font-bold'>${totalAmount}</span>
            </p>

            <Link to="/Login">
                <button className='text-base bg-black text-white w-full py-3 nt-6 hover:bg-gray-800 duration-300'>
                   proceed to checkout
                </button>
            </Link>    
       </div>
    </div>
  </div>
  )
}

export default Cart
