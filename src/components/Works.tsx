import React from 'react'
import WorkCard from './WorkCard'

type Props = {
  
}

const Works = (props: Props) => {
  return (
    <div id="works" className='w-full h-fit min-h-screen bg-[#375074] text-gray-200 flex justify-center items-center p-4'>
      <div className='w-full h-fit max-w-[1000px] flex flex-col items-center justify-center mx-auto'>
        <h1 className='border-b-4 border-teal-600 pt-16'>Work done before</h1>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8 overflow-scroll'>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
        </div>

      </div>
          
    </div>
  )
}

export default Works