import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Context } from '../context/Context'
import Navbar from './Components/Navbar'
import Asidebar from './Components/asidebar'
import MainHeader from './Components/MainHeader'
import { IoMdSend } from "react-icons/io";
import usericon from "./assets/user-icon.png"
import chatlogo from "./assets/unix-logo.jpg"
// import run from './config/gemini'


function App() {
  
  const {onSent,input,setInput,response,showResult,prevPrompt} = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSent(input);
    console.log(input)
    setInput('');
  }

  return (
    <>
    
    <div id="main">
      <div className='flex'>
      <div className='absolute top-0 left-0 w-[15%]'>
      <Asidebar/>
      </div>
      <div className='w-[85%] max-h-screen absolute right-0'> 
        <Navbar/>
        {/* <MainHeader/> */}
        {!showResult? <MainHeader/> : 
        <>
          <div className='min-h-[60vh]'>
            <div className='flex items-center gap-2 mt-2 mb-4'>
              <img src={usericon} alt="" className='rounded-[50%] h-10'/>
              <p className='w-[50%] font-medium'>{prevPrompt}</p>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <img src={chatlogo} alt="" className='rounded-[50%] h-10'/>
              {/* {loading ? <p className='w-[60%] font-medium'>Loading Response...</p> : <p className='w-[60%] font-medium'>{response}</p>} */}
              <p className='w-[60%] font-medium '>{response}</p>
            </div>
          </div>

        </>}
        <div className=' h-[30vh] flex items-center justify-center '>
          <div className='bg-zinc-200 h-[6vh] w-[800px] rounded-full flex items-center px-6 justify-between'>
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            type="text" className='border-none bg-transparent focus:outline-none w-[90%] ' placeholder='Type to search'/>
            <IoMdSend 
            onClick={handleSubmit}
            style={{ color: "black", fontSize: '1.5em' }} className=' cursor-pointer'/>
          </div>
        </div>
      </div>
      </div>
    </div>
      {/* <input 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      type="text" name="" id="" /> */}
      {/* <button onClick={handleSubmit}>Send</button> */}
      </>
    // <>
    //       <div className='flex items-center gap-2 mt-2 mb-4'>
    //         <img src={usericon} alt="" className='rounded-[50%] h-10 '/>
    //          <p className='w-[50%] font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eum nihil voluptatum cum animi consequuntur repellat aliquid quasi veniam quia.</p>
    //       </div>
    //       <div className='flex items-center gap-2 mb-4 '>
    //         <img src={chatlogo} alt="" className='rounded-[50%] h-10'/>
    //        <p className='w-[60%] font-medium'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit praesentium laborum autem, laudantium eveniet, aspernatur aperiam molestiae voluptatibus ipsam est maiores unde facilis quae ab sunt maxime aut voluptates distinctio natus neque velit. Voluptatum libero suscipit, nemo, repellendus modi doloremque error magni aperiam, molestiae inventore ea. Similique veniam eum impedit repellat consectetur eaque, debitis, non ut ipsa quia, dolor magni nisi aut inventore quis blanditiis rem commodi nostrum exercitationem perspiciatis? Recusandae id explicabo vitae temporibus dicta! A nobis enim dolor pariatur quisquam sapiente cumque, consectetur voluptas, totam vel repellendus error? Rerum quo ducimus nulla at eius? Sit eveniet culpa mollitia quos at provident, quod dicta ratione nobis neque, rem, molestiae delectus consequuntur. Recusandae, earum. Explicabo ipsa hic nobis pariatur expedita tenetur blanditiis dicta ea sapiente id, distinctio quod quaerat temporibus eos! Magnam architecto porro possimus distinctio culpa quasi, dolor magni dicta, dolorem voluptates voluptatibus iusto eum nisi incidunt soluta totam ea exercitationem dolorum sed harum molestiae esse. Laboriosam omnis maiores at tempore totam? Earum, eum nobis vel incidunt dignissimos dolorem? Eos voluptas corporis aperiam incidunt ratione ut officiis voluptates debitis tempore quisquam laborum nihil quas commodi a magnam id temporibus beatae unde ipsa, fugit dignissimos praesentium ipsam at! Eos tempore perferendis similique labore aliquid quod dicta quidem, eius commodi quos ipsum nam aperiam quaerat beatae perspiciatis voluptas iusto? Repellat quidem, voluptatum ipsum eos labore perferendis corporis blanditiis nam rem, quia aut error et incidunt iste reprehenderit! Nostrum sit, eaque aliquid alias eum ad, ex consequuntur tempore magni veritatis mollitia voluptatem illum fuga similique consectetur error. Praesentium eum sequi, fugiat possimus voluptate rem error soluta doloremque nesciunt quo ad deleniti placeat totam, dolorum quod eaque consectetur harum impedit officia repellat alias consequatur. Cumque provident eos delectus quaerat quam ut pariatur, quo ipsam placeat ab facilis et fuga possimus nihil rem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam inventore mollitia, magni quasi non tenetur voluptatem nihil asperiores suscipit aperiam delectus ea reprehenderit natus qui. Alias illum reiciendis repudiandae totam obcaecati error ad commodi officia, iste aliquam, rerum sint quaerat esse voluptatibus necessitatibus ipsum quasi quae tempora odio atque repellat quia. Ipsa eaque veritatis dolores eos ad odit tenetur praesentium ex expedita rerum voluptatum error optio pariatur voluptas rem earum saepe laborum delectus ab, suscipit ratione aspernatur alias quasi iusto. Labore reprehenderit, modi porro recusandae ut ex sapiente est error earum eos velit sed sequi voluptatibus non, nihil consequatur architecto quidem accusantium voluptate facere? Ratione minus et perferendis sint perspiciatis iure quia incidunt, cum quos libero ipsum adipisci architecto inventore, soluta dicta ipsa similique rem quasi at? Reprehenderit quos, quia, velit accusamus recusandae beatae cumque incidunt eveniet, inventore expedita ea sequi adipisci odio a doloribus totam. Eius modi quia tenetur cupiditate, eligendi dignissimos qui similique facilis numquam vel blanditiis facere culpa iusto corrupti distinctio nobis magnam expedita! Alias fugit vero dolores magnam praesentium laboriosam quo error nihil totam! Voluptatum suscipit, porro molestias repellendus temporibus culpa soluta! Explicabo quibusdam id excepturi quis ipsam incidunt porro, in ducimus sapiente. Perspiciatis excepturi, reprehenderit earum vel ducimus aspernatur! Labore reiciendis illum soluta voluptatum natus, est quidem iste ipsum sapiente eum? Nostrum incidunt sequi autem eos, voluptatibus dolorem nisi quibusdam nihil necessitatibus asperiores fugit molestias quod voluptates facere ipsum praesentium aliquam unde facilis beatae totam commodi. Ipsa ut impedit nam quam cupiditate, ab molestiae consectetur quaerat, maxime, eos fugit. Dolor incidunt eius esse nobis illo! Quas fugit ab obcaecati hic, nostrum rem quibusdam cumque debitis culpa assumenda, totam temporibus architecto perspiciatis nesciunt laudantium eveniet aliquam labore? Veniam officiis possimus optio magni earum consectetur delectus tempora distinctio esse, obcaecati, odio sint voluptatum inventore animi hic, numquam error natus tenetur harum officia. Numquam hic voluptatem, similique impedit veritatis, voluptatum alias labore laudantium recusandae perferendis rerum sequi dolorem nam illum, optio mollitia atque asperiores ducimus sed quisquam? Quas, incidunt unde. Iusto harum earum incidunt! Aspernatur eum ipsum repellendus natus quae modi. Soluta cumque deleniti accusantium mollitia, nihil blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime deleniti, explicabo fugit asperiores libero, accusantium sunt officia, cupiditate expedita aliquam assumenda possimus vero optio dolore placeat. Animi perspiciatis hic unde reiciendis labore rerum. Officia ut distinctio cum consequatur, quisquam perferendis hic mollitia nemo a eum maiores tenetur porro molestias.</p>
    //       </div>
    // </>
  )
}

export default App
