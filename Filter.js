import React from 'react'

const Filter = () => {
  return (
    <>
        <div className='flex mx-5 my-5 text-slate-400'>
            <p className=''>Select Filters</p>
            <p className='ml-[220px]'><i class="ri-equalizer-line"></i> Filter</p>
        </div>
        <div className='flex flex-wrap gap-5 text-sm mx-5 my-3'>
            <p className='border-2 border-blue-500 px-2 py-1 bg-white rounded-md'>Strap - Long <i class="ri-close-fill"></i></p>
            <p className='bg-slate-100 rounded-md px-2 py-1'>Colour <i class="ri-close-fill"></i></p>
            <p className='bg-slate-100 rounded-md px-2 py-1'>Size <i class="ri-close-fill"></i></p>
            <p className='bg-slate-100 rounded-md px-2 py-1'>Brand <i class="ri-close-fill"></i></p>
            <p className='bg-slate-100 rounded-md px-2 py-1'>Material <i class="ri-close-fill"></i></p>
        </div>
    </>
  )
}

export default Filter
