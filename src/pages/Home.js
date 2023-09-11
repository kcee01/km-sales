import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom";

import Banner from "../components/Banner"

import Product from '../components/Product'

const Home = () => {

  const [Products, setProducts] = useState([]);
    const data = useLoaderData();
    
    useEffect(()=>{
      setProducts(data.data)
    },[data]);

  return (
    <div>
   <Banner/>
   <Product Products = {Products}/>
   
    </div>
  )
}

export default Home
