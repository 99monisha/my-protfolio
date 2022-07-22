import React from 'react'
import './protfolio.css'
import protfolio1 from '../../assets/1.png'
import protfolio2 from '../../assets/filtering.png'
import protfolio3 from '../../assets/flashcard.png'
import protfolio4 from '../../assets/note.png'
import protfolio5 from '../../assets/petland.png'
import protfolio6 from '../../assets/recipe1.png'
import protfolio7 from '../../assets/recipe2.png'
import protfolio8 from '../../assets/todolist.png'
import protfolio9 from '../../assets/a5.png'
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
  image:protfolio2,
  title:'Name Searching Mini App',
  github:'https://github.com/99monisha/100-JS-PROJECTS/tree/main/66_project-serachfiltering',
  demo:'https://monisha-name-search.netlify.app/'
},
{
  id:3,
  image:protfolio3,
  title:'Flash Cards Mini App',
  github:'https://github.com/99monisha/100-JS-PROJECTS/tree/main/92_project',
  demo:'https://monishas-flash-card.netlify.app/'
},
{
  id:4,
  image:protfolio4,
  title:'Mini Notes App',
  github:'https://github.com/99monisha/100-JS-PROJECTS/tree/main/91_project-basicNotesapp',
  demo:'https://monishas-daily-dairy.netlify.app/'
},
{
  id:5,
  image:protfolio5,
  title:'Pet Landing Page',
  github:'#',
  demo:'https://monishas-pet-landingpage.netlify.app/'
},
{
  id:6,
  image:protfolio7,
  title:'Youtube Mini Recipe',
  github:'https://github.com/99monisha/COOKING-RECIPES-APP',
  demo:'https://monishasrecipes.netlify.app/'
},
{
  id:7,
  image:protfolio6,
  title:'Recipes Searching App',
  github:'https://github.com/99monisha/100-JS-PROJECTS/tree/main/53-project-ne%20js%20app',
  demo:'https://monishas-recipes.netlify.app/'
  
  
},

{
  id:8,
  image:protfolio8,
  title:'Todo List',
  github:'https://github.com/99monisha/100-JS-PROJECTS/tree/main/57-project-todo-list',
  demo:'https://monisha-todolist.netlify.app/'
},
{
  id:9,
  image:protfolio9,
  title:'Frontend Design',
  github:'https://github.com/99monisha/FRONTEND-PAGE-DESIGN/tree/main/design3',
  demo:'https://gleaming-moonbeam-efbb6d.netlify.app/'
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