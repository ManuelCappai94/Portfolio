import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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

        <ul className="footer-links" aria-label="Contact and social links">
          <li>
            <a
              href="mailto:manuelcappai@outlook.it"
              className="footer-link"
              aria-label="Send me an email"
            >
              <MdEmail aria-hidden="true" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ManuelCappai94"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/manuel-cappai-1b5507335"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
