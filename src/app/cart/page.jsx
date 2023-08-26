"use client"
import Image from 'next/image'
import {useSelector} from "react-redux"
import { remove } from "@/Store/CartSlice"
import { useDispatch } from "react-redux"
import Navbar from "@/components/Navbar"
const Cart = () => {
  const CartProducts = useSelector(state =>state.cart)
 const dispatch =useDispatch()
 const RemoveToCart =(id)=>{
  dispatch(remove(id))

 }

  return (
    <>
    <Navbar/>
<div className="flex flex-wrap  justify-center">

    {
      CartProducts.map((prod)=>{
        return(
          <div key={prod.id} className="container flex justify-center p-4 ">
           <div className=" card card-compact  bg-base-100  shadow-xl flex flex-row p-4">
  <figure><Image className='w-32' width={500} height={500} src={prod.image} alt="Shoes" /></figure>
  <div className="card-body flex flex-row gap-4 items-center">
    <h2 className="card-title">{prod.title}</h2>
    
    <p className='font-bold gr grow-0'>${prod.price}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary" onClick={()=>RemoveToCart(prod.id)}>RemoveCart</button>
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

export default Cart