import { useEffect } from 'react'
import InnerPageHeader from '../../../components/InnerPageHeader'
import { useParams, useNavigate } from 'react-router-dom'

import ErrorePage from '../../ErrorePage'
import "../../../styles/experienceDetailsPage.css"
import ExperienceContent from './ExperienceContent'
import { experienceDetailsData } from '../../../data/experienceDetailsPageData'
import PortfolioCta from '../../../components/PortfolioCta'



const ExperiencePageLayout = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const currentPage = experienceDetailsData.find((data)=> data.id === id)
  
useEffect(()=>{
  window.scrollTo({
    top: 0,
    left:0,
    behavior: "auto"
  })
}, [id])

  if(!currentPage){
    return <ErrorePage/>
  }
  return (
       <section className='page-layout'>
        <InnerPageHeader
        goBackTo={()=> navigate("/experience")}
        actionLabel={"Back to Experience"}
        pageTitle={currentPage.title}
        />
     <ExperienceContent {...currentPage}/> 
     <PortfolioCta/>
    </section>
  )
}



export default ExperiencePageLayout
