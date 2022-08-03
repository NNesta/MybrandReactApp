import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineGlobe } from 'react-icons/hi'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-screen md:px-16 max-w-screen items-center justify0-center h-fit flex-col bg-[#10100e]'>
    <section
      className="w-full md:h-[40vh]  md:flex justify-between  text-white"
      data-testid="page-footer"
      id="page-footer"
    >
      <div className="md:w-2/3 md:flex items-center">
        <div className="md:w-1/2 h-max pr-20 py-10 lg:border-r border-teal-600 justify-center flex-col items-center">
          <p className="text-3xl">
            <span className="text-4xl text-teal-600">N</span>gabonziza
            <span className="text-4xl text-teal-600 ml-3.5">N</span>estor
          </p>
            <li className="w-full h-max flex justify-evenly mt-10">
              <a href="https://www.facebook.com/profile.php?id=100084236824665">
                <FaFacebookF className="h-[30px] w-[30px] text-teal-600 hover:translate-y-[-10px] transition-all duration-500" />
              </a>
              <a href="https://twitter.com/NgabonzizaNest1">
                <FaTwitter className="h-[30px] w-[30px] text-teal-600 hover:translate-y-[-10px] transition-all duration-500" />
              </a>
              <a href="https://www.linkedin.com/in/nestor-ngabonziza-5a6767155/">
            <FaLinkedinIn className="h-[30px] w-[30px] text-teal-600 hover:translate-y-[-10px] transition-all duration-500" /></a>
          </li>
        </div>
        <div className="w-2/5 h-max flex flex-col items-center">
          <section className="flex flex-col ml-20">
            <span>
              <span className="text-teal-600 mr-2">01.</span>
              <a
                className="text-white capitalize text-lg hover:text-teal-600 transition-all duration-300"
                href="#home"
              >
                home
              </a>
            </span>
            <span>
              <span className="text-teal-600 mr-2">02.</span>
              <a
                className="text-white capitalize text-lg hover:text-teal-600 transition-all duration-300"
                href="#about"
              >
                About
              </a>
            </span>
            <span>
              <span className="text-teal-600 mr-2">03.</span>
              <a
                className="text-white capitalize text-lg hover:text-teal-600 transition-all duration-300"
                href="#skills"
              >
                Skills
              </a>
            </span>
            <span>
              <span className="text-teal-600 mr-2">04.</span>
              <a
                className="text-white capitalize text-lg hover:text-teal-600 transition-all duration-300"
                href="#works"
              >
                Works
              </a>
            </span>
            <span>
              <span className="text-teal-600 mr-2">05.</span>
              <a
                className="text-white capitalize text-lg hover:text-teal-600 transition-all duration-300"
                href="#contact"
              >
                Contact
              </a>
            </span>
          </section>
        </div>
      </div>
      <div className="md:w-1/3 py-4 flex flex-col items-end justify-center">
        <span className="w-full flex items-center">
          <GoLocation className="text-teal-600" />
          <span className="ml-3 text-teal-600">
            KN 7 Ave Nyarugenge, Kigali - Rwanda
          </span>
        </span>
        <span className="w-full flex items-center">
          <FiMail className="text-teal-600" />
          <span className="ml-3 text-teal-600">ngabonest@gmail.com</span>
        </span>
        <span className="w-full flex items-center">
          <FiPhone className="text-teal-600" />
          <span className="ml-3 text-teal-600">+ (250) 787893097</span>
        </span>
        <span className="w-full flex items-center">
          <HiOutlineGlobe className="text-teal-600" />
          <a className="ml-3 text-teal-600" href="www.google.com">
            www.portifolio-nnesta.vercel.app
          </a>
        </span>
      </div>
    </section>
<div className='pb-2 w-full text-gray-200'>
          <div className='h-full md:text-center'>
          <p> Copyright © 2022 Ngabonziza Nestor.</p>
          </div></div>
    </div>
  )
}

export default Footer