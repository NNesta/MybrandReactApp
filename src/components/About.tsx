import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='about' className='w-full h-screen min-h-screen bg-[#375074] text-gray-300 flex justify-center items-center p-4'>
      <div className='flex flex-col gap-y-8 items-center w-full h-full justify-center'>
        <p className='text-4xl font-bold inline border-b-4 border-teal-600 pt-16'>About me</p>
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          
        </div>
        <div></div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className="sm:text-right text-4xl font-bold">
          <p>Hi I am Nestor Ngabonziza a fullstack web developer</p>
        </div>
        <p className='first-letter:font-bold first-letter:text-6xl first-line:uppercase'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, deleniti quae voluptatibus, eum illum nostrum magni fugiat quaerat maxime recusandae cum deserunt, incidunt beatae esse neque nam quia architecto rerum.
          </p>
          <button className='btn'>
            View my CV
          </button>
        
      </div>
      </div>
      
          
    </div>
  )
}  

export default About