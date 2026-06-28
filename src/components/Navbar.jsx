import { useEffect, useRef, useState} from 'react'
import SocialIcons from './SocialIcons'
import "../styles/navbar.css"
import { useNavigate, useLocation } from 'react-router-dom'
import { MdOutlineApps } from "react-icons/md";
import {  FaCodeBranch, FaInfo } from "react-icons/fa";
import { SlOptions, SlOptionsVertical } from "react-icons/sl";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";



const NAV_LINKS = [
  {
    id: 1,
    target: "projects",
    icon: <MdOutlineApps className="nav-icons" />,
    text: "Projects",
  },
  {
    id: 2,
    target: "skills",
    icon: <FaCodeBranch className="nav-icons" />,
    text: "Skills",
  },
  {
    id: 3,
    target: "about",
    icon: <FaInfo className="nav-icons" />,
    text: "About",
  },
];

const Navbar = ({ scrollTo, changeTheme, theme }) => {
  const [isActive, setUseActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isOn = theme === "dark-mode";
  const containerRef = useRef(null);
  const optionsRef = useRef(null);

  const handleClickCloseMenu = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setUseActive(false);
    }

    if (optionsRef.current && !optionsRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickCloseMenu);
    } else {
      document.removeEventListener("mousedown", handleClickCloseMenu);
    }

    return () => document.removeEventListener("mousedown", handleClickCloseMenu);
  }, [isActive]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickCloseMenu);
    } else {
      document.removeEventListener("mousedown", handleClickCloseMenu);
    }

    return () => document.removeEventListener("mousedown", handleClickCloseMenu);
  }, [isOpen]);

  const switchTheme = () => {
    changeTheme();
  };

  const handleClick = (target) => {
    if (location.pathname === "/") {
      scrollTo[target]();
      setUseActive(false);
      return;
    }

    navigate("/", { state: { scrollTo: target } });
    setUseActive(false);
  };

  const openMenu = () => {
    setUseActive((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="header-inner">
        <div className="header-content-mobile">
          <button
            className="nav-logo"
            type="button"
            onClick={() => handleClick("hero")}
            aria-label="Go to homepage"
          >
            <span className="logo-text">M.C</span>
          </button>

          <button
            type="button"
            className="btn nav-toggler"
            onClick={openMenu}
            aria-label={isActive ? "Close main navigation" : "Open main navigation"}
            aria-expanded={isActive}
            aria-controls="main-navigation-menu"
          >
            {
              isActive? <SlOptionsVertical/> : <SlOptions/>  
            }
          </button>
        </div>

        <div
          id="main-navigation-menu"
          ref={containerRef}
          className={isActive ? "links-container show" : "links-container"}
        >
          <nav className="main-navigation" aria-label="Main navigation">
            <ul className="nav-links">
              {NAV_LINKS.map((el) => {
                return (
                  <li key={el.id}>
                    <button type="button" onClick={() => handleClick(el.target)}>
                      <span className="button-text">
                        {el.icon} {el.text}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="social-icons-container">
            <SocialIcons listClass="social-icons" linkClass="social-icon"/>
          </div>

          <div
            id="open-option-menu"
            ref={optionsRef}
            className={isOpen ? "options-menu show" : "options-menu"}
          >
            <span className="options-text">
              {isOn ? "Dark-mode: " : "Light-mode: "}
            </span>

            <button
              type="button"
              className="btn-theme"
              onClick={switchTheme}
              aria-label={isOn ? "Switch to light mode" : "Switch to dark mode"}
            >
              {
                isOn? <LiaToggleOnSolid/> : <LiaToggleOffSolid/>
              }
            </button>
          </div>

          <button
            className="btn-toggler"
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            aria-label={isOpen ? "Close theme options" : "Open theme options"}
            aria-expanded={isOpen}
            aria-controls="open-option-menu"
          >
            {
              isOpen? <SlOptionsVertical/> : <SlOptions/>
            }
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar
