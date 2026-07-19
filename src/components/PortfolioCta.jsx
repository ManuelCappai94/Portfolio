import cv from "../data/documents/cv/Manuel_Cappai_CV_Frontend_Developer.pdf"
import "../styles/portfolioCta.css"
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const CTA_ITEMS = [
  {
    id: "cv-link",
    href: cv,
    title: "View my CV",
    copy: "Explore my experience and background",
    Icon: IoDocumentTextOutline,
    variant: "cv-item"
  },
  {
    id: "repository-link",
    href: "https://github.com/ManuelCappai94?tab=repositories",
    title: "Explore repositories",
    copy: "Source code, projects, and development history.",
    Icon: FaGithub,
    variant: "repositories-item"
  }
]

const PortfolioCta = () => {
  return (
    <section
       className='cta-section'
       aria-labelledby="cta-title"
       >
      <header className="cta-header">
        <h2 id="cta-title">
         <span className="commented" aria-hidden="true"> &lt;</span>
         Take a closer look 
         <span className="commented" aria-hidden="true"> /&gt;</span>
        </h2>
        <p className="cta-copy">
          See the code behind my projects, or explore my experience through my CV.
        </p>
      </header>
      <div className="cta-layout">
        {
          CTA_ITEMS.map((item)=>(
            <CtaCard {...item} key={item.id}/>
          ))
        }
        </div>
    </section>
  )
}

const CtaCard = ({ href, title, copy, Icon, variant }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`cta-card cta-card--${variant}`}
    aria-labelledby={`cta-${variant}-title`}
  >
    <header className="cta-card-header">
      <span className="cta-card-icon" aria-hidden="true">
        <Icon />
      </span>

      <h3 id={`cta-${variant}-title`}>{title}</h3>
    </header>

    <div className="cta-card-inner">
      <p className="cta-card-copy">{copy}</p>
      <FaLongArrowAltRight className="cta-card-arrow" aria-hidden="true" />
    </div>
  </a>
);

export default PortfolioCta
