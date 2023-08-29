import React from 'react'

const Mega = () => {
    return (
        <div>
            <div className="max-w-7xl flex justify-between items-center mx-auto relative">
                <a href="" className="font-bold text-3xl">TuatTA</a>
                <ul className="flex font-semibold">
                    <li><a href="" className="menu-item">HOME</a></li>
                    <li className="group">
                        <a href="" className="menu-item group-hover:border-white">MEGA</a>
                        {/* <!-- MEGA MENU CONTENT --> */}
                        <div className="grid grid-cols-4 w-full p-5 absolute top-full left-0 bg-black mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500 text-white">
                            <ul className="p-2">
                                <li><a href="" className="mega-sub-item-title">Product category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                            </ul>
                            <ul className="p-2">
                                <li><a href="" className="mega-sub-item-title">Product category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                            </ul>
                            <ul className="p-2">
                                <li><a href="" className="mega-sub-item-title">Product category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                            </ul>
                            <ul className="p-2">
                                <li><a href="" className="mega-sub-item-title">Product category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                                <li><a href="" className="mega-sub-item">Sub category</a></li>
                            </ul>
                            <img src="./static/img/JBL_JR 310BT_Product Image_Hero_Skyblue.png" alt="" />
                            <img src="./static/img/JBL_Quantum_400_Product Image_Hero 02.png" alt="" />
                            <img src="./static/img/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt="" />
                            <img src="./static/img/JBLHorizon_001_dvHAMaster.png" alt="" />
                        </div>
                        {/* <!-- END MEGA MENU CONTENT --> */}
                    </li>
                    <li className="group relative">
                        <a href="" className="menu-item group-hover:border-white">DROPDOWN</a>
                        <ul className="absolute left-0 bg-black w-max mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                            <li><a href="" className="menu-sub-item">Dropdown menu</a></li>
                            <li><a href="" className="menu-sub-item">Dropdown menu</a></li>
                            <li className="sub-dropdown relative">
                                <a href="" className="menu-sub-item">Dropdown menu</a>
                                <ul className="sub-dropdown-content absolute left-full top-full bg-black w-max opacity-0 invisible transition-all duration-500">
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                    <li className="sub-dropdown relative">
                                        <a href="" className="menu-sub-item">Dropdown menu</a>
                                        <ul className="sub-dropdown-content absolute left-full top-full bg-black w-max opacity-0 invisible transition-all duration-500">
                                            <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                            <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                            <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                            <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                </ul>
                            </li>
                            <li className="sub-dropdown relative">
                                <a href="" className="menu-sub-item">Dropdown menu</a>
                                <ul className="sub-dropdown-content absolute left-full top-full bg-black w-max opacity-0 invisible transition-all duration-500">
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                    <li><a href="" className="menu-sub-item">Sub dropdown menu</a></li>
                                </ul>
                            </li>
                            <li><a href="" className="menu-sub-item">Dropdown menu</a></li>
                            <li><a href="" className="menu-sub-item">Dropdown menu</a></li>
                        </ul>
                    </li>
                    <li><a href="" className="menu-item">BLOG</a></li>
                    <li><a href="" className="menu-item">ABOUT</a></li>
                </ul>
                <ul className="flex font-semibold">
                    <li><a href="" className="menu-item">ACCOUNT</a></li>
                    <li><a href="" className="menu-item">CART</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Mega