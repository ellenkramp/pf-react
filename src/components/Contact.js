import React from 'react';

export const Contact = () => 
    (<div id="contact">
        <header>Contact</header>
        <div className="line"></div> 
        <div className="contact">
        <a href="mailto:ellenkramp@gmail.com">
            <img 
            alt="email" 
            src="https://image.flaticon.com/icons/svg/684/684816.svg" />
            <h4>ellenkramp@gmail.com</h4>
            </a>
        <a href="www.linkedin.com/in/ellenkramp">
            <img 
            alt="linkedin" 
            src="https://image.flaticon.com/icons/svg/56/56591.svg" />
            <h4>LinkedIn</h4>
            </a>
        <a href="www.GitHub.com/ellenkramp">
            <img 
            alt="github" 
            src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" />
            <h4>GitHub</h4>
            </a>
        </div>
    </div>)