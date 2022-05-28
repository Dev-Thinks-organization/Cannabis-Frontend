import React from 'react'
import logo from '../Assets/llogo 1.svg'
const NavBar = () => {
  return (
<nav className=" bg-white max-w-7xl mx-auto px-2 py-4 sm:px-14 lg:px-8 flex justify-between border-b-2">
        {/* left Section */}
        <div className='flex justify-center items-center'>
          <img  className='w-10 h-10' src={logo}></img>
<h1 className="text-[#004B23] ml-3 ">CBDgle</h1>

        </div>

        <div>
          <h1>🇺🇸</h1>
        </div>
      </nav>
  )
}

export default NavBar