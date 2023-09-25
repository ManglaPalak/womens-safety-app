import React, { useState } from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
  { text: "Yes, while travelling DTC bus.", author: "Anonymous" },
  { text: "Happened said it once in the bus and other times in metro or bus was not able to speak.", author: "Anonymous" },
  { text: "Yes I was a part of one incident and that moment I saw a police officer and immediately informed him and he took some actions against the guy.", author: "Anonymous" },
  { text: "Yes,I came through a incident when I was in class 12. My bestfriend's friend was been married to a aged man not like very old but of our age. But when we came around in the situation we got to know that she was forced to do the marriage but when we when we reached out to her, then we got to know that she is not willing to back foot from her family's decision and she will marry the man on the day after one week or another. We tried a lot to convince her, but she was not willing to do. We tried a lot of techniques to convince her. But her answer remained same. But now we don't regret now because we did at best to save her from the crime.", author: "Anonymous" },
  { text: "Once, i was giving my institute chemistry test under the supervision of my chemistry sir but i showed up 20 mins late so, sir gave me extra 20 mins but all my batchmates were gone and i was the only one doing the test and soon i was done. I was on my way to leave the building when suddenly sir hugged me and touched me inappropriately and tried to kiss me despite being stopped by me, but when he was trying to kiss me i pushed him hard and then left the building angrily.", author: "Anonymous" },

];

const TestimonialsContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        <button onClick={prevTestimonial} className="slider-button">&#8249;</button>
        <Testimonial testimonial={testimonialsData[currentIndex]} />
        <button onClick={nextTestimonial} className="slider-button">&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
