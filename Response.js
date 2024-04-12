import React from 'react'
import 'remixicon/fonts/remixicon.css';

const Response = () => {
  return (
    <>
        <p className='text-[13px] mx-5  text-slate-400'>Popular Tags for Handbags</p>
        <div className='text-sm font-semibold flex justify-evenly overflow-hidden mx-4 my-3'>
            <h4 className='px-3 py-2 text-[#4C82EF] rounded-md border-2 border-blue-500'>Clutch</h4>
            <h4 className='px-3 py-2 text-[#4C82EF] rounded-md border-2 border-blue-500'>Fabric lining</h4>
            <h4 className='px-3 py-2 text-[#4C82EF] rounded-md border-2 border-blue-500'>Baggit</h4>
            <h4 className='px-3 py-2 text-[#4C82EF] rounded-md border-2 border-blue-500'>Multi</h4>
            <button className='text-blue-600 text-2xl'>
                <i class="ri-arrow-right-s-line"></i>
            </button>
        </div>
        <div className=' w-[280px] mt-5 bg-gradient-to-r from-[#E5EEFF] to-[#FAFCFF] rounded-lg p-3 mx-5'>
            <div className='flex bg-white rounded-lg p-2'>
                <img className='w-[70px] h-[50px]' src="https://s3-alpha-sig.figma.com/img/689e/2faf/68cf127f505e43e548e19296947c8d09?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvJHNTJnVTam5IbdgovtdJjs~9a8CoaetZ9TxA04XJcYBUZm1NceknHk1t7HmanN27TDiDVXjVQFTExU1nuugTqpCmV3TBzPvCClYwB1CK3X5M8J0WJox6-hRVZ4Cy8LqNcuMaR3MXuJxKbOgBYzqlqlnkL0eALLnh0C9nyMlzkoGrIRO-V6pOxocffZoGWw6M3-PFbA83NbfA-Qt9Sc4I8MWZ-QVjeTjuFvBim04A6I1amF4biHstH3OlSpJnd0wMkcj-dz5~6Lv8dBYLe6R32Hy9xGLSRHLU9WGKtKuvnuZzjlKpF~HK37yqkVCFl4XPjlzeIBWm6Udx8zBOTgtw__" alt="bag"/>
                <div className='mx-2'>
                    <h2 className='font-semibold'>
                        Bags on Timpu
                    </h2>
                    <p className='pr-5 text-slate-400'>1132 products <i class="ri-arrow-right-s-line"></i></p>
                </div>
            </div>
            <p className='text-[13px]'>Or set filter and help us choose the best bag for you.</p>
        </div>
        <p className='text-[10px] px-2 py-1 mx-5 my-1'>4:48 PM</p>
    </>
  )
}

export default Response
