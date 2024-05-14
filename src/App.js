import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import NameTitle from "./components/NameTitle"
import Aboutme from "./components/Aboutme"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"
import Projects from "./components/Projects"
import "./App.css"
import comingsoon from "./images/comingsoon.jpeg"
import tictactoe from "./images/tictactoe.png"
import verse from "./images/verse.png"
import poisongame from "./images/poisongame.png"
import react from "./images/react.png"
import js from "./images/js.png"
import css from "./images/css.png"
import html from "./images/html.png"
import ruby from "./images/ruby.png"
import rubyonrails from "./images/rails.png"
import bankbuddy from "./images/bankbuddy.png"
import cattinder from "./images/cat-tinder.png"
import apartment from "./images/apartment.png"
import nat from "./images/nat.jpeg"
import seth from "./images/seth.png"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const projectNames = [
    [
      "Bank buddy",
      [
        <img key="react" src={react} alt="React" />,
        <img key="rubyonrails" src={rubyonrails} alt="RubyOnRails" />,
        <img key="css" src={css} alt="CSS" />,
      ],
      <img src={bankbuddy} alt="" />,
      "https://capstone-frontend-yx8y.onrender.com/",
      "Built using React, Ruby on Rails, and CSS bank buddy is a personal finance app that allows users to save with friends and family.",
    ],
    [
      "Cat-Tinder",
      [
        <img key="react" src={react} alt="React" />,
        <img key="rubyonrails" src={rubyonrails} alt="RubyOnRails" />,
        <img key="ruby" src={ruby} alt="ruby" />,
      ],
      <img src={cattinder} alt="" />,
      "https://github.com/Rlemus93/Cat-Tinder-Frontend",
      "Built using React, Ruby on Rails, and Ruby, Cat-Tinder is a a social app to help cats owners find playdates for their cats. view other cats profiles and connect.",
    ],
    [
      "Homestead Living",
      [
        <img key="react" src={react} alt="React" />,
        <img key="rubyonrails" src={rubyonrails} alt="RubyOnRails" />,
        <img key="ruby" src={ruby} alt="ruby" />,
      ],
      <img src={apartment} alt="" />,
      "https://github.com/Rlemus93/Apartment-App-Frontend",
      "Built using React, Ruby on Rails, and Ruby, Homestead Living is a real estate app that allows users to find Homestead style homes in their area.",
    ],
    [
      "Tic-Tac-Toe",
      [
        <img key="react" src={react} alt="React" />,
        <img key="js" src={js} alt="JavaScript" />,
        <img key="css" src={css} alt="CSS" />,
      ],
      <img src={tictactoe} alt="" />,
      "https://github.com/Rlemus93/tic-tac-toe",
      "Built using React, JavaScript, and CSS, this is a simple game of Tic-Tac-Toe. Play against a friend and choose between emojis or X's and O's.",
    ],
    [
      "Quote/Verse Generator",
      [
        <img key="html" src={html} alt="Html" />,
        <img key="js" src={js} alt="JavaScript" />,
        <img key="css" src={css} alt="CSS" />,
      ],
      <img src={verse} alt="" />,
      "https://github.com/Rlemus93/random-quote-generator",
      "Built using HTML, JavaScript, and CSS, this is a random quote/verse generator. on click it will generate a random quote or verse.",
    ],
    [
      "Poison Game",
      [
        <img key="html" src={html} alt="Html" />,
        <img key="js" src={js} alt="JavaScript" />,
        <img key="css" src={css} alt="CSS" />,
      ],
      <img src={poisongame} alt="" />,
      "https://github.com/Rlemus93/Rlemus93.github.io",
      "Built using HTML, JavaScript, and CSS, this is a simple game of poison. Play against a friend and try to avoid the poison.",
    ],
  ]

  const testimonials = [
    [
      "Seth Crist",
      "Ryan is an aspiring software developer with an amazing work ethic. Everyday he shows up on time, ready to learn with enthusiasm that brings everybody's energy up. His ability to explain concepts shows that he practices and studies prior to class. Working with Ryan has been a pleasure",
      <img src={seth} alt="" />,
    ],
    [
      "Natalie Pashal",
      "Ryan Lemus was a very dedicated and personable colleague. During the time we worked together, Ryan was always willing to lend a helping hand, extremely resourceful and performed above and beyond to lead his team and support his peers. He’s self-sufficient, motivated and is driven to be the best at anything he does. Ryan will certainly be an asset to any organization!",
      <img src={nat} alt="" />,
    ],
    [
      "name3",
      "Outstanding experience from start to finish. Will definitely return!",
      <img src={comingsoon} alt="" />,
    ],
    [
      "name4",
      "Impressed by the quality of work and attention to detail.",
      <img src={comingsoon} alt="" />,
    ],
    [
      "name5",
      "Excellent communication and quick turnaround. Couldnt be happier!",
      <img src={comingsoon} alt="" />,
    ],
    [
      "name6",
      "Incredible results! Exceeded all expectations",
      <img src={comingsoon} alt="" />,
    ],
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 3500)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [testimonials.length])

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
              <Projects projectNames={projectNames} />
            </div>
            <div className="testimonialsSection" id="testimonialsSection">
              <Testimonials
                testimonials={testimonials[currentTestimonialIndex]}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default App
