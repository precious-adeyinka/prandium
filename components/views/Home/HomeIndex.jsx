import React from 'react'

// components
import Header from '../../globals/Header/HeaderIndex'
import Hero from './Hero/HeroIndex'

const HomeIndex = () => {
    return (
        <div className="h-auto w-full m-0 pb-15 flex flex-col justify-start items-center space-y-10 bg-white">
            <Header />
            <Hero />
        </div>
    )
};

export default HomeIndex;