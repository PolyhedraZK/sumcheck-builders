import React, { useState } from 'react';

const UpcomingTalks = () => {
  const zoomLink = "https://zoom.us/j/9132917498?pwd=cO2kdIxCEOkwrwwd0Qvd61Rc8UxtWu.1#success";
  const talks = [
    {
      speaker: {
        name: "Alireza Shirzad",
        personalWebsite: "https://alireza-shirzad.github.io/",
        affiliation: {
          name: "University of Pennsylvania",
          website: "https://www.upenn.edu/"
        }
      },
      topic: "Pari and Garuda: Pushing the Frontier of SNARK Efficiency",
      topicLink: "https://eprint.iacr.org/2024/1245",
      date: "Thursday, Nov 14, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
      bio: "Alireza Shirzad is a first-year PhD student at Penn advised by Dr. Pratyush Mishra. He is primarily interested in designing proof systems and SNARKs. Before coming to Penn, He obtained his Master's degree in Secure communications and Cryptography in 2023 and a bachelor's degree in Electrical Engineering in 2021 from Sharif University of Technology.",
      abstract: "SNARKs are powerful cryptographic primitives that allow a prover to produce a succinct proof of a computation. Two key goals of SNARK research are to minimize the size of the proof and to minimize the time required to generate the proof. In this work, we present new SNARK constructions that push the frontier on both of these goals.\n\nOur first construction, Pari, is a SNARK that achieves the smallest proof size amongst *all* known SNARKs. Specifically, Pari achieves a proof size of just two group elements and two field elements, which, when instantiated with the BLS12-381 curve, totals just 160 bytes, smaller than that of Groth16 [Groth, EUROCRYPT '16] and Polymath [Lipmaa, CRYPTO '24].\n\nOur second construction, Garuda, is a SNARK that reduces proof generation time by supporting, for the first time, arbitrary \"custom\" gates and *free* linear gates. To demonstrate Garuda's performance, we implement and evaluate it, and show that it provides significant prover-time savings compared to both the state-of-the-art SNARKs (Groth16 and HyperPlonk [EUROCRYPT '22])\n\nBoth constructions rely on a new cryptographic primitive: \"equifficient\" polynomial commitment schemes that enforce that committed polynomials have the same representation in particular bases. We provide both rigorous security definitions for this primitive as well as efficient constructions for univariate and multilinear polynomials."
    },
    {
      speaker: {
        name: "Suyash Bagad",
        personalWebsite: "https://www.ingonyama.com/authors/suyash-bagad",
        affiliation: {
          name: "Ingonyama",
          website: "https://www.ingonyama.com/"
        }
      },
      topic: "10x Faster Sumcheck - A breakthrough for sumcheck over binary tower fields",
      topicLink: "#",
      date: "Friday, Nov 22, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
      bio: "Suyash is a researcher at Ingonyama, working on algorithms to accelerate proof generation. He previously was a cryptography engineer at Aztec.",
      abstract: "Sumcheck has become the new bottleneck for a SNARK prover when working over towers of Binary fields, especially with the emergence of fast commitment schemes like Binius. We devise a novel algorithm based on the Toom-Cook multiplication technique to accelerate the sumcheck prover by atleast an order of magnitude.\n\nIn this talk, we will dive into the details of our algorithm and discuss some encouraging results with our implementation. Our techniques also apply to the sumcheck more generally in case when the witness magnitude is \"small\"."
    },
  ];

  
  const ToggleContent = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!content) return null;

    const formatContent = (text) => {
      const paragraphs = text.split('\n\n');
      return paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          {index < paragraphs.length - 1 && <><br /><br /></>}
        </React.Fragment>
      ));
    };

    return (
      <div className="mt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <span className="font-semibold mr-2">{title}</span>
          <span className="text-xs">{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && <p className="mt-2">{formatContent(content)}</p>}
      </div>
    );
  };

  return (
    <div className="content">
      <h2 className="text-2xl font-bold mb-4">Upcoming Talks</h2>
      <div className="mb-6 p-4 bg-blue-100 rounded-lg flex items-center justify-between">
        <span className="font-semibold mr-4">Join our talks via: </span>
        <a 
          href={zoomLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
        >
          <span>Zoom Meeting</span>
          <span className="ml-2">↗</span>
        </a>
      </div>
      <ul className="space-y-6">
        {talks.map((talk, index) => (
          <li key={index} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a href={talk.speaker.personalWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {talk.speaker.name}
              </a>
              {" from "}
              <a href={talk.speaker.affiliation.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {talk.speaker.affiliation.name}
              </a>
            </h3>
            <p className="mb-2">
              <strong>Topic:</strong>{" "}
              <a href={talk.topicLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {talk.topic}
              </a>
            </p>
            <p className="mb-2"><strong>Date:</strong> {talk.date}</p>
            <ToggleContent title="Bio" content={talk.bio} />
            <ToggleContent title="Abstract" content={talk.abstract} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTalks;