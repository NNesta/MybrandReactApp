import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll'
type Props = {}

const Navbar = (props: Props) => {
  const [navbar, setNavbar ] = useState<boolean>(false);
  const handleClick = () => setNavbar(!navbar);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const showNav=()=>{
    if(window.scrollY>=lastScroll)
    {
       setShow(false)
    }
    else{
     setShow(true)
    }
      setLastScroll(window.scrollY)
  }
  useEffect(()=>{
    if(window !== undefined){
      window.addEventListener('scroll',showNav)
    }
    return ()=>{
      window.removeEventListener('scroll', showNav)
    }

  }, [lastScroll])
  return (
    <>
    <div className={`w-full fixed h-20 bg-[#23304c] z-[500] ${!show&&'-translate-y-20'}  transition duration-500 ease-in-out`}>
    <div className={`w-full flex gap-8 justify-center text-white lg:justify-between items-center px-16 container bg-[#23304c] mx-auto`}>
        {/* <h1 className='animate-bounce'>Nestor</h1> */}
         <Link to="home" smooth={true} duration={500}>
          <img className="w-16 h-16 rounded-full hover:scale-150 duration-300 ease-in-out" src="assets/logo.png" alt="" />
        </Link>
    <ul className='hidden space-x-8 md:flex '>
          <li>
           <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
      <li>
      <Link to="about" smooth={true} duration={500}>
          About
        </Link></li>

      <li>
      <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
      <li>
      <Link to="works" smooth={true} duration={500}>
          Works
        </Link>
          </li>
          <li>
      <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
    </ul>
    <div onClick={handleClick} className="z-10 md:hidden">
      {!navbar ? <FaBars size={40} />: <FaTimes size={40} />}
    </div>
    {/* mobile menu */}
    <ul className={!navbar ? "fixed -left-[100%]": `flex flex-col absolute bg-[#23304c] top-0 left-0 w-full h-screen justify-center items-center ease-out duration-500`}>
      <li className="py-6 text-4xl">  
       <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
      <li className="py-6 text-4xl">
     <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
      
      <li className="py-6 text-4xl">
      <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
      <li className="py-6 text-4xl">
      <Link onClick={handleClick} to="works" smooth={true} duration={500}>
          Works
        </Link>
          </li>
        <li className="py-6 text-4xl">
      <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
    </ul>
      </div>
    {/* Social icon */}
    
      </div> <div className="hidden md:flex flex-col fixed top-[35%] left-0 z-50">
      <ul><li className="w-32 h-16">
          <a className="flex justify-between items-center w-full text-gray-300 bg-[#333333] -translate-x-20 hover:translate-x-2 transition duration-500 ease-in-out" href="https://github.com/NNesta/">Github <FaGithub size={30}/> </a>
        </li>
        <li className="w-32 h-16">
          <a className="flex justify-between items-center w-full text-gray-300 bg-blue-600 -translate-x-20 hover:translate-x-2 transition duration-500 ease-in-out" href="https://www.linkedin.com/in/nestor-ngabonziza-5a6767155/">Linkedin <FaLinkedin size={30}/> </a>
        </li>
        
        <li className="w-32 h-16">
          <a className="flex justify-between items-center w-full text-gray-300 bg-teal-400 -translate-x-20 hover:translate-x-2 transition duration-500 ease-in-out" href="mailto:ngabonest@gmail.com">Email <HiOutlineMail size={30} /> </a>
        </li>
       {/*  <li className="w-[160px] h-[60px] flex justify-between items-center"> 
          <a className="flex gap-4 items-start w-full text-gray-500 -ml-[100px] hover:ml-[10px] transition duration-300" href="/">Resume <HiOutlineResume /> </a>
        </li> */}
    </ul>
    </div></>
)
}
export default Navbar;