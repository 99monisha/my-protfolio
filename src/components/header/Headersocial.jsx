import React from 'react'
import{AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
const Headersocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/monisha-dolai/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/99monisha" target="_blank"><AiFillGithub /></a>
        <a href="https://mail.google.com/mail/u/0/" target="_blank"><AiOutlineDribbble /></a>
    </div>
  )
}

export default Headersocial