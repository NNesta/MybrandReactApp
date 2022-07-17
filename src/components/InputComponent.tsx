import React from 'react'

type Props = {
  type: string
  name: string
  setData: (input: string) => void
  data: string
    
}

const InputComponent = (props: Props) => {
  return (
    <div className='relative peer mx-auto'>
      <input onChange={(e) => props.setData(e.target.value)} type={props.type} required className='outline-none peer border-2 border-white bg-[#0a192f] text-white h-10 sm: w-[400px] md:w-[600px] rounded-md px-2' name={props.name} id={props.name} />
      {props.data ? <span className='absolute top-[6px] left-2 text-white text-opacity-80 text-lg translate duration-300 input-text' >{ props.name }</span>:<span className='absolute top-[6px] left-2 text-white text-opacity-80 text-lg translate duration-300 peer-focus:input-text' >{ props.name }</span>}
    </div>
  )
}

export default InputComponent;
