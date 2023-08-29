import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
let menu = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Skills" },
  { id: 4, name: "Contact" },
]
const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='relative flex flex-col items-center w-[340px] h-[350px] rounded-lg'>
      <button
        onMouseEnter={() => { setIsOpen(true) }}
        onMouseLeave={() => { setIsOpen(false) }}
        className='bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className='h-8' />
        ) : (
          <AiOutlineCaretUp className='h-8' />
        )}
      </button>
      {
        isOpen && (
          <div className='bg-blue-400 absolute top-12
           flex flex-col items-start rounded-lg p-2 w-full '>
            {menu.map((e) => {
              return (
                <div key={e.id} className='flex w-full justify-between items-center hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4'>
                  <h4 className='font-bold'>{e.name}</h4>
                </div>
              )
            })}
          </div>
        )
      }
    </div>
  )
}

export default Dropdown