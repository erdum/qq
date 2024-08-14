import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiAccountPinCircleLine } from "react-icons/ri";

const AccountCreated = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm">
    <IoIosCheckmarkCircle className='text-[#800000] w-[90px] h-[90px] mx-auto mt-52' />
      <h2 className="text-2xl font-bold text-center mb-2">Cogratulations</h2> 
      <p className='text-sm text-center mb-80'>Your account has been created</p>
    </div>  
    </div>
  )
}

export default AccountCreated;
