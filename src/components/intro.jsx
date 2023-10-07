import React from "react";
import self_logo from '../assets/hello.png'

export default function Intro() {
    return ( 
        <div className='banner' id="intro">
        <div className='topelements'>
            <div className="top">
              <div classname='left'>
              <img src={self_logo} className="logo self" alt="Self logo" />
             </div>
             <div className = 'right'>
              <p className='name'>Tom Hong</p> <br />
            <div className='self-intro'>
            <p> 
              An experienced, collaborative and Software Developer with expertise in <b>Java</b>, <b>Spring Boot</b>, <b>JaavaScript</b>, 
              <b>Microservices/APIs</b>, <b>SQL</b>, and more. Proficient in Agile methodologies and test-driven development, 
              successfully worked with cross functional team to gather requirements, 
              and led teams to develop cloud-based Restful applications.
    
            </p>
            </div>
            </div>
            </div>
        </div>
        </div>
    );}