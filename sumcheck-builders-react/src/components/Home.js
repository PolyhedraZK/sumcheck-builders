import React from 'react';
import UpcomingTalks from './UpcomingTalks';

const Home = () => {
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
          <a href="https://t.me/+mmG9soN2HpgyMGU5" target="_blank" rel="noopener noreferrer" className="btn">
            Join Telegram Group
          </a>
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
