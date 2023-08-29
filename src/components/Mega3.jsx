import React from 'react'

const Mega3 = () => {
  return (
    <div>
        <ul className='flex justify-between items-center font-semibold'>
            <li className='relavtive group px-3 py-2'>
                <button className='hover:opacity-50 cursor-default'>Mega</button>
                <div className='absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 
                invisible group-hover:opacity-100 group-hover:visible duration-500 
                 ease-in-out group-hover:transform transform z-50 min-w-[200px]
                '>
                    <div className='relative top-6 p-6 bg-black rounded-xl shahow-xl w-full'>
                        <div 
                        className='w-10 h-10 bg-black transform rolate-45 absolute top-0 z-0 translate-x-4 translate-x-4 transition-transform duration-500 ease-in-out rounded-sm'>
                        </div>
                        <div relative z-10>
                        <ul >
                            <li>1st Option</li>
                            <li>2nd Option</li>
                            <li>3rd Option</li>
                            <li>4th Option</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Mega3