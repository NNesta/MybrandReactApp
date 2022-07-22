import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
      <div className='absolute bottom-0 left-0 h-16 w-full bg-[#375074] text-gray-200'>
          <div className='flex items-center justify-center h-full gap-x-16'>
          <p> Copyright © 2022 Ngabonziza Nestor.</p>
          <p className='hidden pl-16 border-l-2 border-gray-400 md:block'>Web and mobile app Developer</p>
          </div>
    </div>
  )
}

export default Footer