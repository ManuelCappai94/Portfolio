import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'

const Home = ({heroRef, projectsRef, skillRef, aboutRef}) => {
  return (
    <>
      <Hero heroRef={heroRef}/>
      <Projects projectsRef={projectsRef}/>
      <Skills skillRef={skillRef}/>
      <About aboutRef ={aboutRef}/>
    </>
  )
}

export default Home
