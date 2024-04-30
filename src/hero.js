import React from 'react'
import Navbar from './navbar'

export default function Hero() {
  return (
    <div className='w-full min-h-screen bg-main_bg bg-no-repeat bg-cover'>
        <div className='absolute min-h-full inset-0 bg-black bg-opacity-50 '>
            <Navbar />

            <div className='pl-10 min-h-full flex flex-col justify-center sm:pl-20'>
                <h1 className="text-4xl text-orange-500 font-semibold sm:text-7xl">
                    Kodiya Garments
                </h1>
                <text className='text-lg text-white pt-4 sm:text-3xl'>
                    Quality Wholesale Clothing Manufacturing
                </text>
            </div>
        </div>
    </div>
  )
}