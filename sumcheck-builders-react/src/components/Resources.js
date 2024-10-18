import React from 'react';

const Resources = () => {
  return (
    <div className="resources">
      <h2>Resources</h2>
      <p>Explore these valuable resources to deepen your understanding of high performance sum-check protocols and zero-knowledge proofs:</p>
      <ul>
        <li>
          <a href="https://eprint.iacr.org/2019/317.pdf" target="_blank" rel="noopener noreferrer">
            Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation
          </a>
        </li>
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
        <li>
          <a href="https://eprint.iacr.org/2023/1271" target="_blank" rel="noopener noreferrer">
            Pianist: Scalable zkRollups via Fully Distributed Zero-Knowledge Proofs
          </a>
        </li>
        <li>
          <a href="https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html" target="_blank" rel="noopener noreferrer">
            Intel Intrinsics Guide
          </a>
        </li>
        <li>
        <a href="https://github.com/PolyhedraZK/blogs/tree/main/blogs" target="_blank" rel="noopener noreferrer">
            Polyhedra Blogs
          </a>
        </li>
        <li>
        <a href="https://eprint.iacr.org/2024/1586">WHIR: Reed–Solomon Proximity Testing with Super-Fast Verification</a>
        </li>
        <li>
        <a href="https://eprint.iacr.org/2024/390">STIR: Reed–Solomon Proximity Testing with Fewer Queries</a>
        </li>
      </ul>
      <p>Check back regularly for updates to our resource list!</p>
    </div>
  );
};

export default Resources;
