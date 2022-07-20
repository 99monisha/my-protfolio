import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/moni.png'
import Headersocial from './Headersocial'
const Header = () => {
  return (
    <header>
     <div className="container header_container">
       <h5>Hellow I'm</h5>
       <h1>Monisha Dolai</h1>
       <h5 className='text-light'>Mern Stack Developer</h5>
       <CTA />

       <div className="me">
         <img src={ME} alt="me" />
       </div>

       <a href="#contact" className='scroll_down'>Scroll Down</a>
     </div>
     <Headersocial />
    </header>
  )
}

export default Header