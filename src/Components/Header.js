import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import resume from '../images/resume.png'
import email from '../images/email.png'


const Header = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ryan-lemus/');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Rlemus93');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rlemus93@gmail.com';
  };

  const handleResumeClick = () => {
    window.open('resume.pdf', '_blank');
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#nameTitles">Home</a></li>
          <li><a href="#skillsSection">Skills</a></li>
          <li><a href="#aboutmeSection">About Me</a></li>
          <li><a href="#projectsSection">Projects</a></li>
          <li><a href="#testimonialsSection">Testimonials</a></li>
        </ul>
      </nav>
      <div className="header-icons-container">
        <div className="header-icons">
         
          <img className="headerphotos" src={linkedin} alt="" onClick={handleLinkedInClick} />
          <img className="headerphotos" src={github} alt="" onClick={handleGitHubClick} />
        </div>
        <div className="email-box">
          <img className="headerphotos" src={email} alt="" onClick={handleEmailClick} />
        </div>
        <div className="resumeLink">
          <img className="headerphotos" src={resume} alt="" onClick={handleResumeClick} />
        </div>
      </div>
    </header>
  );
};
export default Header;