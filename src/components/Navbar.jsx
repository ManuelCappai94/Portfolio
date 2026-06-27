import { useEffect, useRef, useState} from 'react'
import { SocialIcons } from '../utils/Links'
import LinksMenu, { tagIcons, OptionMenu }from '../utils/Assets'
import "../styles/navbar.css"
import { useNavigate, useLocation } from 'react-router-dom'
import { MdHomeFilled, MdOutlineApps } from "react-icons/md";
import {  FaCodeBranch, FaInfo } from "react-icons/fa";


const Navbar = ({scrollTo, changeTheme, theme}) => {
  const [isActive, setUseActive] = useState(false)
  const[isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const isOn = theme === "dark-mode"
  const containerRef = useRef(null)
  const optionsRef = useRef(null)

 const links = [
    {
        id: 1,
        target: "hero",
        icon: <MdHomeFilled className="nav-icons"/>,
        text: "Home",
     
    },
    {
        id: 2,
        target: "projects",
        icon: <MdOutlineApps className="nav-icons"/>,
        text: "Projects",
       
    },
    {
        id: 3,
        target: "skills",
        icon: <FaCodeBranch className="nav-icons"/>,
        text: "Skills",
 
    },
    {
        id: 4,
        target: "about",
        icon: <FaInfo className="nav-icons"/>,
        text: "About",
     
    },
]
const handleClickCloseMenù = (e) => {
  if (containerRef.current && !containerRef.current.contains(e.target)) {
    setUseActive(false)
  }
  if (optionsRef.current && !optionsRef.current.contains(e.target)) {
    setIsOpen(false)
  }
}
useEffect(()=>{
  if(isActive){
    document.addEventListener("mousedown", handleClickCloseMenù)
  } else {
    document.removeEventListener("mousedown", handleClickCloseMenù)
  }
  return ()=> document.removeEventListener("mousedown", handleClickCloseMenù)
}, [isActive])

useEffect(()=>{
  if(isOpen){
    document.addEventListener("mousedown", handleClickCloseMenù)
  } else {
    document.removeEventListener("mousedown", handleClickCloseMenù)
  }
  return ()=> document.removeEventListener("mousedown", handleClickCloseMenù)
}, [isOpen])
  


  const switchTheme = () =>{
    changeTheme()
  }

  const handleClick = ( target) =>{
    if(location.pathname === "/"){
      scrollTo[target]() 
    }
    navigate("/", {state: {scrollTo: target}} )
  }


  const openMenu = () => {
    setUseActive(prev => !prev)
  }
 
  return (
<header className='header-container'>
  <div className="header-inner">
    <div className='header-content-mobile'>
   
      <button
        className='nav-logo'
        type="button"
        onClick={()=> handleClick("hero")}
        aria-label="Go to homepage"
      > 
        <span className="logo-text">M.C</span>
      </button>
      <button
          type="button"
          className="btn nav-toggler"
          onClick={()=> openMenu()}
          aria-label={isActive? "Close main navigation" : "Open main navigation"}
          aria-expanded={isActive}
          aria-controls="main-navigation-menu"
          >
            <LinksMenu isActive={isActive}/>
        </button>
    </div>

    <div
      id="main-navigation-menu"
      ref={containerRef}
      className={isActive? 'links-container show ' : 'links-container ' }
      >
      <nav className="main-navigation" aria-label="Main navigation">
        <ul className='nav-links'>
            <li style={{marginTop: 6, marginRight: 0}} aria-hidden="true">{tagIcons.openTag}</li>
              {
                links.map((el)=>{
                  return (
                    <li key={el.id} >
                      <button  type='button' onClick={()=>handleClick(el.target)}>
                        <span className='button-text'>
                          {el.icon} {el.text}
                        </span>
                      </button>
                  </li>
              )
            })
          }
            <li style={{marginTop: 6, marginLeft: 0}} aria-hidden="true">{tagIcons.closeTag}</li>
        </ul>
      </nav>

      <div className='social-icons-container'>
        <SocialIcons/>
      </div> 
        <div
          id="open-option-menu"
          ref={optionsRef} 
          className={isOpen? 'options-menu show' : "options-menu"}
          >
            <span className='options-text'>
            {isOn? "Dark-mode: ": "Light-mode: " }
            </span>
            <button 
              type='button'
              className='btn-theme'
              onClick={switchTheme}
              aria-label={isOn ? "Switch to light mode" : "Switch to dark mode"}
              >
              <OptionMenu isOn={isOn}/>
            </button>
        </div>
        <button 
          className="btn-toggler"
          onClick={()=> setIsOpen(prev => !prev)}
          type='button'
          aria-label={isOpen? "Close theme options" : "Open theme options"}
          aria-expanded={isOpen}
          aria-controls="open-option-menu"
           >
              <LinksMenu isActive={isOpen}/>
        </button>
      </div>
  </div>
</header>
  )
}

export default Navbar
