import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

type Props = {}

export const Home = (props: Props) => {
  return (
    <div id='home' className='bg-[#23304c] w-full max-w-screen h-fit min-h-screen flex justify-evenly items-center'>
        
       
      <div className='z-10 flex flex-col items-center justify-center ml-8 text-white'>
         {/* <img className='z-20 w-12 left-24 top-32 animate-ping' src="assets/logo.png" alt="" /> */}
            <div className=''>
            <p className='text-xl text-teal-600'>Hi my name is</p>
            <h1 className='tracking-wider'>NGABONZIZA NESTOR</h1>
        <h1>I'm a Full stack developer</h1>
            <p>Website and Mobile App Developer</p>
            </div>
        <div className='flex -ml-8 gap-x-8'>
          <Link className='flex items-center font-normal bg-transparent border-2 border-white rounded-none btn group' to="works" smooth={true} duration={500}>
          View My Works <span className='duration-300 group-hover:rotate-90'><HiArrowNarrowRight className='ml-3' /></span> 
           </Link>
        <Link className='btn' to="contact" smooth={true} duration={500}>
          Hire Me
        </Link>
            </div>
        
        </div>
        
        <div className='items-center justify-center hidden lg:flex'>
         <img className='object-cover w-64 h-64 border-4 border-white rounded-full custom-shadow transform -rotate-2' src="assets/profile-3 (2).jpg" alt="" />
       {/*  <-- inner --> */}
        <div className='absolute flex items-center justify-between border border-gray-500 rounded-full hw-inner animate-spin-slow'>
          <div className='w-10 h-10 p-1 transform -translate-x-5 bg-black rounded-full custom-shadow anim-8s'>
            <img className='object-center w-10 h-10 overflow-hidden animate-rotate-img anim-8s' src="assets/nodejs.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-5 translate-y-[8rem] anim-8s'>
            <img className='object-cover w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/nextjs.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform translate-x-[4.5rem] -translate-y-[12rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/nestjs.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-[7.3rem] -translate-y-[7.5rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/react.png" alt="" />
          </div>  
          <div className='w-10 h-10 p-1 transform translate-x-[10.5rem] bg-black rounded-full custom-shadow anim-8s'>
            <img className='object-center w-10 h-10 overflow-hidden animate-rotate-img anim-8s' src="assets/nodejs.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform translate-x-[4.5rem] translate-y-[8rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/ts-logo-128.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-[7.5rem] translate-y-[12rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/graphql.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-[1.8rem] -translate-y-[7.8rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/react.png" alt="" />
          </div>  
 </div>
        <div className='absolute flex items-center justify-between border border-gray-500 rounded-full hw-outer animate-spin-slow'>
          <div className='w-10 h-10 transform -translate-x-5 bg-white rounded-full custom-shadow'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/tailwindcss.svg" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-5 translate-y-[11.3rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/Java_logo_PNG9.png" alt="" />
          </div>  
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-[5.5rem] -translate-y-[11rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/Docker_logo_PNG15.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform translate-x-[14.5rem] translate-y-[10rem] anim-60s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/python.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-[2.2rem] -translate-y-[15.5rem]'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/css.png" alt="" />
          </div>
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform -translate-x-[6.2rem] translate-y-[16rem] anim-8s'>
            <img className='object-center w-10 h-10 overflow-hidden rounded-full animate-rotate-img anim-8s' src="assets/mongodb.png" alt="" />
          </div>  
          <div className='bg-white rounded-full custom-shadow h-10 w-10 transform translate-x-8 -translate-y-[10rem] anim-8s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/postgresql.png" alt="" />
          </div>
          <div className='w-10 h-10 transform translate-x-4 bg-white rounded-full custom-shadow anim-60s'>
            <img className='object-center w-10 h-10 rounded-full animate-rotate-img anim-8s' src="assets/rest-api.png" alt="" />
          </div>
 </div> 
        </div>
      </div>
  )
}