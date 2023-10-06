import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile)
  }

  return (
    <>
    <nav className="flex justify-between items-center backdrop-blur-sm p-4 px-8 py-5 bg-slate-100/20 border fixed top-0 w-full">
            <b className="font-black">LOGO</b>
        <div className="nav-links space-x-3 hidden md:block">
            <a href="#" className="hover:text-blue-900 text-blue-900 focus:text-blue-900">Home</a>
            <a href="#" className="hover:text-blue-900 focus:text-blue-900">About</a>
            <a href="#" className="hover:text-blue-900 focus:text-blue-900">Products</a>
            <a href="#" className="hover:text-blue-900 focus:text-blue-900">Contact</a>
            <button className="bg-blue-900 px-3 py-1 rounded text-white hover:scale-95 transition duration-300 hover:shadow-xl">Purchase UI Kit</button>
        </div>
          <FontAwesomeIcon onClick={toggleMobile} className="dropdown md:hidden text-xl cursor-pointer" icon={faBars} />
    </nav>

    {isMobile && (
        <div className="md:hidden bg-slate-100 fixed top-0 left-0 w-full h-full">
          <FontAwesomeIcon icon={faX} className='m-8 focus-within:text-blue-900' onClick={toggleMobile}/>
          <ul className="flex flex-col items-center justify-center h-full">
            <li>
              <a href="#" className="text-blue-900 hover:text-blue-900 focus:text-blue-900">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 focus:text-blue-900">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 focus:text-blue-900">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 focus:text-blue-900">Contact</a>
            </li>
            <li>
              <button className="bg-blue-900 px-3 py-1 rounded text-white hover:scale-95 transition duration-300 hover:shadow-xl">Purchase UI Kit</button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navigation