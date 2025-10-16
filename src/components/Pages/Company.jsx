import React from 'react'
import { FiTag } from 'react-icons/fi'

function Company() {
  return (
    <div className='max-w-[1400px] mx-auto min-h-[100vh]'>
        <h1  className='text-[22.4px] font-bold px-5 pt-2 rubik'>Kampaniyalar</h1>
     <div className="w-full h-px bg-gray-200 mt-1   " />
         <div className="flex flex-col items-center justify-center py-10 text-gray-500">
      <FiTag className="text-6xl mb-4" />
      <p className="text-md text-b font-medium">Hal-hazırda aktiv kampaniyamız yoxdur</p>
    </div>
    </div>
  )
}

export default Company