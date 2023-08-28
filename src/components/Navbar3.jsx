import React from 'react'
let menu = [
    {
        id: 1,
        name: "Home"
    },
    {
        id: 2,
        name: "About"
    },
    {
        id: 3,
        name: "Skills"
    },
    {
        id: 4,
        name: "Contact"
    },
    {
        id: 5,
        name: "Works"
    },
]
const Navbar3 = () => {
  return (
    <div>
        {/* Navbar with dropdown menu  */}
        <div className='w-full h-[40px] flex justify-center items-center bg-[lightgreen] text-black text-[15px]'>
            <ul className='flex gap-4'>
              {menu.map((e)=>{
                return(
                    <li className='px-2 py-1 cursor-pointer rounded-md hover:bg-green-600' key={e.id}>{e.name}</li>
                )
              })}  
            </ul>
        </div>
    </div>
  )
}

export default Navbar3