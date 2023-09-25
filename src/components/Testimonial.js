import React from 'react';
import './testimonial.css';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-text">
        <p>{testimonial.text}</p>
      </div>
      <div className="testimonial-author">
        <p>- {testimonial.author}</p>
      </div>
    </div>
  );
};

export default Testimonial;