import React from 'react'
import styled from './NavIndex.module.css'

// components

// NEXT
import Image from 'next/image'

const NavIndex = () => {
    return (
        <nav className="h-16 w-10/12 md:px-5 bg-transparent flex justify-between items-center">
            {/* left */}
            <div className="h-full w-4/5 flex items-center justify-start space-x-3">
                {/* logo */}
                <div className="h-32 w-32 rounded-full bg-transparent flex justify-start items-center -ml-9 mt-5 md:mt-0">
                    <Image src="/assets/images/logo.png" alt="" width="300" height="300" />
                </div>

                {/* Menu */}
                <div className={`h-9 w-full pl-10 border-l border-gray-300 bg-transparent ${styled.rFlex}`}>
                    <div className="h-full flex justify-start items-center space-x-7">
                        <div className="text-md font-medium text-gray-500 cursor-pointer border-2 border-gray-500 px-2 rounded-md">Home</div>
                        <div className="text-md font-normal text-gray-500 cursor-pointer px-2 rounded-md hover:text-black transition duration-700">About</div>
                        <div className="text-md font-normal text-gray-500 cursor-pointer px-2 rounded-md hover:text-black transition duration-700">Explore</div>
                        <div className="text-md font-normal text-gray-500 cursor-pointer px-2 rounded-md hover:text-black transition duration-700">How it works</div>
                    </div>
                    {/* Search */}
                    <div className="w-56 bg-red-500 ml-10">
                        <form className="h-full w-full position relative">
                            <input className="h-full w-full focus:outline-none pl-7 text-sm text-gray-700 font-medium" type="search" placeholder="Search" />
                            <i className="la la-search position absolute left-0 top-1/2 -mt-3 text-xl text-gray-500 transform -rotate-90"></i>
                        </form>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="h-full w-1/5 flex items-center justify-end">
                {/* hamburger */}
                <div className="h-full w-6 md:hidden flex flex-col justify-center items-center space-y-1">
                    <span className="h-[3px] w-full rounded-md bg-gray-800"></span>
                    <span className="h-[3px] w-10/12 mr-auto rounded-md bg-gray-800"></span>
                    <span className="h-[3px] w-full rounded-md bg-gray-800"></span>
                </div>

                {/* Btns */}
                <div className={`w-46 bg-transparent ${styled.rFlex} flex items-center justify-end space-x-2`}>
                    <button className="w-12 bg-transparent text-gray-500 font-medium text-md">Login</button>
                    <button className="w-20 bg-[#9A3432] text-white text-sm py-2 px-3 rounded-md font-medium">Sign Up</button>
                </div>
            </div>
        </nav>
    )
};

export default NavIndex;