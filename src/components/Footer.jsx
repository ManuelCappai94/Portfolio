import SocialIcons from "./SocialIcons";
import "../styles/footer.css";

import React from 'react'
  const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="footer-copy">
        © {currentYear} Manuel Cappai. All rights reserved.
      </p>

       <div className="footer-content">
        <p className="footer-author">Author: <strong>Manuel Cappai</strong></p>
        <SocialIcons listClass="footer-links" linkClass="footer-link"/>
      </div>
    </footer>
  )
}

export default Footer
