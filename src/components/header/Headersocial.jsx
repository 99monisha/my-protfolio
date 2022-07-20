import React from 'react'
import{AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
const Headersocial = () => {
  return (
    <div className='header_social'>
        <a href="http://linkdin.com" target="_blank"><AiFillLinkedin /></a>
        <a href="http://github.com" target="_blank"><AiFillGithub /></a>
        <a href="http://dribble.com" target="_blank"><AiOutlineDribbble /></a>
    </div>
  )
}

export default Headersocial