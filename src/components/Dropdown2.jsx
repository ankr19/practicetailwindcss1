import React from 'react'

const Dropdown2 = () => {
    return (
        <div>
            <nav>
                <ul className='flex items-center 
                justify-between font-semibold'>
                    <li className="relative group px-3 py-2">
                        <button className="hover:opacity-50 cursor-default">Resources</button>
                        <div
                            className="absolute top-0 -left-2 transition group-hover:translate-y-5
                            translate-y-0 opacity-0 invisible 
                            group-hover:opacity-100 
                            group-hover:visible duration-500 
                            ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                            <div className="relative top-6 p-6 bg-black rounded-xl shadow-xl w-full">
                                <div
                                    className="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 
                                    transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                                </div>
                                <div className="relative z-10">
                                    <ul className="text-[15px]">
                                        <li>
                                            <a href="#" className="text-white hover:text-gray-800 py-1 block font-normal">
                                                Get Support
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white hover:text-gray-800 py-1 block font-normal">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white hover:text-gray-800 py-1 block font-normal">
                                                Case Studies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white hover:text-gray-800 py-1 block font-normal">
                                                Guides
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white hover:text-gray-800 py-1 block font-normal">
                                                News &amp; Events
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Dropdown2