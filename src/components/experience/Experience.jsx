import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    
    <section id='experience'>
      <h5>Whats Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_front">
          <h3>PROGRAMMING SKILLS</h3>
          <div className="experience_content">
            <article className='experience_details'> 
                 <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>C</h4>
                  <small className='text-light'>Expert</small>
                  </div>
               
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>C++</h4>
                  <small className='text-light'>Expert</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>JAVA</h4>
                  <small className='text-light'>Moderate</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                       <div>   
                   <h4>PHP</h4>
                  <small className='text-light'>Moderate</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                       <div>   
                   <h4>DSA</h4>
                  <small className='text-light'>Moderate</small>
                  </div>
             </article>
             
             
               </div>
             </div>



        <div className="experience_back">
        <h3>OTHER SKILLS</h3>
          <div className="experience_content">
            <article className='experience_details'> 
            <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>HTML5</h4>
                  <small className='text-light'>Expert</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>CSS3/scss</h4>
                  <small className='text-light'>Expert</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>Javascript</h4>
                  <small className='text-light'>Expert</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>React-Js</h4>
                  <small className='text-light'>Experience</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                 <div>   
                   <h4>Git and GitHub</h4>
                  <small className='text-light'>Experience</small>
                  </div>
             </article>
             <article className='experience_details'> 
             <BsPatchCheckFill className='experience_icon'/>
                       <div>   
                   <h4>Bootstrap/Tailwind</h4>
                  <small className='text-light'>Experience</small>
                  </div>
             </article>
             
               </div>
             </div>
        </div>   
    
    </section>
  )
}

export default Experience