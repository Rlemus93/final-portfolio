import React from 'react';

const Testimonials = ({ testimonials }) => {
  return (
    <div className='testimonial-cards'>
      <div className='testimonialsHeader'> 
        <h2><u>Testimonials</u></h2>
        <h3>{testimonials[0]}</h3>
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