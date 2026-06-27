import { useNavigate } from "react-router-dom"
import InnerPageHeader from "../components/InnerPageHeader"
import "../styles/errorPage.css"

const ErrorePage = () => {
  const navigate = useNavigate()
  return (
    <section>
      <InnerPageHeader
        goBackTo={()=> navigate("/")}
        actionLabel={"Back to Home"}
        pageTitle={"Page not found"}
         />
      <div className="error-page-content">
        <div className="error-code" aria-hidden="true">
          <span className="error-digit">4</span>
          <span className="error-digit">0</span>
          <span className="error-digit">4</span>
        </div>
        <p>The page you are looking for does not exist or may have been moved. <br/><br/>
            Use the <strong>back button</strong> to return to the homepage. </p>

      </div>
    </section>
  )
}

export default ErrorePage
