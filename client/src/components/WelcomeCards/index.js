import React from 'react'
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const WelcomeCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6'>
      <div className='rounded-xl relative  hover:scale-110 duration-100'>
        <div className='absolute w-full h-full rounded-xl flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl px-2 pt-4'>Fast and cost-free!</p>
          <p className='px-1 py-8'>WishCloud allows you to swiftly create your wishlist at no cost and easier than ever!</p>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'src='./assets/welcomecardcloud.jpg'/>
      </div>

      <div className='rounded-xl relative  hover:scale-110 duration-100'>
        <div className='absolute w-full h-full rounded-xl flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl px-2 pt-4'>Every Special Occasion!</p>
          <p className='px-1 py-8'>Design your wishlist to suit any occasion of your choosing.</p>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'src='./assets/welcomecardcloud.jpg'/>
      </div>

      <div className='rounded-xl relative  hover:scale-110 duration-100'>
        <div className='absolute w-full h-full rounded-xl flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl px-2 pt-4'>Shareable!</p>
          <p className='px-1 py-8'>Share your wish list with family and friends via e-mail, messenger or social media.</p>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'src='./assets/welcomecardcloud.jpg'/>
      </div>

      <div className='rounded-xl relative  hover:scale-110 duration-100'>
        <div className='absolute w-full h-full rounded-xl flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl px-2 pt-4'>Just One Click!</p>
          <p className='px-1 py-8'>With WishCloud, you can add gift items to your wish list with just one click.</p>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'src='./assets/welcomecardcloud.jpg'/>
      </div>
    </div>
    
  )
}

export default WelcomeCards