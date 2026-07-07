import InnerPageHeader from "../../components/InnerPageHeader"
import { useNavigate, Link } from "react-router-dom"
import "../../styles/experiencePage.css"
import { experienceCardsData, certificationsData } from "../../data/Data"


const Experience = () => {
    const navigate = useNavigate()
  return (
    <section className="experience-page">
        <InnerPageHeader
            goBackTo={()=> navigate("/")}
            actionLabel={"Back to Home"}
            pageTitle={"Work Experience"}
        /> 
        <header className="experience-intro">
            <p className="section-label">Professional journey</p>
            <h2 className="section-label-title">
                <span className="highlighted">Experiences that shaped how I work</span>
            </h2>
            <p className="experience-intro-copy">
                A selection of{" "}
                <strong className="highlighted">technical</strong> and{" "}
                <strong className="string">international experiences</strong> that shaped
                how I approach frontend development, teamwork, communication, and
                project delivery. This page also collects{" "}
                <strong className="commented">professional credentials</strong> and
                recommendations that support that journey.
            </p>
        </header>
        <section 
            className="experience-list"
            aria-labelledby="featured-experiences-title"
            >
            <header className="experience-section-header">
                <p className="section-label">Experience</p>
                <h2 id="featured-experiences-title" className="section-label-title">
                    <span className="highlighted">Featured experiences</span>
                </h2>
                <p className="section-copy">
                    Explore the{" "}
                    <strong className="string">environments</strong>, responsibilities, and
                    challenges that contributed to my{" "}
                    <strong className="commented">professional development</strong>.
                </p>
            </header>
            <div className="experience-cards">
                {
                    experienceCardsData.map((card)=>{
                        return <ExperienceCard key={card._id} {...card}/>
                    })
                }
            </div>   
        </section>

        <section
         className="credentials"
         aria-labelledby="credentials-title"
         >
            <header className="experience-section-header">
                <p className="section-label">Professional validation</p>
                <h2 id="credentials-title" className="section-label-title">
                    <strong className="highlighted">Credentials and recommendations</strong>
                </h2>
                <p className="section-copy">
                        Certifications and{" "}
                    <strong className="string">external references</strong> that document my
                    training, professional conduct, and contribution to{" "}
                    <strong className="commented">collaborative work</strong>.
                </p>
            </header>

            <div className="credentials-layout">
                <section className="certifications">
                    <header className="credentials-panel-header">
                        <h3 id="certifications-title">Certifications</h3>
                    </header>
                    {
                    certificationsData.map((item)=>(
                        <article
                            key={item.id}
                            className="certification-card"
                            >
                            <div className="certification-card-heading">
                                <h4 className="certification-issuer">{item.issuer}</h4>
                                <time className="certification-date">{item.date}</time>
                            </div>
                            <div className="certification-title">
                            <p>{item.title}</p>
                            </div>
                        </article>
                    ))
                    }
                </section>
                <section
                    className="recommendations" >
                    
            
                </section>
            </div>
        </section>
        
    </section>
  )
}

const ExperienceCard = ({title, label, date, description, image, imageAlt})=>{
    return(
    <Link
        to={label}
        relative="path"
        className="experience-card-link"
        aria-label={`View details about ${title}`}
        >
      <article className="experience-card">
        <div className="experience-card-image">
          <img src={image} alt={imageAlt} />
        </div>

        <div className="experience-card-content">
          <time className="experience-card-date">{date}</time>

          <h3 className="experience-card-title">{title}</h3>

          <p className="experience-card-description">{description}</p>

          <span className="experience-card-action" aria-hidden="true">
            Explore experience →
          </span>
        </div>
      </article>
    </Link>
    )
}

export default Experience
