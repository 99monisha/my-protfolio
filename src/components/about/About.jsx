import React from 'react'
import './about.css'
import ME from '../../assets/a2.jpg'
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
      <h5>Experiencs</h5>
      <small>I donat have experiencs</small>
    </article>

    <article className='about_card'>
       <FiUsers className='about_icon'/>
      <h5>Experiencs</h5>
      <small>I donat have experiencs</small>
    </article>

    <article className='about_card'>
       <FaFolder className='about_icon'/>
      <h5>Experiencs</h5>
      <small>I donat have experiencs</small>
    </article>
  </div>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sequi magni! Sequi voluptatibus 
    commodi natus exercitationem impedit 
    repellat maiores sed, soluta iste, veritatis doloremque, ipsum dolorum odit
     pariatur rem doloribus.</p>

     <a href="#contact" className='btn btn-primary'>Let's Talk</a>

</div>

     </div>
   
   
   </section>
  )
}

export default About