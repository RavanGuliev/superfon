import React from 'react'
import { FaBalanceScale } from 'react-icons/fa'

function Compare() {
  return (
      <div className='w-full mx-auto flex flex-col h-[80vh]  justify-start items-center pt-20 '>
      <FaBalanceScale className='text-6xl' />
      <p className='text-lg font-bold pt-2'>  Müqayisə siyahısı boşdur</p>
    </div>
  )
}

export default Compare