import React from 'react'
import { tagIcons } from '../assets/Assets'
import pc from "../images/pc.png"

function About({aboutRef}) {
  return (
    <section ref={aboutRef} className='about-section'>
      <div className='title-container prj about'>
            
               <h2 className='prj-title about'>
               
                 About Me
            
               </h2>
           </div>
           <article className='about-article'>
            <div className='about-descrizione'>
            <h4 className='title-desc'> {tagIcons.openTag}
                 Hello World
                 {tagIcons.closeTag}
             </h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante metus, egestas quis egestas vitae, congue eu eros. Ut tristique felis at arcu fermentum, ac aliquam magna fringilla. Maecenas pulvinar dui sit amet tortor pulvinar pulvinar. Donec dolor enim, vulputate ac rhoncus quis, suscipit volutpat lectus.</p>
            </div>
            <div className='about-img-cont'>
                <img className ="about-img"src={pc}></img>
            </div>
           </article>
    </section>
  )
}

export default About
