import {useState, useEffect, useCallback} from 'react'
import { data } from '../../../data/projectsPageData'
import fallBackImg from "../../../images/fallBack.png"
import { FaCircle } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "../../../styles/projects.css"




const Projects = ({projectsRef}) => {
    const slides = data
    const [active, setActive] = useState(0)
 
    const [touchStart, setTouchStart] = useState(0)
   
    const nextSlide = useCallback(() => {
        setActive(prevValue => {
            if ( prevValue >= slides.length - 1) return 0
            return prevValue + 1
        })}, [slides.length])

    const prevSlide = () => {
        setActive(prevValue => {
         if ( prevValue === 0 ) return slides.length - 1
            return prevValue - 1
        }) 
    }

    const handleTouch = (e) => {
        const finalX = e.changedTouches[0].clientX;
                const distance = finalX - touchStart
               
        if(distance > -50 && distance < 50) return 
          if( distance < 50) {
            nextSlide()
          } else if (distance > 50){
            prevSlide()
          }
    }

useEffect (() => {
   const timer = setTimeout(()=> {
        nextSlide()
    }, 4000)
    return() => clearTimeout(timer)
}, [active, nextSlide])


  return (
    <section
      ref={projectsRef}
      className='projects-section'
      aria-labelledby='projects-section-title'
      >
        <header className='title-container prj'>
            <h2 id='projects-section-title' className='prj-title'>
               <span className='tag-component-prj' aria-hidden="true"> &lt; </span>
                    Projects
                <span className='tag-component-prj' aria-hidden="true">/&gt;</span>
            </h2>
            <p className='header-copy'>A selection of projects that show how I turn ideas into working web experiences. </p>
        </header>

        <div 
            className='slides-container'
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
            onTouchEnd={(e) => handleTouch(e)} >
               
                {
                    slides.map((slide, index)=>{
                        let position = "last";
                        let relativePosition = (index - active + slides.length) % slides.length

                        if(relativePosition === 0){
                            position = "active";
                        } else if (relativePosition === 1){
                            position= "next";
                        } else if (relativePosition === slides.length -1 ){
                            position = "prev";
                        } 
                        return(
                            <Slide
                                key={slide._id}
                                {...slide}
                                classes={position}
                                index={index}
                                totalSlides={slides.length}
                                isActive={index === active}
                                />
                        ) 
                    })
                }
            <ul className='slider-dots' aria-hidden="true">
                {  
                   slides.map((_, index) => {
                    return (
                    <li 
                        key={index}
                        className={index === active? "dot filled" : "dot"} >
                             <FaCircle/>
                    </li>
                    )})}
            </ul>

            <div className='btn-container'>
                <button
                    className='btn-prev'
                    type='button'
                    aria-label="Show previous project"
                    onClick={prevSlide}
                    >
                    <GrPrevious aria-hidden="true" focusable="false"/>
                </button>
                <button
                    className='btn-next'
                    aria-label="Show next project"
                    type='button'
                    onClick={nextSlide}
                    >
                    <GrNext aria-hidden="true" focusable="false"/>
                </button>
            </div>
        </div>
        <div 
            className="corner-prj corner-prj-top-left"
            aria-hidden="true"
        ></div>
        <div
            className="corner-prj corner-prj-bottom-right"
            aria-hidden="true"
            ></div>
        <div
          className="scroll-indicator"
          aria-hidden="true">
          <span className="mouse-icon"></span>
        </div>
    </section>
    
  )
}



const Slide = ({
    title,
    tecnologies,
    icon,
    desc,
    img,
    version,
    classes,
    _id,
    repoUrl,
    index,
    totalSlides,
    isActive,
    projectType,
    context
    }) => {


    const  isPortfolio = _id === "My Portfolio";

    const projectAction = isPortfolio ? (
        <a
            className="project-link"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isActive ? 0 : -1}
        >
             View repository
        </a>
    ) : (
        <Link
            className="project-link"
            to={`/projectDetails/${_id}`}
            tabIndex={isActive ? 0 : -1}
        >
            View project
        </Link>
    )

     return (
    <article
         className={`slide-article ${classes}`}
         aria-roledescription="slide"
         aria-label={`${index + 1} of ${totalSlides}: ${title}`}
         aria-hidden={!isActive}
         >
        <picture className='slide-img'>
             <img
                src={img || fallBackImg}
                alt={`Preview of the ${title} project`}
                className='img'
            />
        </picture>
        <section className='slides-desription'>
            <h3 className='h3-slide'>{title}</h3>
                <p className='context-lable'>{projectType}</p>
            <div
                className='tecn-slide'
                aria-label="Technologies used"
             >
                <ul className='tecn-slide-names'>
                    {
                        tecnologies.map((tec, index) =>(
                            <li
                                key={index}
                                >
                                {tec}
                            </li>
                        ))
                    }
                </ul>
                    <ul className='tecn-slide-icons'>
                        {
                            icon.map((i, index) =>(
                                <li
                                 key={index}
                                 aria-hidden="true"
                                 >
                                    {i}
                                 </li>
                            ))
                        }
                    </ul>
            </div>
            <p className='desc-slide'>{desc}</p>
            <footer className='slide-footer'>
                    {projectAction}
                <p className='v-slide'>{version}</p>
            </footer>
        </section>
       
    </article>
)

}


export default Projects
