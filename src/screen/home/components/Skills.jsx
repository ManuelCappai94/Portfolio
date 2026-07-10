import { mainSkills, additionalSkills } from '../../../data/uiData'
import "../../../styles/skills.css"

const Skills = ({skillRef}) => {
const core = mainSkills
const ndCore = additionalSkills

  return (
    <section 
     ref={skillRef}
     className='projects-section skills'
     aria-labelledby="skills-section-title">

      <header className='title-container skills'>
          <h2 id="skills-section-title" className='skills-main-title'>
          <span className='tag-component-skill' aria-hidden="true"> &lt;</span>
            Skills
           <span className='tag-component-skill' aria-hidden="true">/&gt;</span>
          </h2>
          <p className='skills-copy'>A practical skill set developed through projects, focused study, and professional experiences, strengthened by continuous improvement.</p>
      </header>
      
      <div className='skills-container'>
        <span className='vertical-line' aria-hidden="true"></span>
        <span className='orizzontal-line' aria-hidden="true"></span>
       
       <section 
        className='core-skills-section'
        aria-labelledby='core-skills-title'>
            <h3
             id='core-skills-title'
             className='title-skills'
             >
                Core Skills
              </h3>
          <ul className='main-skills'>
            {
              core.map((skill)=>{
                return <SkillItem key={skill.id} {...skill}/>
              })
            }
          </ul>
        </section>

      <span className='orizzontal-line second' aria-hidden="true"></span>

       <section 
        className='secondary-skills-section'
        aria-labelledby='secondary-skills-title'>
            <h3
             id='secondary-skills-title'
             className='title-skills second'
             >
                Additional Skills
              </h3>
          <ul className='secondary-skills'>
          {
              ndCore.map((skill)=>{
                return <SkillItem key={skill.id} {...skill} modifier='nd'/>
              })
            }
          </ul>
        </section>

      </div>
      <div className="corner-skill bottom-right" aria-hidden="true"></div>
      <div className="corner-skill bottom-left" aria-hidden="true"></div>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="mouse-icon"></span>
      </div>
    </section>
  )
}

const SkillItem = ({ title, subtitle, icon, modifier = "" }) => {
  const getClassName = (baseClass) =>
    modifier ? `${baseClass} ${modifier}` : baseClass;

  return (
    <li className={getClassName("single-skill")}>
      <span
        className={getClassName("icon-container")}
        aria-hidden="true"
      >
        {icon}
      </span>

      <p className={getClassName("title-dev")}>
        {title}
      </p>

      {subtitle && (
        <p className="subTitle-dev">
          {subtitle}
        </p>
      )}
    </li>
  );
};


export default Skills
