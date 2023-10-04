import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-regular-svg-icons'

const Navigation = () => {
  return (
    <>
    <nav className="flex justify-between align-center p-4 px-8">
            <b className="font-black">LOGO</b>
        <div className="nav-links space-x-3 lg:hidden">
            <a href="#" className="hover:text-blue-900 text-blue-900 focus:text-blue-900">Home</a>
            <a href="#" className="hover:text-blue-900 focus:text-blue-900">About</a>
            <a href="#" className="hover:text-blue-900 focus:text-blue-900">Products</a>
            <a href="#" className="hover:text-blue-900 focus:text-blue-900">Contact</a>
            <button className="bg-blue-900 px-3 py-1 rounded text-white hover:scale-95 transition duration-300 hover:shadow-xl">Purchase UI Kit</button>
        </div>
    </nav>
    </>
  )
}

export default Navigation