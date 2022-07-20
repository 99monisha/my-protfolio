import React from 'react'
import './protfolio.css'
import protfolio from '../../assets/3.webp'
import protfolio1 from '../../assets/2.webp'
import protfolio2 from '../../assets/3.webp'
import protfolio3 from '../../assets/1.webp'
import protfolio4 from '../../assets/2.webp'
const data=[
{
  id:1,
  image:protfolio1,
  title:'loreme jkdncjkd jdbjd ijhiuh dcu',
  github:'#',
  demo:'#'
},
{
  id:2,
  image:protfolio1,
  title:'loreme jkdncjkd jdbjd ijhiuh dcu',
  github:'#',
  demo:'#'
},
{
  id:3,
  image:protfolio1,
  title:'loreme jkdncjkd jdbjd ijhiuh dcu',
  github:'#',
  demo:'#'
},
{
  id:4,
  image:protfolio1,
  title:'loreme jkdncjkd jdbjd ijhiuh dcu',
  github:'#',
  demo:'#'
},
{
  id:1,
  image:protfolio3,
  title:'loreme jkdncjkd jdbjd ijhiuh dcu',
  github:'#',
  demo:'#'
},
{
  id:5,
  image:protfolio4,
  title:'loreme jkdncjkd jdbjd ijhiuh dcu',
  github:'#',
  demo:'#'
},

]

const Protfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      <div className="container protfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='protfolio_item'>
          <div className="protfolio_item_image"> 
          <img src={image} alt={title}/>
           </div>
            <h3>{title}</h3>
            <div className='protfolio_item_cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary'target='_blank'>LiveDemo</a>
            </div>
           </article> 
          )
           } )
        }
      </div>
    </section>
  )
}

export default Protfolio