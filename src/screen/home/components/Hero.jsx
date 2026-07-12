import "../../../styles/hero.css"

const Hero = ({heroRef}) => {
  return (
    <section
      ref={heroRef}
       className='hero-section'
       aria-labelledby="hero-title"
       >
      <div className="hero-layout">
        <header className='title-container'>
          <div className='titles'>
            <span className='tag-component-hero' aria-hidden="true"> &lt; </span>
              <h1>Frontend<br/>Developer</h1>
            <span className='tag-component-hero' aria-hidden="true">/&gt;</span>
          </div>
        </header>
        
        <div className='hero-copy'>
          <p className='hero-copy-text'> 
            <em className='commented'>{"[--Hi, I'm Manuel--]"}</em>
            <br/>
              <br/>

            I build modern, responsive web applications with{" "}
            <strong className="highlighted">React</strong>,{" "}
            <strong className="highlighted">Next.js</strong>,{" "}
            <strong className="highlighted">TypeScript</strong>, and{" "}
            <strong className="highlighted">JavaScript</strong>.
            <br />
            <br />

            My work focuses on{" "}
            <strong className="highlighted">clean architecture</strong>,{" "}
            <strong className="highlighted">accessible interfaces</strong>, and{" "}
            <strong className="highlighted">reliable user experiences</strong>.
            <br />
            <br />

            Welcome to <strong className='highlighted'> My portfolio</strong>.<br/>
            <em className='commented typewriter'>{'//feel free to explore.'}</em>
          </p>
        </div>

        <div className="hero-bg" aria-hidden="true">
          <div className="corner corner-top-left"></div>
          <div className="corner corner-bottom-right"></div>
      
          <div className="scroll-indicator">
            <span className="mouse-icon"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
