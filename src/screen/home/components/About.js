
import pc from "../../../images/pc.png"
import "../../../styles/about.css"

function About({aboutRef}) {
  return (
    <section ref={aboutRef} className='projects-section'>
      <div className='title-container about'>
               <h2 className='title-about'>
                 About Me
               </h2>
           </div>
           <article className='about-article'>
            <div className='about-descrizione'>
            <h4 className='title-desc'> 
                <span className='tag-component'> &lt; </span>Hello World<span className='tag-component'>/&gt;</span>
             </h4>
              <p>
                I'm Manuel Cappai, a <span className='highlighted'>Junior Web Developer </span> from <span className='string'>Italy</span>. <br/> My journey began experimenting with <span className='highlighted'>HTML</span> and <span className='highlighted'>CSS</span>, <span className='commented'>{'[--just for fun--]'}</span> and then... <span className='highlighted'>JavaScript</span> completely hooked me. The more I learned, the more I realizd that <span className='string'>building digital experiences</span> was exactly, what I wanted to do. <br/>
                Since then, I've been creating <span className='string'>web apps</span>, <span className='commented'>{'//imporoving my skills'}</span> and expanding my knowledge into modern tools like <span className='highlighted'>TypeScript</span> and <span className='highlighted'>React</span>. <br/><br/>
                
                I also love to explore new sides of development <span className='commented'>{'[--in the future--]'}</span>, I&#8217;d like to dive deeper into <span className='highlighted'>backend technologies</span> and even <span className='highlighted'>low-level programming</span>, just to understand how things really work behind the scenes. <br/><br/>
              <span className='string' style={{fontWeight: "bold"}}>"I want to become a better Developer!"</span>
              <br/><br/> Check my <a 
                href="https://1drv.ms/b/c/5e037bc7a8950ec9/IQADSW1W6ynYTIIOU8vM6rFNAe4P14E7ZJa9MSN2v6GN6nc?e=FSwG9U"
                target='_blank'
                rel='noopener noreferrer'
                className='commented'>
                CV
              </a> and my <a
                href="https://github.com/ManuelCappai94?tab=repositories"
                target='_blank'
                rel='noopener noreferrer'
                className='commented'>
                Repositories</a> for more details.
             </p>
            </div>
            <div className='about-img-cont'>
                <img className ="about-img"src={pc} alt="Developer at a computer"></img>
            </div>
           </article>
            <div className="corner corner-top-left-prj"></div>
        <div className="corner corner-bottom-right"></div>
    </section>
  )
}

export default About
