
import { mainSkills, additionalSkills } from '../../../utils/Assets'
import "../../../styles/skills.css"


const Skills = ({skillRef}) => {
const core = mainSkills
const ndCore = additionalSkills

  return (
    <section ref={skillRef} className='projects-section skills'>
      <div className='title-container skills'>
       
          <h2 className='skills-main-title'>
          <span className='tag-component-skill'> &lt;</span>
            Skills
           <span className='tag-component-skill'>/&gt;</span>
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
      <div className="corner-skill bottom-right"></div>
      <div className="corner-skill bottom-left"></div>
        <div className="scroll-indicator">
          <span className="mouse-icon"></span> </div>
    </section>
  )
}

const CoreSkills = ({title, subtitle, icon}) => {
  return(
  <section className='single-skill' >
        <span className='icon-container'>
          {icon}
        </span>
        <p className='title-dev'>
          {title}
        </p>
          <p className='subTitle-dev'>
          {subtitle || ""}
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
