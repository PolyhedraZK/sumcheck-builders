import React, { useState } from 'react';

// Note: Ensure you have a CSS file named 'Questionnaire.css' in your styles folder
import './styles/Questionnaire.css';

const Questionnaire = ({ onComplete }) => {
  // State hooks for managing component state
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  // Telegram group invite link
  const telegramLink = 'https://t.me/+rNfYZHFmqdc5ZDE5';

  // Handler for input changes
  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError('');
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === '17' || answer === '18') {
      setIsCompleted(true);
      if (typeof onComplete === 'function') {
        onComplete(answer);
      } else {
        console.warn('onComplete prop is not a function');
      }
    } else {
      setError('Incorrect answer. Please try again.');
    }
  };

  // Render completion message with Telegram link if questionnaire is completed
  if (isCompleted) {
    return (
      <div className="questionnaire-container bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <p className="text-green-600 font-semibold mb-4">Congratulations! You've completed the questionnaire successfully.</p>
        <p className="mb-4">You can now join our Telegram group using the link below:</p>
        <a 
          href={telegramLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Join Telegram Group
        </a>
      </div>
    );
  }

  // Render the questionnaire form
  return (
    <div className="questionnaire-container bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <p className="mb-4 text-sm text-gray-600">
        To maintain the quality of discussions in our community, we kindly ask you to answer a simple question.
        This helps us ensure that our group consists of individuals genuinely interested in sum-check protocols and related topics.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
            Suppose we have an MLE whose lookup table is `(1, 2, 3, 4)`. What is its evaluation over a point `(5,6)`?
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={answer}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && (
          <div className="error-message mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="submit-button w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-xs text-gray-500 text-center">
        If you prefer to skip this step and obtain the invite link directly, please contact us via the link at the bottom of the page.
      </p>
    </div>
  );
};

export default Questionnaire;