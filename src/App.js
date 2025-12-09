import Navbar from './components/Navbar';
import Home from './screen/home/Home';
import ProjectDetails from './screen/projectDetails/ProjectDetails';
import ErrorePage from './screen/ErrorePage';
import { useRef, useEffect, useState } from 'react';

import {  Route, Routes, useLocation } from 'react-router-dom';
import "./styles/global.css"



function App() {
  
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const skillRef = useRef(null)
  const aboutRef = useRef(null)
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


const scrollTo = {
  hero: () => heroRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
  projects: () => projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "center"}),
  skills: () => skillRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
  about: () => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
};



  //     useEffect(() => {
  //   if (location.state?.scrollTo === "projects") {
  //     scrollToProjects();
  //   } else if (location.state?.scrollTo ==="hero"){
  //     scrollToHero()
  //   } else if (location.state?.scrollTo === "skills"){
  //     scrollToSkills();
  //   } else if(location.state?.scrollTo === "about"){
  //     ScrollToAbout();
  //   }
  // }, [location]);

useEffect(() => {
  const target = location.state?.scrollTo;
  if (target && scrollTo[target]) {
    scrollTo[target]();
  }
}, [location]);


  return (
    <div className="App">
      <Navbar scrollTo={scrollTo} changeTheme={changeTheme} theme={theme}/>
        <Routes>
          < Route path='/' element={<Home 
              heroRef={heroRef}
              projectsRef={projectsRef}
              skillRef={ skillRef}
              aboutRef={aboutRef}
               />}/>
          <Route path='/projectDetails/:id' element={<ProjectDetails />}/>
          <Route path='*' element={ErrorePage}/>
         
        </Routes>  
         <footer>© 2025 Manuel</footer>
    </div>
  );
}

export default App;
