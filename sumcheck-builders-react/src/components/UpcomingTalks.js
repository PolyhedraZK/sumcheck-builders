import React from 'react';

const UpcomingTalks = () => {
  return (
    <div className="content">
      <h2>Upcoming Talks</h2>
      <ul className="talks-list">
        {[
         {
          speaker: "Giacomo Fenzi",
          topic: <a href="https://eprint.iacr.org/2024/1586">WHIR: Reed–Solomon Proximity Testing with Super-Fast Verification</a>,
          date: "Friday, Nov 8, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
         },
         {
          speaker: "Ron Rothblum",
          topic: <a href="https://eprint.iacr.org/2024/1609">Blaze: Fast SNARKs from Interleaved RAA Codes</a>,
          date: "Friday, Nov 1, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
         },
        ].map((talk, index) => (
          <li key={index} className="talk-item">
            <h3>{talk.speaker}</h3>
            <p>Topic: {talk.topic}</p>
            <p>{talk.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTalks;
