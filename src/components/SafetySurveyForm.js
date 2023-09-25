import React, { useState } from 'react';

const SafetySurveyForm = () => {
  const [responses, setResponses] = useState({});

  const handleChange = (question, value) => {
    setResponses({ ...responses, [question]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send responses to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="question">
        <p>Do you feel safe in your college campus?</p>
        <label>
          <input
            type="radio"
            name="question1"
            value="1"
            onChange={() => handleChange('question1', '1')}
          />
          Strongly Agree
        </label>
        {/* Add similar radio button options for each question */}
      </div>

      {/* Add more questions here with radio button options */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SafetySurveyForm;
