import React from 'react'
import './testimonials.css'
import meto from '../../assets/1.webp'
import meto1 from '../../assets/a5.jpg'
import meto2 from '../../assets/a2.jpg'
import meto3 from '../../assets/a5.jpg'

import {Pagination} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
const data=[
  {
    avatar:meto,
    name:'Moisha dolai',
    review:'lorem2 jsj hjsxx dxds xyudgxdy ydg dxddg yudgx d gd ydhd gx'
  },
  {
    avatar:meto1,
    name:'Moisha dolai',
    review:'lorem2 jsj hjsxx dxds xyudgxdy ydg dxddg yudgx d gd ydhd gx'
  },
  {
    avatar:meto2,
    name:'Moisha dolai',
    review:'lorem2 jsj hjsxx dxds xyudgxdy ydg dxddg yudgx d gd ydhd gx'
  },
  {
    avatar:meto3,
    name:'Moisha dolai',
    review:'lorem2 jsj hjsxx dxds xyudgxdy ydg dxddg yudgx d gd ydhd gx'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews froms the clients</h5>
      <h2>testimonials</h2>
      <Swiper className="container testi_container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      
        pagination={{ clickable: true }}>
    
       
            {
              data.map(({avatar,name,review},index)=>{
                return(
                  <SwiperSlide key={index} className='testi'>
                  <div className="clint_meto">
                  <img src={avatar}alt="meto imag" />
            
          </div>
          <h5>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>
                )
              })
            }
      </Swiper>
    
    </section>
  )
}

export default Testimonials