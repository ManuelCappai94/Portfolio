
import "../../../styles/hero.css"

const Hero = ({heroRef}) => {
  return (
    <section ref={heroRef} className='hero-section'>
      
      <div className='title-container'>
        <div className='titles'>
           
            <h1>Web <br/><span style={{marginLeft: 30}}>Developer</span> </h1>
        </div>
      </div>
      
      <article className='hero-article'>
        <p className='text-article'> 
          <span className='commented'>{"[--Hi, I'm Manuel--]"}</span> <br/> <br/> <span className='highlighted'>Junior</span> Web Developer. <br/> <br/>
           
           
            I'm passioanate about <span className='highlighted'> building</span>, <span className='highlighted'> learning</span>, and  <span className='highlighted'> improving</span>. <br/><br/> Welcome to <span className='highlighted'> My portfolio</span>.<br/> <span className='commented typewriter'>{'//feel free to explore.'}</span>
          
        </p>
      </article>

      <div className="hero-bg">
        <div className="corner corner-top-left"></div>
        <div className="corner corner-bottom-right"></div>
     
        <div className="scroll-indicator">
          <span className="mouse-icon"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
