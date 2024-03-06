import React from 'react'
import NavLink from './NavLink'
import Button from './Button'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar1() {
    const [open, setOpen] = React.useState(false);
  return (
    <nav className='bg-[whtie]'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between md:'>
            <img src="/images/logo.avif" alt="..." className='md:cursor-pointer h-14'/>
            <div className={`text-3xl mt-[10px] md:hidden`} onClick={()=>{setOpen(!open)}}>
                {!open ? <AiOutlineMenu size={35}/> : <AiOutlineClose size={35}/>}
            </div>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
            <li>
                <div className='py-7 px-3 inline-block'>
                {/* Link component */}
                Home
                </div>
            </li>
            <NavLink/>
        </ul>
        <div className='sm:block hidden'>
            <Button/>
        </div>
        {/* mobile navbar */}
        <ul className={`md:hidden bg-[lightblue] absolute w-full h-full bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0":"left-[-100%]"}`}>
            <li>
                <div className='py-7 px-3 inline-block'>
                Home
                </div>
            </li>
            <NavLink/>
            <div className='py-5'>
                <Button/>
            </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar1
