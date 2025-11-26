import { FaGithub, FaCodeBranch, FaInfo } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6"
import { MdHomeFilled, MdOutlineApps } from "react-icons/md";



 const links = [
    {
        id: 1,
        url: "/",
        target: "hero",
        icon: <MdHomeFilled className="nav-icons"/>,
        text: "Home",
    },
    {
        id: 2,
        url: "/",
        target: "projects",
        icon: <MdOutlineApps className="nav-icons"/>,
        text: "Projects"
    },
    {
        id: 3,
        url: "/",
        target: "skills",
        icon: <FaCodeBranch className="nav-icons"/>,
        text: "Skills"
    },
    {
        id: 4,
        url: "/",
        target: "about",
        icon: <FaInfo className="nav-icons"/>,
        text: "About"
    }
]

const socialLinks = [
    {
        id: 1,
        url: "https://github.com/",
        icon: <FaGithub className="social-icon"/>
    },
    {
        id: 2,
        url: "https://www.instagram.com/",
        icon: <FaSquareInstagram className="social-icon"/>
    }
]



const SocialIcons = () => {
  return (
    <ul className='social-icons'>
        {
        socialLinks.map((el)=>{
            return (
                <li key={el.id}>
                        <a href={el.url}>
                            {el.icon}
                        </a>
                    </li>
                )
              })
            } 
    </ul>
  )
}





export {links, SocialIcons}