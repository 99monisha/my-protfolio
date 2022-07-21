import React from 'react'
import './protfolio.css'
import protfolio from '../../assets/a5.png'
import protfolio1 from '../../assets/1.png'
import protfolio2 from '../../assets/2.png'
import protfolio3 from '../../assets/3.png'
import protfolio4 from '../../assets/a2.png'
const data=[
{
  id:1,
  image:protfolio1,
  title:'100 JS Projects',
  github:'https://github.com/99monisha/100-JS-PROJECTS',
  demo:'https://github.com/99monisha/100-JS-PROJECTS'
},
{
  id:2,
  image:protfolio4,
  title:'Landing Page',
  github:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design3',
  demo:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design3'
},
{
  id:3,
  image:protfolio3,
  title:'Frontend Design',
  github:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design_2',
  demo:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design_2'
},
{
  id:4,
  image:protfolio2,
  title:'Simple Pet Landing Page',
  github:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design_1',
  demo:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design_1'
},
{
  id:1,
  image:protfolio3,
  title:'Matching Game',
  github:'#',
  demo:'#'
},
{
  id:5,
  image:protfolio4,
  title:'Recipes App',
  github:'https://github.com/99monisha/COOKING-RECIPES-APP',
  demo:'https://github.com/99monisha/COOKING-RECIPES-APP'
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