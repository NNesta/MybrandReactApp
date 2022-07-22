import React from 'react'

type Props = {
  name: string
  setData: (input: string) => void
  data: string
}

const TextAreaComponent = (props: Props) => {
  return (
    <div className='relative mx-auto'>
      <textarea onChange={(e) => props.setData(e.target.value)} required rows={7} className='outline-none peer border-2  border-white bg-[#0a192f] text-white rounded-md p-2 w-[275px] sm:w-[500px]' name={props.name} id={props.name} />
      {props.data ? <span className='absolute top-[6px] left-2 text-white text-opacity-80 text-lg translate duration-300 input-text' >{ props.name }</span>:<span className='absolute top-[6px] left-2 text-white text-opacity-80 text-lg translate duration-300 peer-focus:input-text' >{ props.name }</span>}
    </div>
  )
}

export default TextAreaComponent

