import Navbar from './components/Navbar';
import Home from './screen/home/Home';
import ProjectDetails from './screen/projectDetails/ProjectDetails';
import ErrorePage from './screen/ErrorePage';
import Footer from './components/Footer';
import Experience from './screen/experience/Experience';
import ExperiencePageLayout from './screen/experience/components/ExperiencePageLayout';
import AboutPage from './screen/about/AboutPage';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import "./styles/global.css"



function App() {
  
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const skillRef = useRef(null)
  const location = useLocation()

  const getFromLocalStorage =() =>{
  if (localStorage.getItem("theme")){
    return localStorage.getItem("theme")
  } else {
  return "light-mode"
  }
  }

  const [theme, setTheme] = useState(getFromLocalStorage())

  const changeTheme = () => {
    
    if(theme === "light-mode"){
      setTheme("dark-mode")
      
    } else {
      setTheme("light-mode")
  
    }
  }

useEffect(()=>{
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme)
}, [theme])



const scrollToHero = useCallback(() => {
  heroRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
}, []);

const scrollToProjects = useCallback(() => {
  projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
}, []);

const scrollToSkills = useCallback(() => {
  skillRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
}, []);



const scrollTo = useMemo(() => ({
  hero: scrollToHero,
  projects: scrollToProjects,
  skills: scrollToSkills,
}), [scrollToHero, scrollToProjects, scrollToSkills]);



useEffect(() => {
  const target = location.state?.scrollTo;
  if (target && scrollTo[target]) {
    scrollTo[target]();
  }
}, [location, scrollTo]);


  return (
    <div className="App" translate='no'>
      <Navbar scrollTo={scrollTo} changeTheme={changeTheme} theme={theme}/>
        <main className='main-page-content'>
          <Routes>
            < Route path='/' element={<Home 
                heroRef={heroRef}
                projectsRef={projectsRef}
                skillRef={ skillRef}
                />}/>
            <Route path='/projectDetails/:id' element={<ProjectDetails />}/>
            <Route path='/experience' element={<Experience/>}></Route>
            <Route path="/experience/:id" element={<ExperiencePageLayout/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='*' element={<ErrorePage/>}/>
          </Routes>  
        </main>
      <Footer/>
    </div>
  );
}

export default App;
