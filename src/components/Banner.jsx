import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="banner w-full flex justify-center items-center h-64 bg-green-400 flex-col gap-4 mb-6">
        <h1 className='text-white font-bold text-4xl'>FREE SHIPPING 🚀 </h1>
        <h2 className='text-white font-semibold text-xl'> ON ORDERS OVER $50 - USE COUPON CODE OVER50</h2>
        <div className="buttons flex gap-4">
            <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Shop Women</button>
            <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Shop Men</button>
            <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Shop Sales</button>
        </div>
    </div>
    </>
  )
}

export default Banner