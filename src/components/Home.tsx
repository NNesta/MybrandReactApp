import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

type Props = {}

export const Home = (props: Props) => {
  return (
    <div id='home' className='bg-[#23304c] w-full h-fit min-h-screen flex justify-evenly items-center'>
        
       
      <div className='flex flex-col justify-center items-center z-10 text-white '>
         <img className='w-6 left-24 top-32 z-20 animate-ping' src="logo192.png" alt="" />
            <div className=''>
            <p className='text-teal-600 text-xl'>Hi my name is</p>
            <h1 className='tracking-wider'>NGABONZIZA NESTOR</h1>
        <h1>I'm a Full stack developer</h1>
            <p>I am a full stack web and mobile app developer</p>
            </div>
        <div className='flex gap-x-8 -ml-24'>
          <Link className='btn group flex items-center border-2 border-white bg-transparent rounded-none font-normal' to="works" smooth={true} duration={500}>
          View My work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span> 
           </Link>
        <Link className='btn' to="contact" smooth={true} duration={500}>
          Hire Me
        </Link>
            </div>
        
        </div>
        
        <div className='hidden md:flex justify-center items-center'>
         <img className='w-64 h-64 rounded-full border-4 border-white custom-shadow' src="/logo192.png" alt="" />
       {/*  <-- inner --> */}
        <div className='hw-inner flex justify-between items-center absolute border border-gray-500 rounded-full animate-spin-slow'>
          <div className='bg-black p-1 rounded-full custom-shadow h-10 w-10 transform -translate-x-5 anim-8s'>
            <img className='w-10 h-10 object-center animate-rotate-img anim-8s overflow-hidden' src="assets/nodejs-new-pantone-white.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform translate-x-5 translate-y-[11rem] anim-8s'>
            <img className='w-10 h-10 object-center animate-rotate-img anim-8s object-fill overflow-cover rounded-full' src="assets/ts-logo-128.png" alt="" />
          </div>
          <div className='bg-white rounded-full -mx-10  custom-shadow h-10 w-10 transform -translate-x-5 anim-60s'>
            <img className='w-10 h-10 rounded-full object-center animate-rotate-img anim-8s' src="assets/1174949_js_react js_logo_react_react native_icon.png" alt="" />
          </div>
          
 </div>
        <div className='hw-outer flex justify-between items-center absolute border border-gray-500 rounded-full animate-spin-slow'>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-5'>
            <img className='w-10 h-10 rounded-full object-center animate-rotate-img anim-8s' src="assets/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" alt="" />
          </div>
          <div className='bg-white -mx-10 rounded-full custom-shadow h-10 w-10 transform -translate-x-5'>
            <img className='w-10 h-10 rounded-full object-center animate-rotate-img anim-8s' src="assets/Java_logo_PNG9.png" alt="" />
          </div>
          
 </div>
        
        </div>
      </div>
  )
}