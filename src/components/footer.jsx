import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../css/footer.css'


export default function footer() {
    return ( 

<footer className="footer">
  <p>Author: Tom Hong</p>
  <a href="mailto:tom.y.y.hong@gmail.com" className="right-contact" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2xl"></FontAwesomeIcon></a>
  <a href="https://github.com/TomYYHong" className="right-contact" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
  <a href="https://www.linkedin.com/in/yuk-yu-hong-b43665158/" className="right-contact" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
  <a href="https://drive.google.com/file/d/1wKMjkya1UElm5nHZNvKfGp-R7wxoVA-t/view?usp=sharing" className="right-contact" target="_blank" rel="noopener noreferrer">Resume<FontAwesomeIcon icon={faFilePdf} size="2xl" /></a>
</footer>
    );}