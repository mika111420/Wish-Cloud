import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';


function Welcome() {

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <div>
        <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full text-white max-h-[500px] flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6cl lg:7xl font-bold'>Dream Big. Create Wishlists. Make Memories.</h1>
          </div>
          <img className='w-full max-h-[400px] object-cover' src="./assets/cloud-welcome.jpg" />
        </div>
        </div>
        <div className='flex justify-center items-center'>
          <button className='border-blue-500 border-solid border rounded-xl px-10 py-4 my-2 flex items-center font-bold hover:bg-blue-200 hover:border-blue-200' onClick={navigateToSignup}>Start Wishing!</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
