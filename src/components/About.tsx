import React from 'react'
import Typed from 'react-typed'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='about' className='w-full max-w-screen h-fit min-h-screen bg-[#375074] text-gray-300 flex justify-center items-center p-4'>
      <div className='flex flex-col gap-y-8 items-center w-full h-full justify-center'>
        <p className='text-4xl font-bold inline border-b-4 border-teal-600 pt-16'>About me</p>
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          
        </div>
        <div></div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className="sm:text-right text-4xl font-bold">
          <p>Hi I am Nestor Ngabonziza a fullstack web developer</p>
        </div>
        <p className='first-letter:font-bold text-lg font-semibold first-letter:text-6xl first-line:uppercase'>
Software developer enthusiast with knowledge and experience in website and mobile app development. Aimed at providing the best quality software product for the community with the best user experience. I am self-motivated, organized, innovative, and creative. 
          </p>
          <p className='text-2xl font-bold'>I can work for both <Typed className='text-teal-600' strings={[" Frontend", " Backend"]} typeSpeed={120} backSpeed={ 120 } loop backDelay={1200}/></p>
          <p className='text-2xl font-bold'>I can work on your <Typed className='text-teal-600' strings={[" Website app", " Mobile app"]} typeSpeed={120} backSpeed={ 120 } loop backDelay={1200}/></p>
          <a href='https://drive.google.com/file/d/10hXblGZXlVyD9RaI5YkIrrY8hkAOs65Y/view?usp=sharing' className='btn mx-auto px-16 md:col-span-2'>
            View my CV
          </a>
        
      </div>
      </div>
      
          
    </div>
  )
}  

export default About