import "../../../styles/experienceDetailsPage.css"
import companyLogo from "../../../images/Mayerfeld-Consulting-logo-profile.jpg" 
import finalScore from "../../../images/final-score-review-screenshot.jpeg" 
import {workItems, outcomes} from "../../../data/experienceData"

const ExperienceContent = () => {
  return (
    <article className='article-layout'>

      <section 
        className="experience-hero"
        aria-labelledby="company-name"
      >
        <header className="company-title">
            <img className="company-logo" src={companyLogo} alt="Mayerfeld logo"></img>
            <h3 id="company-name"> Mayerfeld Consulting Practicum</h3>
        </header>
        <time className="experience-date">June 2026 – July 2026</time>
      </section>

      <section
         className="experience-overview"
         aria-labelledby="overview-title"
         >
        <div className="overview-heading">
            <h3 id="overview-title">Experience Overview</h3>
        </div>
        <figure>
            <img 
                src={finalScore}
                 alt="screenshot of FinalScoreReview WebSite"
                 className="overview-image"
                 />
            <figcaption>
                Hero of FinalScoreReviews, developed during the Practicum
            </figcaption>
        </figure>
        <p>
            The Mayerfeld Consulting Frontend Practicum was a project-based programme
            built around weekly assignments, teamwork, presentations, and code reviews.
            It placed strong emphasis on semantic HTML, accessibility, clean and
            maintainable code, and delivering working projects within defined deadlines.
            <br />
            <br />
            The programme also introduced security concerns such as prompt injection and
            possible mitigation strategies, while giving me practical experience with
            shared Git workflows, task coordination, conflict resolution, debugging, and
            improving code produced within a team.
            <br />
            <br />
            It also included an introduction to AI-assisted development through Vercel
            v0, covering its workflow, different prompting approaches, and how the
            platform turns requirements into generated interfaces and application code.
        </p>
      </section>

      <section 
        className="experience-projects"
        aria-labelledby="experience-work-title"
        >
        <header className="experience-work-heading">
          <p className="section-label">Selected work</p>

          <h3 id="experience-work-title">
            Projects completed during the practicum
          </h3>

          <p>
            Six assignments covering semantic HTML, responsive design,
            JavaScript logic, DOM interaction, teamwork, and browser-based game
            development.
          </p>
        </header>
        <div className="experience-work-list">
        {
            workItems.map((item)=>{
                const workTitleId = `work-title-${item.id}`;

                return(
                    <article
                     key={item.id}
                      className="work-list-layout"
                      aria-labelledby={workTitleId}
                      >
                        <header className="work-header">
                            <h4 id={workTitleId}>{item.title}</h4>
                            <p className="work-type">{item.type}</p>
                        </header>

                        <div className="work-list-desc">
                            <p>{item.description}</p>
                        </div>
                            {
                                item.links
                                ? <a
                                className="work-repository-link"
                                 href={item.links.href}
                                 rel="noopener noreferrer"
                                 target="_blank"
                                 >
                                    {item.links.label}
                                </a>
                                  : ""
                            }
                    </article>
                )
            })
        }
        </div>
      </section>

      <section className="experience-outcomes">

      </section>

    </article>
  )
}

export default ExperienceContent
