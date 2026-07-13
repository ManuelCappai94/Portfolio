import "../../../styles/projectDetails.css"
import fallBackProjects from "../../../images/fallBackProjects.png"
import { IoIosBuild } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";

const ProjectDescription = ({project}) => {
 const {
  _id,
   title,
    demoUrl,
     version,
      longDesc,
       features,
         repoUrl,
          controls,
          projectType,
          context,
          tecnologies
        } = project

  return (
   <article className='project-detail-article'>

    <header className="project-detail-intro">
      <div className="project-detail-badges">
        <span className="project-detail-badge">
          {projectType}
        </span>

        <span className="project-detail-badge">
          {context}
        </span>
      </div>

      <ul className="project-detail-stack" aria-label="Project technologies">
        {tecnologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </header>

      <section
        className="project-preview"
        aria-label={`${title} live preview`}
        >
          { 
            demoUrl ? (
              <iframe 
                src={demoUrl} 
                className={`project-preview-frame ${_id}`} 
                title={`${title} live preview`}>
                </iframe>
                  ) : (
                    <div className='project-preview-fallback'>
                      <img src={fallBackProjects} alt='Project not deployed yet' className='project-preview-fallback-image' />
                    </div>
                  )
              }
      </section>      
              
      <div className='project-detail-content'>

        <ProjectExtras controls={controls}/>
        <section 
          className="description-section"
          aria-labelledby="project-description-title"
          >
          <header className="project-section-header">
            <p className="project-section-label">Project overview</p>

            <h2 id="project-description-title" className="project-section-title">
              <span className="tag-component-prjDetails" aria-hidden="true">&lt;</span>
              Description
              <span className="tag-component-prjDetails" aria-hidden="true">/&gt;</span>
            </h2>

            <p className="project-section-intro">
              A short explanation of the project, its purpose, and its architecture.
            </p>
          </header>

            <p className='project-description-copy'>{longDesc}</p>

        </section>

              <section
                 className="features-section"
                 aria-labelledby="project-features-title"
              >
                <header className="project-section-header">
                  <p className="project-section-label">Core functionality</p>

                  <h2 id="project-features-title" className="features-title">
                    <span className="tag-component-prjDetails" aria-hidden="true">&lt;</span>
                    Features
                    <span className="tag-component-prjDetails" aria-hidden="true">/&gt;</span>
                  </h2>

                  <p className="project-section-intro">
                    The main features, interactions, and implementation details included in the project.
                  </p>
                </header>

                <div className='project-info-layout'>

                  <ul className='features'>
                    {     
                        features.map((feature, index) => {
                            return (  
                              <li className='project-feature-item' key={index}>
                                  {feature}
                              </li>
                            );
                        })  
                    }
                  </ul>
                  
                <aside className='project-meta'>  
                  <p className='project-version'><span className="meta-icon"><IoIosBuild/></span> Version: {version}</p>
                  <a 
                    href={repoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-repo-link'
                    >
                    <span className="meta-icon"><RiGitRepositoryLine/></span>  Link to {title} repository
                    </a>
                </aside>
          </div>
        </section>
      </div>  
    </article>
  )
}

const ProjectExtras = ({controls}) => {
    return (
      <>
        {
          controls && (
            <details className="project-controls">
              <summary>Controls</summary>
              <ul className='controls'>
                {
                  controls.map((info, index) =>{
                    return (
                      <li className='single-button' key={index}>
                        {info.title} {info.keys}
                      </li>
                      )
                    })
                  }
              </ul>
            </details>
            )
          }  
      </>
    )
}


export default ProjectDescription
