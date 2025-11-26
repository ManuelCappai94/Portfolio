import Navbar from './components/Navbar';
import Home from './screen/Home';
import ProjectDetails from './screen/ProjectDetails';

import { useRef, useEffect } from 'react';
import { links} from './utils/Links';

import './App.css';





function App() {
  

  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const skillRef = useRef(null)
  const aboutRef = useRef(null)

const ScrollToAbout = () => {
  if(!aboutRef || !aboutRef.current) return
  aboutRef.current.scrollIntoView({behavior : "smooth", block: "center"})
}


const scrollToHero = () => {
  if(!heroRef || !heroRef.current)return
  heroRef.current.scrollIntoView({behavior : "smooth", block: "center"})
}

const scrollToProjects = () => {
  if (!projectsRef || !projectsRef.current) return
  projectsRef.current.scrollIntoView({behavior : "smooth", block: "center"})
}

const scrollToSkills = () => {
  if(!skillRef || !skillRef.current) return
  skillRef.current.scrollIntoView({behavior : "smooth", block: "center"})
}

const scrollToAction = {
  hero : scrollToHero,
  projects : scrollToProjects,
  skills : scrollToSkills,
  about: ScrollToAbout,
}

  const link = links.map( link => ({
    ...link,
    action: scrollToAction[link.target]
    
  }))


  return (
    <div className="App">
      <Navbar links={link}/>
      <Home 
        heroRef={heroRef}
        projectsRef={projectsRef}
        skillRef={ skillRef}
        aboutRef={aboutRef}/>

      <ProjectDetails />
  
      
    </div>
  );
}

export default App;
