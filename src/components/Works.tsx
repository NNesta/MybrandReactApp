import React from 'react'
import WorkCard from './WorkCard'

type Props = {
  
}

const Works = (props: Props) => {
  return (
    <div id="works" className='w-full h-fit min-h-screen bg-[#375074] text-gray-200 flex justify-center items-center p-4'>
      <div className='w-full h-fit max-w-[1000px] flex flex-col items-center justify-center mx-auto'>
        <h1 className='pt-16 border-b-4 border-teal-600'>Work done before</h1>
        <div className='grid w-full gap-4 py-8 overflow-scroll text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         <WorkCard title='Barefoot nomad' image='/assets/barefoot.png' url='https://cod-fe.vercel.app/' github='https://github.com/atlp-rwanda/cod-fe'/>
         <WorkCard title='Flashcard' image='/assets/flashcard.png' url='https://flashcard-project-fe.vercel.app/' github='https://github.com/NNesta/flashcard-project-fe'/>
         <WorkCard title='My brand project' image='/assets/brand1.png' url='https://inspiring-ride-2a0be8.netlify.app/' github='https://github.com/NNesta/Nestor-brand'/>
         <WorkCard title='My brand project' image='/assets/portifolio.png' url='https://portifolio-nnesta.vercel.app/' github='https://github.com/NNesta/MybrandReactApp'/>
         <WorkCard title='FreshFood Mobile app' image='/assets/freshfood.png' url='https://expo.dev/@ngabonziza/FreshFoodRestaurant?serviceType=classic&distribution=expo-go' github='https://github.com/NNesta/FreshFoodRestaurant'/>
        </div>

      </div>
          
    </div>
  )
}

export default Works