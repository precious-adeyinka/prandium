import React from 'react'
import styled from './HeroIndex.module.css';

// components


// NEXT
import Image from 'next/image'

const HeroIndex = () => {
    return (
        <div className="h-auto md:h-[33rem] w-11/12 flex flex-col md:flex-row justify-center items-center bg-transparent">
            {/* Caption */}
            <div className="h-full w-full md:w-1/2 px-1 bg-transparent flex flex-col justify-start md:justify-center items-center md:items-start space-y-7 md:space-y-10 md:pl-30">
                <h1 className="w-10/12 md:w-10/12 text-4xl md:text-7xl text-center md:text-left font-bold md:leading-none">Never Miss <span className={styled.highlight}>Breakfast</span> Again.</h1>
                <p className="w-10/12 md:w-6/12 text-sm text-gray-500 text-center md:text-left font-medium">Check out our amazing community of food lovers and get inspired for breakfast.</p>
                <button className="w-46 bg-[#e85627] text-white py-2 px-5 rounded-md">Find my breakfast</button>
            </div>
            {/* Mockups */}
            <div className="h-full w-full md:w-1/2 bg-transparent flex items-center justify-center position relative overflow-x-auto md:overflow-x-hidden -ml-32">
                {/* First */}
                <div className="h-full min-w-[450px] md:w-1/2 bg-transparent flex flex-col justify-start space-y-5 pr-5 items-end">
                    {/* Image */}
                    <div className="h-72 w-72 rounded-md bg-gray-200 shadow flex jusitfy-center items-center overflow-hidden position relative">
                        {/* badge */}
                        <div className="h-5 w-20 rounded-sm px-3 text-center bg-[#219b43] position absolute top-3 right-7 text-white text-xs font-medium z-50">Dessert</div>
                        <Image src="/assets/images/hero/1.jpg" alt="" width="700" height="900" className="bg-cover" />
                        {/* Shadow */}
                        <div className={`h-16 flex items-center font-medium justify-center p-2 position absolute bottom-0 left-0 text-white text-xs ${styled.lBg}`}>
                            <span className="w-10/12 block">Dessert is best served with friends and family.</span>
                        </div>
                    </div>
                    {/* stats */}
                    <div className="h-40 w-40 rounded-md bg-[#f8ccbe] flex flex-col items-center justify-center space-y-1">
                        <h2 className="font-bold text-5xl m-0">4.6K</h2>
                        <h5 className="font-medium text-lg">Breakfast</h5>
                    </div>
                </div>
                {/* Second */}
                <div className="h-full md:min-w-[450px] md:w-1/2 bg-transparent flex flex-col justify-center space-y-5 pt-16 items-start">
                    <div className="h-40 w-40 rounded-md bg-[#ffa4004d] flex flex-col items-center justify-center space-y-1">
                        <h2 className="font-bold text-5xl m-0">500K</h2>
                        <h5 className="font-medium text-lg">Users</h5>
                    </div>
                    <div className="h-72 w-72 rounded-md bg-gray-200 shadow flex jusitfy-center items-center overflow-hidden position relative">
                        {/* badge */}
                        <div className="h-5 w-20 rounded-sm px-3 text-center bg-[#219b43] position absolute top-3 right-7 text-white text-xs font-medium z-50">Beverages</div>
                        <Image src="/assets/images/hero/2.jpg" alt="" width="700" height="900" className="bg-cover" />
                        {/* Shadow */}
                        <div className={`h-16 flex items-center font-medium justify-center p-2 position absolute bottom-0 left-0 text-white text-xs ${styled.lBg}`}>
                            <span className="w-10/12 block">Who doesn't love the morning taste of coffee for real.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroIndex;