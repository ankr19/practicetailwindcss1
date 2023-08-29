import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='sticky w-full h-[50px] flex justify-center items-center text-white bg-black/30'>
                <ul className='flex gap-3 px-2 py-2 text-[17px]'>

                    <li className='cursor-pointer hover:bg-blue-400 
            px-3 py-1 rounded-lg'>Home</li>

                    <li className='cursor-pointer hover:bg-blue-400 
            px-3 py-1 rounded-lg'>About</li>

                    <li className='cursor-pointer hover:bg-blue-400 
            px-3 py-1 rounded-lg'>Skills</li>

                    <li className='cursor-pointer hover:bg-blue-400 
            px-3 py-1 rounded-lg'>Works</li>

                    <li className='cursor-pointer hover:bg-blue-400 
            px-3 py-1 rounded-lg'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar