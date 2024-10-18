import React from 'react';

const PastTalks = () => {
  return (
    <div className="content">
      <h2>Past Talks</h2>
      <ul className="talks-list">
        {[
          {
            speaker: "Simon Lau from Polyhdera Network",
            topic: "Accelerating SumChecks using GPUs, comparing CUDA and Triton frameworks",
            date: "Friday, October 18, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
            recording: "Recording not yet available"
          },
          {
            speaker: "Giacomo Fenzi from EPFL",
            topic: <a href="https://eprint.iacr.org/2024/390">STIR: Reed–Solomon Proximity Testing with Fewer Queries</a>,
            date: "Wednesday, Oct 16, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
            recording: "Recording not yet available",
            slides: <a href="https://hackmd.io/@gfenzi/STIR">Slides</a>
          },
          {
            speaker: "Vishruti from Modulus Labs",
            topic: '"Beta Cascade" optimization for prover\'s sumcheck evaluation function',
            date: "Thursday, Oct 3, 1 PM PT / 4 PM ET / 10 PM CET",
            recording: <><a href="https://zoom.us/rec/share/66in8tv37LQbix6WJwFkvOjFJ5KoyYDwC8U85YAPAHSMBP-O_KVTKnO63-uyh0Sp.6_1Pk7vZN_5PsWJK">Recording</a>, Passcode: 7s?MHjHv</>
          },
          {
            speaker: "Tiancheng from Polyhdera Network",
            topic: <a href="https://eprint.iacr.org/2023/1271">Pianist - A fully distributed approach to ZKP generation</a>,
            date: "Friday, Sept 27, 1 PM PT / 4 PM ET / 10 PM CET",
            recording: <><a href="https://zoom.us/rec/share/0ZRmK_qx96xaukhbD8P9DcvbpAMEGwqzGKWgZZ7k7rlk7Bz6t4b77hQ-HHJ016nK.MqcHbX9MZJurY3tz">Recording</a>, Passcode: 9KV#RkJa</>
          },
          {
            speaker: "Lev from PSE",
            topic: "Turbocharging Keccak circuits with GF2_128 field",
            date: "Friday, Sept 13, 8 AM PT / 11 AM EST / 5 PM CET / 11 PM SGT",
            recording: <><a href="https://zoom.us/rec/share/ocmi9P9GAQNqQKAqzcSfUgoAurTp6-ky7NBC0mYIX4J9MFIm_vyfpRVpva8WNjP9.rbVYlehgHEoFA7wZ">Recording</a>, Passcode: #RjuB+Y5</>,
            slides: <a href="https://hackmd.io/@levs57/B1uG_Hx6A#/">Slides</a>
          },
          {
            speaker: "Zhenfei from Polyhdera Network",
            topic: "Tricks used in Expander prover, including GKR² to accelerate Poseidon hash functions",
            date: "Friday, Sept 6, 8 AM PT / 11 AM EST / 5 PM CET / 11 PM SGT",
            recording: <><a href="https://zoom.us/rec/share/al5gScEwEhG3bdGUcQEZj2AaTtWhEb3MJx9oZ7J1JmpDQsZRxyWHlvIhihQCX8Hs.dR-SNfe0o0L0LpTd">Recording</a>, Passcode: 4YYnVV1!</>
          }
        ].map((talk, index) => (
          <li key={index} className="talk-item">
            <h3>{talk.speaker}</h3>
            <p>Topic: {talk.topic}</p>
            <p>{talk.date}</p>
            <p>Recording: {talk.recording}</p>
            {talk.slides && <p>Slides: {talk.slides}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastTalks;
