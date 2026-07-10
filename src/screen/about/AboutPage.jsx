import { useNavigate } from "react-router-dom"
import AboutContent from "./components/AboutContent"
import InnerPageHeader from "../../components/InnerPageHeader"
import "../../styles/about.css"

const AboutPage = () => {
    const navigate = useNavigate()
  return (
    <section className="about-page">
    <InnerPageHeader
        goBackTo={()=> navigate("/")}
        actionLabel={"Back to Home"}
        pageTitle={"About Me"}
    />
      <AboutContent/>
    </section>
  )
}

export default AboutPage
