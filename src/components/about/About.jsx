import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaFolder} from 'react-icons/fa'




const About = () => {
  return (
   <section id='about'>
     <h5>Get to Know</h5>
     <h2>About Me</h2>
     <div className="container about_container">
<div className="about_me">
  <div className="about_my_image">
<img src={ME} alt="my image"/>
  </div>

</div>
<div className="about_content">
  <div className="about_cards">
    <article className='about_card'>
       <FaAward className='about_icon'/>
      <h5>ACHIVEMENTS</h5>
      <small>Solved over 150 DSA programs on HAKERRANK</small>
    </article>

    <article className='about_card'>
       <FiUsers className='about_icon'/>
      <h5>INTEREST</h5>
      <small>Website Design and Development</small>
    </article>

    <article className='about_card'>
       <FaFolder className='about_icon'/>
      <h5>PROJECTS</h5>
      <small>Creats differents types of projects and post on Github</small>
    </article>
  </div>

  <p>To secure a challenging position in the organization where I can effectively
contribute my skills and
knowledge as a professional
executive.
It would be my never ending
dedication to maintain the
spectrum of integrity and
honesty.
.</p>

     <a href="#contact" className='btn btn-primary'>Let's Talk</a>

</div>

     </div>
   
   
   </section>
  )
}

export default About