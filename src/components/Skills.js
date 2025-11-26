import React, { useState } from 'react'
import { tagIcons, mainSkills, additionalSkills } from '../assets/Assets'

const Skills = ({skillRef}) => {
const [core, setCore] = useState(mainSkills)
const [ndCore, setNdCore] = useState(additionalSkills)

  return (
    <section ref={skillRef} className='projects-section'>
      <div className='title-container prj'>
       
          <h2 className='prj-title'>
           {tagIcons.openTag}
            Skills
            {tagIcons.closeTag}
          </h2>
        
      </div>
      <article className='skills-container'>
        <span className='vertical-line'></span>
        <span className='orizzontal-line'></span>
       
          <div className='title-skills'>
            <h3>Core Skills</h3>
          </div>
          <div className='main-skills'>
            {
              core.map((skill)=>{
                return <CoreSkills key={skill.id} {...skill}/>
              })
            }
          </div>
         <span className='orizzontal-line second'></span>
          <div className='title-skills second'>
            <h3> Additional Skills</h3>
          </div>
          <div className='secondary-skills'>
            {
              ndCore.map((skill)=>{
                return <AdditionalSkills key={skill.id} {...skill}/>
              })
            }
          </div>
      </article>
      
    </section>
  )
}

const CoreSkills = ({title, icon}) => {
  return(
  <section className='single-skill' >
        <span className='icon-container'>
          {icon}
        </span>
        <p className='title-dev'>
          {title}
        </p>
  </section>
  )

}


const AdditionalSkills = ({title,subtitle, icon}) => {
  return(
    <section className='single-skill nd'>
      <span className='icon-container nd'>
        {icon}
      </span>
       <p className='title-dev nd'>
          {title}
        </p>
        <p className='subTitle-dev'>
          {subtitle || ""}
        </p>
    </section>
  )
}


export default Skills
