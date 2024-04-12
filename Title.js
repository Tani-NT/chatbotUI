import React from 'react'
import chatbot from '../assets/img/chatbot.svg'

const Title = () => {
  return (
    <>
        <div className='flex font-Poppins items-center gap-4 px-5 py-4 w-full h-full text-blue-500 bg-slate-200'>
          <img src={chatbot} alt="chatbot"/> 
            <div>
                <h2 className='font-bold text-xl'>Timpu</h2>
                <div className='flex font-semibold gap-28'>
                  <h5>Chat Assistant</h5>
                  <h5 className=''>Online</h5>
            </div>
            </div>
        </div>
    </>
  )
}

export default Title
