import React, {useRef} from 'react'

type Props = {
  type: string
  name: string
  setData: (input: string) => void
  data: string
    
}

const InputComponent = (props: Props) => {
  const userInput = useRef<any>(null)
  const clickSpanHandler = () => {
    userInput.current.focus();
  }
  return (
    <div className='relative peer mx-auto'>
      <input value={props.data}  onChange={(e) => props.setData(e.target.value)} ref={userInput} type={props.type} required className='outline-none peer border-2 border-white bg-[#0a192f] text-white h-10 rounded-md p-2 w-[275px] sm:w-[500px]' name={props.name} id={props.name} />
      {props.data ? <span onClick={clickSpanHandler} className='absolute top-[3px] left-2 px-1 text-white text-opacity-80 text-lg translate duration-300 input-text peer' >{ props.name }</span>:<span onClick={clickSpanHandler} className='absolute top-[3px] left-2 px-1 text-white text-opacity-80 text-lg translate duration-300 peer-focus:input-text' >{ props.name }</span>}
    </div>
  )
}

export default InputComponent;
