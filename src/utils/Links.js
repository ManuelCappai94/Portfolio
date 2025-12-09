import { FaGithub, FaCodeBranch, FaInfo } from "react-icons/fa";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6"
import { SiNetlify } from "react-icons/si";







const socialLinks = [
    {
        id: 1,
        url: "https://github.com/ManuelCappai94?tab=repositories",
        icon: <FaGithub className="social-icon"/>
    },
    {
        id: 2,
        url: "https://www.instagram.com/",
        icon: <FaSquareInstagram className="social-icon"/>
    },
    {
        id: 3,
        url: "https://app.netlify.com/teams/manuelcappai94/projects?creator=me",
        icon: <SiNetlify className="social-icon"/>
    },
    {
        id: 4,
        url: "https://app.netlify.com/teams/manuelcappai94/projects?creator=me",
        icon: <FaLinkedin className="social-icon"/>
    },
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





export { SocialIcons}