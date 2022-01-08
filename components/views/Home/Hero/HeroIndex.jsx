import React from 'react'

// components

const HeroIndex = () => {
    return (
        <div className="h-[33rem] w-11/12 flex flex-col md:flex-row justify-center items-center bg-gray-100">
            {/* Caption */}
            <div className="h-full w-full md:w-1/3 bg-gray-200"></div>
            {/* Mockups */}
            <div className="h-full w-full md:w-2/3 bg-gray-300"></div>
        </div>
    )
};

export default HeroIndex;