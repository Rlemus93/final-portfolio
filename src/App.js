import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Testimonials from './components/Testimonials';
import './App.css';
import github from './images/github.png';
import linkdin from './images/linkdin.png';
import verse from './images/verse.png';
import tictactoe from './images/tictactoe.png';
import poisongame from './images/poisongame.png';
import comingsoon from './images/comingsoon.jpeg';

const App = () => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const projectNames = [
    ['Tic-Tac-Toe', 'React, HTML, JavaScript, and CSS', <img src={tictactoe} alt="" />],
    ['Quote/Verse Generator', 'HTML, JavaScript, and CSS', <img src={verse} alt="" />],
    ['Poison Game', 'HTML, JavaScript, and CSS', <img src={poisongame} alt="" />],
    ['Capstone-Project', 'this is a little summary', <img src={comingsoon} alt="" />],
    ['future project', 'this is a little summary', <img src={comingsoon} alt="" />],
  ];

  const testimonials = [
    ['Seth Christ', "Ryan is an aspiring software developer with an amazing work ethic. Everyday he shows up on time, ready to learn with enthusiasm that brings everybody's energy up. His ability to explain concepts shows that he practices and studies prior to class. Working with Ryan has been a pleasure", <img src={linkdin} alt="" />],
    ['name2', 'Highly recommend! Professional and efficient.', <img src={github} alt="" />],
    ['name3', 'Outstanding experience from start to finish. Will definitely return!', <img src={linkdin} alt="" />],
    ['name4', 'Impressed by the quality of work and attention to detail.', <img src={linkdin} alt="" />],
    ['name5', 'Excellent communication and quick turnaround. Couldnt be happier!', <img src={linkdin} alt="" />],
    ['name6', 'Incredible results! Exceeded all expectations', <img src={github} alt="" />]
  ]

  useEffect(() => {
    // funtion that loads up screen. after 2.5 seconds loads up the rest of the page
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust timing as needed

    // Auto change testimonial index every 7 seconds
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 7000); //

    // Cleanup functions
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex(currentProjectIndex === projectNames.length - 1 ? 0 : currentProjectIndex + 1);
  };

  const prevProject = () => {
    setCurrentProjectIndex(currentProjectIndex === 0 ? projectNames.length - 1 : currentProjectIndex - 1);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ryan-lemus/');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Rlemus93');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rlemus93@gmail.com';
  };

  return (
    <div>
      {loading ? (
        <div className="loading-message">Welcome!</div>
      ) : (
        // Content after loading
        <>
          <header>
            <img className="headerphotos" src={linkdin} alt="" onClick={handleLinkedInClick} />
            <img className="headerphotos" src={github} alt="" onClick={handleGitHubClick} />
            <div className="email-box" onClick={handleEmailClick}>
              Email Me
            </div>
          </header>

          <h1 className='name'>Ryan Lemus</h1>
          <h5 className='title'>Full Stack Web Developer</h5>

          <div className="container">
            <Aboutme />

            <div className="right-section">
              <div className="project-cards">
                <Projects projectName={projectNames[currentProjectIndex]} />
              </div>
              <div className="buttons">
                <button className="button" onClick={prevProject}>
                  Previous
                </button>
                <button className="button" onClick={nextProject}>
                  Next
                </button>
              </div>
            
            <Testimonials testimonials={testimonials[currentTestimonialIndex]} />
            
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
