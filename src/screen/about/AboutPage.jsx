import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import AboutContent from "./components/AboutContent"
import InnerPageHeader from "../../components/InnerPageHeader"
import "../../styles/about.css"
import PortfolioCta from "../../components/PortfolioCta"

const AboutPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left:0,
            behavior: "auto"
        })
    }, [])

  return (
    <section className="about-page">
    <InnerPageHeader
        goBackTo={()=> navigate("/")}
        actionLabel={"Back to Home"}
        pageTitle={"About Me"}
    />
      <AboutContent/>
      <PortfolioCta/>
    </section>
  )
}

export default AboutPage
