
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../../utils/Data'
import "../../styles/projectDetails.css"
import ProjectDescription from './components/ProjectDescription';
import InnerPageHeader from '../../components/InnerPageHeader';
import ErrorePage from '../ErrorePage';

const ProjectDetails = () => {
  const {id} = useParams() 
  const navigate = useNavigate();
  const project = data.find(prj => prj._id === id )

  const goBackToPrjs = () =>{
    navigate("/", {
      state: {scrollTo: "projects"}
    } )
  }
  
  if(!project){
    return <ErrorePage/>
  }
  return (
    <section className='prj-details'>
      <InnerPageHeader
        goBackTo={goBackToPrjs}
        actionLabel={"Go back to Projects"}
        pageTitle={project.title}
      />
          <ProjectDescription project={project} /> 
    </section>
  )
}

export default ProjectDetails
