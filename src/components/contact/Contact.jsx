import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsMessenger} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
<h5>get In Touch</h5>
<h2>contact Me</h2>
<div className="container contact_container">
  <div className="contact_optins">

    <article className="contact_optin">
     <AiOutlineMail className='contact_icon'/>
      <h4>Email</h4>
      <h5>monisha@gmail.com</h5>
      <a href="mailto:monishadolai1998@gmail.com"target="_blank">Send a Message</a>
    </article>

    <article className='contact_optin'>
     <RiMessengerLine className='contact_icon'/>
      <h4>Messengar</h4>
      <h5>monisha@meaaage</h5>
      <a href="https://m.me/usernamehere" target="_blank">Send a Message</a>
    </article>

    <article className='contact_optin'>
     <BsMessenger className='contact_icon'/>
      <h4>Whatsapp</h4>
      <h5>monisha@gmail.com</h5>
      <a href="https://api.whatsapp.com/send?phone+918335939633"target="_blank">Send a Message</a>
    </article>
    </div>

    <form action="">
      <input type="text" name='name' placeholder='Enter your full name' required/>
      <input type="email" name='email' placeholder='Enter your email'required />
      <textarea name="message" id="" rows="7" placeholder='Your message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    

    </form>
   

</div>

    </section>
  )
}

export default Contact