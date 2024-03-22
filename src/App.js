import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NameTitle from './components/NameTitle';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects'; // Import the Projects component
import './App.css';
import comingsoon from './images/comingsoon.jpeg';
import tictactoe from './images/tictactoe.png'
import verse from './images/verse.png'
import poisongame from './images/poisongame.png'
import react from './images/react.png'
import js from './images/js.png'
import css from './images/css.png'
import html from './images/html.png'
import ruby from './images/ruby.png'
import rubyonrails from './images/rubyonrails.png'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const projectNames = [
    [
      'Tic-Tac-Toe',
      [
        <img key="react" src={react} alt="React" />,
        <img key="js" src={js} alt="JavaScript" />,
        <img key="css" src={css} alt="CSS" />
      ],
      <img src={tictactoe} alt="" />
    ],
    ['Quote/Verse Generator', [
      <img key="html" src={html} alt="Html" />,
      <img key="js" src={js} alt="JavaScript" />,
      <img key="css" src={css} alt="CSS" />
    ],
      <img src={verse} alt="" />
    ],
    ['Poison Game', [
      <img key="html" src={html} alt="Html" />,
      <img key="js" src={js} alt="JavaScript" />,
      <img key="css" src={css} alt="CSS" />
    ],
      <img src={poisongame} alt="" />
    ],
    ['Capstone-Project', [
      <img key="ruby" src={ruby} alt="Ruby" />,
      <img key="rubyonrails" src={rubyonrails} alt="RubyOnRails" />,
      <img key="css" src={css} alt="CSS" />
    ],
      <img src={comingsoon} alt="" />
    ],
    ['future project', [
      <img key="html" src={html} alt="Html" />,
      <img key="js" src={js} alt="JavaScript" />,
      <img key="css" src={css} alt="CSS" />
    ],
      <img src={comingsoon} alt="" />
    ],
  ];

  const testimonials = [
    ['Seth Christ', "Ryan is an aspiring software developer with an amazing work ethic. Everyday he shows up on time, ready to learn with enthusiasm that brings everybody's energy up. His ability to explain concepts shows that he practices and studies prior to class. Working with Ryan has been a pleasure", <img src={comingsoon} alt="" />],
    ['name2', 'Highly recommend! Professional and efficient.', <img src={comingsoon} alt="" />],
    ['name3', 'Outstanding experience from start to finish. Will definitely return!', <img src={comingsoon} alt="" />],
    ['name4', 'Impressed by the quality of work and attention to detail.', <img src={comingsoon} alt="" />],
    ['name5', 'Excellent communication and quick turnaround. Couldnt be happier!', <img src={comingsoon} alt="" />],
    ['name6', 'Incredible results! Exceeded all expectations', <img src={comingsoon} alt="" />]
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);
  
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
  
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [testimonials.length]);

  const nextProject = () => {
    setCurrentProjectIndex(currentProjectIndex === projectNames.length - 1 ? 0 : currentProjectIndex + 1);
  };

  const prevProject = () => {
    setCurrentProjectIndex(currentProjectIndex === 0 ? projectNames.length - 1 : currentProjectIndex - 1);
  };

  return (
    <>
      {loading ? (
        <div className="loading-message">Welcome</div>
      ) : (
        <>
          <Header />
          <div className="allSections">
            <div className="nameTitles" id="nameTitles">
              <NameTitle />
            </div>
            <div className="skillsSection" id="skillsSection">
              <Skills />
            </div>
            <div className="aboutmeSection" id="aboutmeSection">
              <Aboutme />
            </div>
            <div className="projectsSection" id="projectsSection">
              <Projects
                projectNames={projectNames}
                currentProjectIndex={currentProjectIndex}
                prevProject={prevProject}
                nextProject={nextProject}
              />
            </div>
            <div className="testimonialsSection" id="testimonialsSection">
              <Testimonials testimonials={testimonials[currentTestimonialIndex]} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;