import InnerPageHeader from '../../../components/InnerPageHeader'
import { useParams, useNavigate } from 'react-router-dom'

import MayerfeldPracticum from '../MayerfeldPracticum'
import EurodysseyInternship from '../EurodysseyInternship'
import ErrorePage from '../../ErrorePage'
import "../../../styles/experienceDetailsPage.css"
import ExperienceContent from './ExperienceContent'

// const experiencePages = {
//   "mayerfeld-practicum": {
//     title: "Mayerfeld Consulting Practicum",
//     component: MayerfeldPracticum,
//   },

//   "eurodyssey-internship": {
//     title: "Eurodyssey Internship",
//     component: EurodysseyInternship,
//   },
// };


const ExperiencePageLayout = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    // const selectedExperience = experiencePages[id];

    // if (!selectedExperience) {
    //     return <ErrorePage />;
    // }

    // const ExperienceContent = selectedExperience.component;
  return (
       <section className='page-layout'>
        <InnerPageHeader
        goBackTo={()=> navigate("/experience")}
        actionLabel={"Back to Experience"}
        pageTitle={"Mayerfeld Consulting Practicum"}
        />
     <ExperienceContent/> 
    </section>
  )
}



export default ExperiencePageLayout
