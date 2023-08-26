"use client"
import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import{add} from "../store/CartSlice"
import { add } from '@/Store/CartSlice';
import { getProduct } from '@/Store/ProductSlice';
// import { getProduct } from '../store/ProductSlice';
const Product = () => {
  const dispatch = useDispatch()
  const{data:products}= useSelector(state=>state.products)
  // const[product,setProduct]=useState([])
useEffect(()=>{
dispatch(getProduct())
// fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>setProduct(data))
},[])
// console.log(product)
const addToCart =(prod)=>{
dispatch(add(prod))
}
  return (
    <>
<div className="flex flex-wrap gap-3 justify-center">

    {
      products.map((prod)=>{
        return(
          <div key={prod.id} className="flex  mb-4">
           <div className=" card w-96  shadow-xl">
  <figure><img className='w-1/3' src={prod.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{prod.title}</h2>
    <p className='gr'>{prod.description}</p>
    <p className='font-bold'>${prod.price}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary" onClick={()=>addToCart(prod)}>Add to Cart</button>
    </div>
  </div>
</div>
          </div>
    )
  })
}
</div>
  </>
  )
}

export default Product



{/* <div className="cont flex flex-row-reverse justify-center ">
<TotalItems/>
<div className="totalcart">


{
cart.map((prod)=>{ 
  const{id,title,image,price}=prod
  return(
    <div className="container flex justify-center p-4">
    <div key={id} className="card card-compact  bg-base-100  shadow-xl flex flex-row p-4" >
      <figure><img className='w-32' src={image} alt="Shoes" /></figure>
    <div className="card-body flex flex-row gap-4 items-center">
    <h4 className="card-title">{title}</h4>
    <p className='gr grow-0'> ${price}</p>
    <label htmlFor="quantity">Quantity</label>
<select name="quantity" id="quantity"  >
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
    </div>
    <div className="card-actions ">
    <Trash size={32}  onClick={()=>{
      dispatch({
        type:"REMOVE_FROM_CART",
        playload:prod,
      })
    }}/>
    </div>
   </div>
    </div>
    
    
    )
  }
  
  )}
  </div>
  </div> */}