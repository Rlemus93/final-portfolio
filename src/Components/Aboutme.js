import React from 'react';
import profileimage from '../images/profileimage.JPG';


const Aboutme = () => {
  return (
    <div>
      <div className="aboutmeHeader">
        <h1>
          About Me
        </h1>
      </div>
        <div className='aboutmepara'>
          Hello there! I'm thrilled to introduce myself as a seasoned software web developer, deeply passionate about crafting exceptional digital experiences. My expertise spans HTML, CSS, JavaScript, React, and Ruby on Rails, allowing me to build robust and user-friendly web applications.

          With a keen eye for detail and a knack for problem-solving, I thrive in collaborative environments where creativity and innovation flourish. I'm constantly seeking new challenges to expand my skill set and stay ahead of industry trends, driven by a relentless pursuit of excellence.

          I invite you to delve into my portfolio, where you'll find a showcase of my projects and a testament to my commitment to delivering top-notch solutions. Together, let's embark on an exciting journey of digital innovation and create something truly extraordinary. Thank you for considering me for your next project—I can't wait to collaborate with you!
          <img className="profile" src={profileimage} alt="Profile" />
        </div>
    

    </div>
  );
};

export default Aboutme;
