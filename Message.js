import React from 'react'

const Message = () => {
  return (
    <>
        <div className='mx-5 mt-14'>
          <p className='w-[220px] h=[60px] text-[13px] leading-4 font-medium bg-gradient-to-r from-[#E5EEFF] to-[#FFFFFF] px-3 py-4 rounded-2xl'>
          Hi Sam! I am your personal shopping assistant , how can i help you today ?
          </p>
          <h6 className='text-[10px] px-2 py-1'>4:45 PM</h6>
        </div>
        <div className='flex items-end mx-5 my-1 flex-col'>
            <p className='w-[220px] h=[60px] text-[13px] leading-4 font-medium bg-[#DCF7C5] p-3 rounded-2xl'>
            I am looking for a hand bag, with long strap .
            </p>
            <h6 className='text-[10px] px-2 py-1'>4:46 PM</h6>
        </div>
    </>
  )
}

export default Message
