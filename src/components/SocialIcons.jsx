import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
    {
        id: 1,
        url : "mailto:manuelcappai@outlook.it",
        icon : <MdEmail aria-hidden="true"/>,
        ariaLabel : "Send me an email",
        isExternal: false,
    },
    {
        id: 2,
        url: "https://github.com/ManuelCappai94",
        icon: <FaGithub aria-hidden="true"/>,
        ariaLabel : "Visit my GitHub profile",
        isExternal: true,
    },
    {
        id: 3,
        url: "https://www.linkedin.com/in/manuel-cappai-1b5507335",
        icon: <FaLinkedin aria-hidden="true"/>,
        ariaLabel : "Visit my LinkedIn profile",
        isExternal: true,
    }
]

const SocialIcons = ({listClass, linkClass}) => {
  return (
    <ul className={listClass} aria-label="Contact and social links">
      {
        socialLinks.map(social => {
            return(
                <li key={social.id}>
                    <a
                     href={social.url}
                     className={linkClass}
                     aria-label={social.ariaLabel}
                     target={social.isExternal ? "_blank" : undefined}
                     rel={social.isExternal ? "noopener noreferrer" : undefined}
                     >
                        {social.icon}
                     </a>
                </li>
            )
        })
      }
    </ul>
  )
}

export default SocialIcons
