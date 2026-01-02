import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-[10vh] bg-blue-900 text-white flex flex-row justify-center items-center'>
      <div className='w-[49%] h-[99%] flex justify-center items-center'>
      <h1 className='text-3xl font-bold'>Navbar</h1>
      </div>
      <div className='w-[49%] h-[99%] flex justify-center items-center'>
        <ul className='flex space-x-4 ml-10 flex-row justify-center items-center md:flex-col md:space-x-10 text-lg font-medium'>
          <li className='hover:underline cursor-pointer'>Home</li>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
