import React from 'react'
let data = [
    {
        id: 1,
        nav: "Home",
    },
    {
        id: 2,
        nav: "Contact",
    },
    {
        id: 3,
        nav: "Skills",
    },
    {
        id: 4,
        nav: "Works",
    },
    {
        id: 5,
        nav: "About"
    }
]
const Navbar2 = () => {
  return (
    <div>
    <div className='w-full h-[50px] flex justify-between items-center px-[20px] py-[20px] my-7 bg-slate-400 text-white text-[18px]'>
        <ul className='flex gap-3'>
            {data.map((e)=>{
                return(
                    <li className='cursor-pointer rounded-md hover:bg-blue-100 px-2 py-1' key={e.id}>{e.nav}</li>
                    )
                })} 
        </ul>
    </div>
   </div>
  )
}

export default Navbar2