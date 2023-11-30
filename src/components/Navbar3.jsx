import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
let menu = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Skills", submenu: true },
    { id: 4, name: "Contact" },
    { id: 5, name: "Works" },
]

let subMenuData = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" }
]
const Navbar3 = () => {
    const [showCatMenu, setShowCatMenu] = React.useState(false);
    return (
        <div>
            {/* Navbar with dropdown menu  */}
            <div className='w-full h-[40px] flex justify-center items-center bg-[lightgreen] text-black text-[15px]'>
                <ul className='flex'>
                    {menu.map((e) => {
                        return (
                            <React.Fragment key={e.id}>
                                {!!e?.submenu ? (
                                    <li
                                        className='flex px-1 py-1 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer gap-2 justify-center items-center relative'
                                        onMouseEnter={
                                            () => { setShowCatMenu(true) }
                                        }
                                        onMouseLeave={
                                            () => { setShowCatMenu(false) }
                                        }
                                    >
                                        {e.name}
                                        <BsChevronDown size={14} />
                                        {showCatMenu && (
                                            <ul className='bg-blue-500 absolute top-6 left-0 px-1 py-1 flex gap-2 h-[100px] justify-center  min-w-[250px] text-black shadow-md'>
                                                {subMenuData.map((sub)=>{
                                                    <li className='h-12 justify-between items-center text-[15px] rounded-md' key={sub.id}>{sub.name}</li>
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                ) : (
                                    <li className='px-2 py-1 cursor-pointer rounded-md hover:bg-green-600 hover:text-white'>{e.name}</li>
                                )}
                                {/* <li className='px-2 py-1 cursor-pointer rounded-md hover:bg-green-600 hover:text-white '>{e.name}</li> */}
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar3