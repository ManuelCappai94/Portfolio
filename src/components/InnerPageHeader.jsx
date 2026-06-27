import { IoArrowBackCircleSharp } from "react-icons/io5";
import "../styles/innerPageHeader.css"

const InnerPageHeader = ({goBackTo, actionLabel, pageTitle}) => {
  return (
    <header className='inner-page-header'>
        <button
         className='back-btn'
          onClick={goBackTo}
           type="button"
           aria-label={actionLabel}
           >
            <IoArrowBackCircleSharp className='back-icon' aria-hidden="true"/>
            <span className='back-text'>{actionLabel}</span>
        </button>
        <h2><span className='tag-details'>&lt;</span>{pageTitle}<span className='tag-details'>/&gt;</span></h2>
    </header>
  )
}

export default InnerPageHeader
