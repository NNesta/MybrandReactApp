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
         <WorkCard title='Flashcard' image='/assets/flashcard.png' url='https://flashcard-project-fe.vercel.app/' github='https://github.com/NNesta/flashcard-project-fe'/>
         <WorkCard title='Barefoot nomad' image='/assets/barefoot.png' url='https://cod-fe.vercel.app/' github='https://github.com/atlp-rwanda/cod-fe'/>
         <WorkCard title='My brand project' image='/assets/brand1.png' url='https://inspiring-ride-2a0be8.netlify.app/' github='https://github.com/NNesta/Nestor-brand'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
         <WorkCard title='Job done' image='/logo192.png' url='https://igihe.com' github='http://github.com'/>
        </div>

      </div>
          
    </div>
  )
}

export default Works