import React from 'react';

const UpcomingTalks = () => {
  const talks = [
    {
      speaker: {
        name: "Giacomo Fenzi",
        personalWebsite: "https://gfenzi.io/",
        affiliation: {
          name: "EPFL",
          website: "https://www.epfl.ch/en/"
        }
      },
      topic: "WHIR: Reed–Solomon Proximity Testing with Super-Fast Verification",
      topicLink: "https://eprint.iacr.org/2024/1586",
      date: "Friday, Nov 8, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
    },
    {
      speaker: {
        name: "Ron Rothblum",
        personalWebsite: "https://csaws.cs.technion.ac.il/~rothblum/",
        affiliation: {
          name: "Succinct",
          website: "https://succinct.xyz/"
        }
      },
      topic: "Blaze: Fast SNARKs from Interleaved RAA Codes",
      topicLink: "https://eprint.iacr.org/2024/1609",
      date: "Friday, Nov 1, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
    },
  ];

  return (
    <div className="content">
      <h2 className="text-2xl font-bold mb-4">Upcoming Talks</h2>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTalks;