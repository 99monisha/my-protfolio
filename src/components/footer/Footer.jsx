import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
<footer>
  <a href="#" className='footer_logo'>MyLogo</a>
  <ul className='links'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">experience</a></li>
    <li><a href="#services">services</a></li>
    <li><a href="#protfolio">protfolio</a></li>
    <li><a href="#testimonials">testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div className="footer_social">
    <a href="http://facebook.com"><AiOutlineFacebook/></a>
    <a href="http://twitter.com"><TiSocialTwitterCircular/></a>
    <a href="http://instagram.com"><FiInstagram/></a>
  </div>
  <div className="footer_copyw">
    <small>monishadolai1998@gmail.com</small>
  </div>
</footer>
  )
}

export default Footer