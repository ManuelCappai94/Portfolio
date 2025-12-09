import { useState} from 'react'
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
<nav className='nav'>
    <header className='nav-header'>
   
      <div className='nav-logo'> 
        <h4 className='logo-text'>M.C</h4> 
      </div>
        <button className="btn nav-toggler" onClick={()=> openMenu()}>
            <LinksMenu isActive={isActive}/>
        </button>
      </header>
<section className={isActive? 'links-container show ' : 'links-container ' }>
        <ul className='nav-links'>
          <li style={{marginTop: 6, marginRight: 0}}>{tagIcons.openTag}</li>
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
      <li style={{marginTop: 6, marginLeft: 0}}>{tagIcons.closeTag}</li>
        </ul>
    
       <div className='social-icons-container'>
        <SocialIcons/>
       </div> 
      <aside className={isOpen? 'options-menu show' : "options-menu"}>
        <span className='options-text'>
         {isOn? "Dark-mode: ": "Light-mode: " }
          </span>
        <button type='button' className='btn-theme' onClick={switchTheme}>
          <OptionMenu isOn={isOn}/>
        </button>
      </aside>
          <button className="btn-toggler" onClick={()=> setIsOpen(prev => !prev)}>
            <LinksMenu isActive={isOpen}/>
        </button>
    </section>
    
    
 
</nav>

  )
}

export default Navbar
