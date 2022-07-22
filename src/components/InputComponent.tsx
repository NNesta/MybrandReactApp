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
      <input onChange={(e) => props.setData(e.target.value)} type={props.type} required className='outline-none peer border-2 border-white bg-[#0a192f] text-white h-10 rounded-md p-2 w-[275px] sm:w-[500px]' name={props.name} id={props.name} />
      {props.data ? <span className='absolute top-[3px] left-2 px-2 text-white text-opacity-80 text-lg translate duration-300 input-text peer' >{ props.name }</span>:<span className='absolute top-[3px] left-2 px-2 text-white text-opacity-80 text-lg translate duration-300 peer-focus:input-text' >{ props.name }</span>}
    </div>
  )
}

export default InputComponent;
