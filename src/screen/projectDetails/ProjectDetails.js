
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../../utils/Data'
import "../../styles/projectDetails.css"
import { IoArrowBackCircleSharp } from "react-icons/io5";
import ProjectDescription from './components/ProjectDescription';

const ProjectDetails = () => {
  const {id} = useParams() //serve per prendere i dati in base all'id, Router torva in automitico la route corretta in base al template e all'id associata al progetto
  const project = data.find(prj => prj._id === id )
  const navigate = useNavigate();
  

  const goBackToPrjs = () =>{
    navigate("/", {
      state: {scrollTo: "projects"}
    } )
  }
  return (
    <section className='prj-details'>
        <header className='header'>
          <button className='back-btn' onClick={goBackToPrjs} >
              <IoArrowBackCircleSharp className='back-icon'/>
            </button>
                 <h4 className='back-arrow'>Return to Projects</h4>
        </header>
          <ProjectDescription project={project} /> 
        
    </section>
  )
}

export default ProjectDetails
