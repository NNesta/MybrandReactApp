import React, {useRef }from 'react'

type Props = {
  name: string
  setData: (input: string) => void
  data: string
}

const TextAreaComponent = (props: Props) => {
  const userInput = useRef<any>(null);
  const clickSpanHandler = () => {
    userInput.current.focus();
  }
  return (
    <div className='relative mx-auto'>
      <textarea onChange={(e) => props.setData(e.target.value)} ref={userInput} required rows={7} className='outline-none peer border-2  border-white bg-[#0a192f] text-white rounded-md p-2 w-[275px] sm:w-[500px]' name={props.name} id={props.name} />
      {props.data ? <span onClick={clickSpanHandler} className='absolute top-[6px] left-1 text-white text-opacity-80 text-lg translate bg-[#0a192f] px-2 duration-300 input-text' >{ props.name }</span>:<span onClick={clickSpanHandler} className='absolute top-[6px] left-2 bg-[#0a192f] px-1 text-white text-opacity-80 text-lg translate duration-300 peer-focus:input-text' >{ props.name }</span>}
    </div>
  )
}

export default TextAreaComponent

