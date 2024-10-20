import React, { useState } from 'react';
import UpcomingTalks from './UpcomingTalks';

const Questionnaire = ({ onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === '17' || answer === '18') {
      onComplete(answer);
    } else {
      setError('Incorrect answer. Please try again.');
    }
  };

  return (
    <div className="questionnaire">
      <div className="questionnaire-intro">
        <p>
          To maintain the quality of discussions in our community, we kindly ask you to answer a simple question.
          This helps us ensure that our group consists of individuals genuinely interested in sum-check protocols and related topics.
        </p>
        <p>
          If you prefer to skip this step and obtain the invite link directly, please contact us via the link at the bottom of the page.
          // the link at the bottom of the page is infact the telegram invite link
        </p>
      </div>
      <h3>Please answer this question to join our community:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">
            Suppose we have an MLE whose lookup table is `(1, 2, 3, 4)`. What is its evaluation over a point `(5,6)`?
            // the answer is either 17 or 18, depending on the endieness of the point.
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={answer}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};



const Home = () => {
  const [showInvite, setShowInvite] = useState(false);

  const handleQuestionnaireComplete = (answers) => {
    // You can process the answers here if needed
    console.log('Questionnaire answers:', answers);
    setShowInvite(true);
  };

  return (
    <div className="home-container">
      <div className="main-content">
        <section className="intro">
          <h2>Welcome to Sumcheck Builders Seminars</h2>
          <p className="lead">
            Explore the fascinating world of sum-check protocols and cutting-edge zk research with our community of experts and enthusiasts.
          </p>
        </section>

        <section className="telegram-invite">
          <h3><i className="fas fa-users"></i> Join Our Community</h3>
          <p>
            Engage in academic discussions and stay updated on the latest developments in our vibrant community.
          </p>
          {showInvite ? (
            <a href="https://t.me/+mmG9soN2HpgyMGU5" target="_blank" rel="noopener noreferrer" className="btn">
              Join Telegram Group
            </a>
          ) : (
            <Questionnaire onComplete={handleQuestionnaireComplete} />
          )}
        </section>

        <section className="organizer-words">
          <h3><i className="fas fa-bullhorn"></i> A Message from Our Organizers</h3>
          <p>
            Welcome to the Sumcheck Builders Group Seminars! We are excited to bring together researchers and enthusiasts in the field of sum-check protocols and related areas. Our goal is to foster collaboration, share knowledge, and push the boundaries of this fascinating area of study.
          </p>
        </section>

        <section className="group-intro">
          <h3><i className="fas fa-info-circle"></i> About Us</h3>
          <p>
            The Sumcheck Builders Group is a community of researchers, developers, and cryptography enthusiasts dedicated to advancing the understanding and application of sum-check protocols. Our seminars cover a wide range of topics, including:
          </p>
          <ul>
            <li>Theoretical foundations of sum-check protocols</li>
            <li>Practical implementations and optimizations</li>
            <li>Real-world applications in cryptography and blockchain</li>
            <li>Emerging trends and future directions in the field</li>
          </ul>
          <p>
            Whether you're a seasoned expert or just starting your journey in this field, we welcome you to join our discussions, share your insights, and learn from others in our community.
          </p>
        </section>
      </div>
      <div className="sidebar">
        <UpcomingTalks />
      </div>
    </div>
  );
};

export default Home;
