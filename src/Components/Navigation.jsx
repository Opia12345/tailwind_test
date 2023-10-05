import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
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
          <FontAwesomeIcon className="dropdown md:hidden text-xl cursor-pointer" icon={faBars} />
    </nav>
    </>
  )
}

export default Navigation