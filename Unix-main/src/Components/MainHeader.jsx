import React from 'react';
import '../index.css'

function MainHeader() {
  return (
    <>
        <div className=' min-h-[60vh] flex items-center justify-center flex-col'>
            <p className='main_header text-6xl font-bold '>Hello Dev,</p>
            <p className='text-5xl font-semibold text-gray-400'>How can i help you?</p>
        </div>
    </>
  )
}

export default MainHeader