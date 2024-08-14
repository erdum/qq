import React from 'react'
import { MdOutlineLogin } from "react-icons/md";


const Logout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm">
    <MdOutlineLogin className='text-[#800000] w-[90px] h-[90px] mx-auto mt-52' />
      <h2 className="text-2xl font-bold text-center mb-2">Logged Out</h2> 
      <p className='text-sm text-center mb-80'>Your account has been logged out</p>
    </div>
    </div>
  )
}

export default Logout;
