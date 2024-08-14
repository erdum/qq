import React, { useEffect } from 'react'
import { RiChatDeleteFill } from "react-icons/ri";




const AccountDeleted = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm">
    <RiChatDeleteFill 
    className='text-[#800000] w-[90px] h-[90px] mx-auto mt-52' />
      <h2 className="text-2xl font-bold text-center mb-2">Account Deleted</h2> 
      <p className='text-sm text-center mb-80'>Your account has been deleted successfully</p>
    </div>
    </div>
  )
}

export default AccountDeleted;
