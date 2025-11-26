import React from 'react'

const Hero = ({heroRef}) => {
  return (
    <section ref={heroRef} className='hero-section'>
      <div className='title-container'>
        <div className='titles' >
            <h1>Web</h1>
            <h2> Developer</h2>
        </div>
      </div>
      
      <article className='hero-article'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet maximus lorem, sit amet convallis neque fermentum eu. Etiam sed congue urna, ut imperdiet dolor.
        </p>
      </article>
    </section>
  )
}

export default Hero
