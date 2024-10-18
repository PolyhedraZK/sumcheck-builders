import React from 'react';

const Resources = () => {
  return (
    <div className="resources">
      <h2>Resources</h2>
      <p>Explore these valuable resources to deepen your understanding of sum-check protocols and zero-knowledge proofs:</p>
      <ul>
        <li>
          <a href="https://people.cs.georgetown.edu/jthaler/sumcheck.pdf" target="_blank" rel="noopener noreferrer">
            The Sum-Check Protocol: A Simple Introduction
          </a>
        </li>
        <li>
          <a href="https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf" target="_blank" rel="noopener noreferrer">
            Proofs, Arguments, and Zero-Knowledge (Comprehensive Survey)
          </a>
        </li>
        <li>
          <a href="https://github.com/matter-labs/awesome-zero-knowledge-proofs" target="_blank" rel="noopener noreferrer">
            Awesome Zero Knowledge Proofs (GitHub Repository)
          </a>
        </li>
      </ul>
      <p>Check back regularly for updates to our resource list!</p>
    </div>
  );
};

export default Resources;
