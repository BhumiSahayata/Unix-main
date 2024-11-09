import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { GrCode } from "react-icons/gr";
function Asidebar() {
  return (
    <>
        <div className='bg-zinc-400 w-[100%] h-[100vh] relative px-4 pt-2'>
            <div className='mb-2'>
                <IoMdMenu style={{ color: "white", fontSize: '2em' }}/>
            </div>
            <div className='flex items-center border-2 rounded-full justify-center w-[85%] gap-1'>
                <FaPlus color='white' />
                <p className='text-white text-xl'>New Chat</p>
            </div>
            <div className=' absolute bottom-[20px] '>
                <div className='flex items-center gap-2'>
                    <IoMdHelpCircleOutline style={{ color: "white", fontSize: '1.5em' }}/>
                    <p className='text-white text-xl'>Help</p>
                </div>
                <div className='flex items-center gap-2'>
                    <GrCode style={{ color: "white", fontSize: '1.5em' }}/>
                    <p className='text-white text-xl'>About Us</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Asidebar