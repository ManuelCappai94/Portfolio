import {useState, useEffect, useRef} from 'react'
import "../../../styles/projectDetails.css"

const ProjectDescription = ({project}) => {
const [isfullScreen, setIsFullscreen] = useState(false)
  const contRef = useRef(null)
 const {_id, title, demoUrl, version, longDesc, features, howToUse, repoUrl, controls} = project

  const goFullScreen = ()=>{  
    setIsFullscreen(prev => !prev)
  }

    useEffect(()=>{
       
      const element = contRef.current
      if(!element) return

      if(isfullScreen){
        element.requestFullscreen()
      } else {
        if(document.fullscreenElement){
          document.exitFullscreen()
        }
      }
    }, [isfullScreen])

  return (
   <article className='single-prj-container'>
              <h1 className='project-title'><span className='tag-details'>&lt;</span>{title}<span className='tag-details'>/&gt;</span></h1>
              <ProjectExtras controls={controls} howToUse={howToUse}/>
              <div className='prj-view-cont' ref={contRef}>
                <iframe src={demoUrl} className={`prj-view ${_id}`} title={title}>
                </iframe>
                  <button className={_id === "Game_Prototype"? "fullbtn game": "fullbtn"} onClick={goFullScreen}>FullScreen</button>
              </div>  
              
              <div className='desc-container'>
                    <h5 className='desc-title'>!Description</h5>
                  <p className='long-desc'>{longDesc}</p>
                  <div className='coloums'>

                  
                  <ul className='features'>
                     <li>[--Features--]</li>
                    {     
                        features.map( (feature, index) => {
                            return (
                                  
                                <li className='single-feature' key={index}>
                                    {feature}
                                </li>
                            )
                        })  
                    }
                  </ul>
                    <aside className='sido-info'>  
                        <p className='version'>Version: {version}</p>
                        <a 
                        href={repoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='repo-url'
                        >Link to {title} repository</a>
                    </aside>
                    </div>
             </div> 
         
        </article>
  )
}

const ProjectExtras = ({controls, howToUse}) => {
    return (
        <>
         {
            controls && (
                <details>
                    <summary>controls</summary>
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
          {
            howToUse && (
              <details>
                <summary>How To Use</summary>
                <ul className='controls'>
                  {
                    howToUse.map((info, index)=>{
                      return (
                        <li className='single-button' key={index}>
                          {info}
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
