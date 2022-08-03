import React from 'react'
import { CardComponent } from '../components/card';

type Props = {}

const Skills = (props: Props) => {
  return (
    <div id='skills' className='w-full max-w-screen h-fit min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
      <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full'>
      <div className='text-center'>
        <p className='pt-16 text-4xl font-bold border-b-4 border-teal-500'>Experience</p>
        </div>
      <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3 lg:grid-cols-4'>
       <CardComponent image="assets/nodejs.png" title='node js' />
       <CardComponent image="assets/ts-logo-128.png" title='typescript' />
       <CardComponent image="assets/react.png" title='React JS' />
       <CardComponent image="assets/react.png" title='react native' />
       <CardComponent image="assets/html.png" title='html' />
       <CardComponent image="assets/css.png" title='css' />
       <CardComponent image="assets/tailwindcss.svg" title='Tailwind css' />
       <CardComponent image="assets/graphql.png" title='Graphql' />
       <CardComponent image="assets/rest-api.png" title='rest api' />
       <CardComponent image="assets/GitHub-Mark-Light-120px-plus.png" title='Github' />
       <CardComponent image="assets/Docker_logo_PNG15.png" title='docker' />
       <CardComponent image="assets/postgresql.png" title='postgresql' />
       <CardComponent image="assets/mongodb.png" title='mongo db' />
       <CardComponent image="assets/python.png" title='python' />
       <CardComponent image="assets/Java_logo_PNG9.png" title='java' />
      </div>
      </div>
    </div>
  )
}

export default Skills