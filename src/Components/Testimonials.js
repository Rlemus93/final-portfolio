import React from 'react';

const Testimonials = ({ testimonials }) => {
  return (
    <div className='card'>
      <div className='testimonials'>
        <div className='projectname'> <h2><u>Appreciation & Feedback</u></h2>
        <h3>{testimonials[0]}</h3>
        </div>
      </div>
      <div className='testimonialspara'>
        <p>{testimonials[1]}</p>
      </div>
      <div className='testimonials-image'>
        {testimonials[2]}
      </div>
    </div>
  );
};

export default Testimonials;