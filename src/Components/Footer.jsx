import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="grp-1 flex justify-between px-8 mt-8 items-center">
           <small>&copy;2023Company</small>
           <b>LOGO</b>
        </div>
        <hr className='mt-8' />
        <div className="grp-2 flex justify-between px-8 items-center mb-4 mt-4">
            <div className="space-x-3">
                <a href="" className='hover:text-blue-900 text-blue-900 focus:text-blue-900'>Home</a>
                <a href="" className="hover:text-blue-900 focus:text-blue-900">Contact</a>
                <a href="" className="hover:text-blue-900 focus:text-blue-900">About</a>
            </div>
            <div className="icons space-x-4">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
            </div>
        </div>
    </footer>
  )
}

export default Footer