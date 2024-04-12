import React from 'react'

const Input = () => {
  return (
    <>
        <div className='mx-5 my-9 bg-gradient-to-r from-[#E5EEFF] to-[#fff] rounded-md px-3 py-2'>
            <div className='flex justify-between'>
                <p>
                    <input className='px-3 py-2 w-[310px] rounded-md' placeholder='Type Your Message'/>
                </p>
                <button className='ml-[-30px]'>
                    <i class="ri-attachment-2"></i>
                </button>
                <button className='bg-blue-500  text-white text-md px-2 rounded-md'>
                    <i class="ri-arrow-right-s-line"></i>
                </button>
            </div>
            <p className='text-center text-slate-300'>Powered by <strong className='font-semibold'>Krunk.ai</strong></p>
        </div>
    </>
  )
}

export default Input
