import {useState, useEffect, useCallback} from 'react'
import { data } from '../../../data/projectsPageData'
import fallBackImg from "../../../images/fallBack.png"
import { FaCircle } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
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
    <>
    <section ref={projectsRef} className='projects-section'>
        <div className='title-container prj'>
            <h2 className='prj-title'>
              <span className='tag-component-prj'> &lt; </span>
                Projects
                <span className='tag-component-prj'>/&gt;</span>
                </h2>
    
        </div>
            <div 
            className='slides-container'  
            onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
            onTouchEnd={(e) => handleTouch(e)} >
               
                {
                    slides.map((slide, index)=>{
                        let position = "";
                        let relativePosition = (index - active + slides.length) % slides.length

                        if(relativePosition === 0){
                            position = "active";
                        } else if (relativePosition === 1){
                            position= "next";
                        } else if (relativePosition === slides.length -1 ){
                            position = "prev";
                        } else {
                            position = "last"
                        }
                        return <Slide key={slide._id} {...slide} classes={position}/>
                    })
                }
            <ul className='slider-dots'>
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

        <aside className='btn-container'>
            <button className='btn-prev' type='button'  onClick={prevSlide}>
                <GrPrevious/>
            </button>
            <button className='btn-next' onClick={nextSlide}>
                <GrNext/>
            </button>
        </aside>
            </div>
     <div className="corner-prj corner-prj-top-left"></div>
     <div className="corner-prj corner-prj-bottom-right"></div>
        <div className="scroll-indicator">
          <span className="mouse-icon"></span>
        </div>
    </section>
    </>
  )
}



const Slide = ({ title, tecnologies,icon, desc, img, version, classes, _id, repoUrl}) => {
    const navigate = useNavigate()
    const goToProject =  (_id) => {
        if(_id === "My Portfolio") {
            window.open(repoUrl, "_blank", "noopener,noreferrer")
        } else {
            navigate(`projectDetails/${_id}`)
        }
    }
    //ho usaato index come key perchè la lista è statica, non cambiando ordine non dovrei avere problemi
     return (
    <article className={`slide-article ${classes}`}>
        <div className='slide-img'>
             <img src={img || fallBackImg} alt={title} className='img'/>
        </div>
        <div className='slides-desription'>
            <h3 className='h3-slide'>{title}</h3>
            <div className='tecn-slide'>
                <ul className='tecn-slide-names'>
                    {
                        tecnologies.map((tec, index) =>(
                            <li key={index}>{tec}</li>
                        ))
                    }
                </ul>
                    <ul className='tecn-slide-icons'>
                        {
                            icon.map((i, index) =>(
                                <li key={index}>{i}</li>
                            ))
                        }
                    </ul>
            </div>
            <p className='desc-slide'>{desc}</p>
            <aside className='view-container'>
                <button
                  type='button'
                  className='view-btn'
                  onClick={()=> goToProject(_id)}
                  > {_id === "My Portfolio"? "View Repository": "View project"}</button>
                <p className='v-slide'>{version}</p>
            </aside>
        </div>
       
    </article>
)

}


export default Projects
