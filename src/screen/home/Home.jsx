
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import PortfolioCta from '../../components/PortfolioCta'


const Home = ({heroRef, projectsRef, skillRef, aboutRef}) => {
  return (
    <>
      <Hero heroRef={heroRef}/>
      <Projects projectsRef={projectsRef}/>
      <Skills skillRef={skillRef}/>
      <PortfolioCta/>
    </>
  )
}

export default Home
