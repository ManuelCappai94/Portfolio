import {React, useState, useEffect} from 'react'
import { links, SocialIcons } from '../utils/Links'
import { tagIcons, options, OptionMenu } from '../assets/Assets'
import LinksMenu from '../assets/Assets'


const Navbar = ({links}) => {
  const [isActive, setUseActive] = useState(false)
  const[isOpen, setIsOpen] = useState(false)
  const[isOn, setIsOn] = useState(false)
 

  const openMenu = () => {
    setUseActive(prev => !prev)
  }
 
  return (
<nav className='nav'>
    <header className='nav-header'>
   
      <div className='nav-logo'> 
        <h4>M.C</h4> 
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
                <li key={el.id}>
                    <button  type='button' onClick={el.action}>
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
        <button type='button' className='btn-theme' onClick={()=>setIsOn(prev => !prev)}>
          <OptionMenu isOn={isOn}/>
        </button>
        <> lenguage</>
      </aside>
    </section>
    
        <button className="btn-toggler" onClick={()=> setIsOpen(prev => !prev)}>
            <LinksMenu isActive={isOpen}/>
        </button>
 
</nav>

  )
}

export default Navbar
