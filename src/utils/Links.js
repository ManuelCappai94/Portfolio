import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"








const socialLinks = [
    {
        id: 1,
        url: "https://github.com/ManuelCappai94?tab=repositories",
        icon: <FaGithub className="social-icon"/>
    },
    {
        id: 2,
        url: "https://www.linkedin.com/in/manuel-cappai-1b5507335",
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