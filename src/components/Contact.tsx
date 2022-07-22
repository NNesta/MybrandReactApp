import React, { useState } from 'react'
import InputComponent from "../components/InputComponent"
import TextAreaComponent from "../components/TextAreaComponent"

type Props = {}

const Contact = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  return (
    <div id='contact' className='w-full h-fit min-h-screen flex flex-col items-center p-4 bg-[#0a192f]'>
        <form className='flex flex-col gap-y-8 max-w-[600px] w-full' action="https://getform.io/f/2f8893b0-8ce6-4801-8767-4d5bb1dd2bfe" method="post">
          <h1 className='mb-8 mx-auto border-b-4 border-teal-600 text-white pt-16'>Contact me</h1>
          <InputComponent type='text' name='Names' setData={setName} data={name} />
          <InputComponent type='email' name='Email' setData={setEmail} data={email} />
          <TextAreaComponent name="message" setData={setMessage} data={ message } />
          <button className='btn w-48 md:w-72 lg:w-96 mx-auto rounded-md' type="submit" >Contact Me</button>
        </form> 
        </div>
  )
}

export default Contact;