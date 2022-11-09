import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#000009]'>

      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#7290A9] text-m sm:text-l'>Hi, nice to meet you. I am</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#215B7A] py-1'>Triet Le.</h1>
        <h2 className='text-[#7290A9] text-2xl sm:text-5xl '>Aspiring Full-stack Developer</h2>
        <div>
          <button className='py-1 text-[#7290A9]'>
            View Skills <HiArrowNarrowRight/>
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default Home