import React from 'react'
import usericon from "../assets/user-icon.png"

function Navbar() {
  return (
    <>
    <div className=' h-[10vh] flex items-center justify-between px-4'>
        <h1 className='text-3xl font-semibold'>Unix</h1>
        <img className='rounded-[50%] h-10 cursor-pointer' src={usericon} alt="" />
    </div>
    </>
  )
}

export default Navbar