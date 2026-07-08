import "../../../styles/experienceDetailsPage.css"

const ExperienceContent = (
  {
    id,
    title,
    date,
    companyLogo,
    companyLogoAlt,
    overview,
    selectedWork,
    outcomes
  }
) => {

  return (
    <article className='article-layout'>

      <section 
        className="experience-hero"
        aria-labelledby="company-name"
      >
        <header className="company-title">
            <img className="company-logo" src={companyLogo} alt={companyLogoAlt}></img>
            <h3 id="company-name"> {title}</h3>
        </header>
        <time className="experience-date">{date}</time>
      </section>

      <section
         className="experience-overview"
         aria-labelledby="overview-title"
         >
          <header className="overview-header">
            <p className="section-label">{overview.label}</p>
            <h3 id="overview-title">{overview.title}</h3>
          </header>
        <div className="overview-layout">
          <figure>
              <img 
                  src={overview.image}
                  alt={overview.imageAlt}
                  className="overview-image"
                  />
              <figcaption>
                  {overview.imageCaption}
              </figcaption>
          </figure>
        <div className="overview-text">
          {overview.paragraphs.map((paragraph, index) => (
            <p key={`${id}-overview-${index}`}>
              {paragraph}
            </p>
          ))}
        </div>
        </div>
      </section>

      <section 
        className="experience-projects"
        aria-labelledby="experience-work-title"
        >
        <header className="experience-work-heading">
          <p className="section-label">{selectedWork.label}</p>

          <h3 id="experience-work-title">
            {selectedWork.title}
          </h3>

          <p>
            {selectedWork.description}
          </p>
        </header>
        <div className="experience-work-list">
        {
            selectedWork.items.map((item)=>{
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

      <section
       className="experience-outcomes"
       aria-labelledby="experience-outcomes-title"
       >
      <header className="experience-outcomes-heading">
        <p className="section-label">{outcomes.label}</p>

        <h3 id="experience-outcomes-title">
          {outcomes.title}
        </h3>

        <p>
         {outcomes.description}
        </p>
      </header>
      <ul className="experience-outcomes-list">
        {outcomes.items.map((outcome) => (
          <li className="experience-outcome-item" key={outcome.id}>
            <span className="experience-outcome-icon" aria-hidden="true">
              ✓
            </span>

            <div className="experience-outcome-content">
              <h4>{outcome.title}</h4>
              <p>{outcome.description}</p>
            </div>
          </li>
        ))}
      </ul>

      </section>

    </article>
  )
}

export default ExperienceContent
