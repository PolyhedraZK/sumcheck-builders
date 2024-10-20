import React from 'react';

const PastTalks = () => {
  const talks = [
    {
      speaker: {
        name: "Simon Lau",
        // personalWebsite: "https://simonlau.com",
        affiliation: {
          name: "Polyhdera Network",
          website: "https://www.polyhedra.network/"
        }
      },
      topic: "Accelerating SumChecks using GPUs, comparing CUDA and Triton frameworks",
      date: "Friday, October 18, 10:00 AM PST / 1:00 PM EST / 7:00 PM CET",
      recording: "https://drive.google.com/file/d/13S6VBNYP0g_9Asq7aPQ3S4g3qcAn7FSW/view?usp=sharing",
      slides: "https://docs.google.com/presentation/d/1ODt7MskLz_REANl4yBuSSqEts3aHf3xfHYZRGjCPYLs/edit#slide=id.p"
    },
    {
      speaker: {
        name: "Giacomo Fenzi",
        personalWebsite: "https://gfenzi.io/",
        affiliation: {
          name: "EPFL",
          website: "https://people.epfl.ch/giacomo.fenzi"
        }
      },
      topic: "STIR: Reed–Solomon Proximity Testing with Fewer Queries",
      topicLink: "https://eprint.iacr.org/2024/390",
      date: "Wednesday, Oct 16, 11:00 AM PST / 2:00 PM EST / 8:00 PM CET",
      recording: "https://www.youtube.com/watch?v=wYUnwLv-5Sg"
    },
    {
      speaker: {
        name: "Vishruti Ganesh",
        personalWebsite: "https://vishruti.me/",
        affiliation: {
          name: "Modulus Labs",
          website: "https://www.moduluslabs.xyz/"
        }
      },
      topic: '"Beta Cascade" optimization for prover\'s sumcheck evaluation function',
      date: "Thursday, Oct 3, 1 PM PT / 4 PM ET / 10 PM CET",
      recording: "https://zoom.us/rec/share/66in8tv37LQbix6WJwFkvOjFJ5KoyYDwC8U85YAPAHSMBP-O_KVTKnO63-uyh0Sp.6_1Pk7vZN_5PsWJK",
      recordingPassword: "7s?MHjHv"
    },
    {
      speaker: {
        name: "Tiancheng Xie",
        personalWebsite: "https://niconiconi.github.io/en_index.html",
        affiliation: {
          name: "Polyhdera Network",
          website: "https://www.polyhedra.network/"
        }
      },
      topic: "Pianist - A fully distributed approach to ZKP generation",
      topicLink: "https://eprint.iacr.org/2023/1271",
      date: "Friday, Sept 27, 1 PM PT / 4 PM ET / 10 PM CET",
      recording: "https://zoom.us/rec/share/0ZRmK_qx96xaukhbD8P9DcvbpAMEGwqzGKWgZZ7k7rlk7Bz6t4b77hQ-HHJ016nK.MqcHbX9MZJurY3tz",
      recordingPassword: "9KV#RkJa"
    },
    {
      speaker: {
        name: "Lev Soukhanov",
        // personalWebsite: "https://github.com/levs57",
        affiliation: {
          name: "Privacy Scaling Explorations",
          website: "https://pse.dev/"
        }
      },
      topic: "Turbocharging Keccak circuits with GF2_128 field",
      date: "Friday, Sept 13, 8 AM PT / 11 AM EST / 5 PM CET / 11 PM SGT",
      recording: "https://zoom.us/rec/share/ocmi9P9GAQNqQKAqzcSfUgoAurTp6-ky7NBC0mYIX4J9MFIm_vyfpRVpva8WNjP9.rbVYlehgHEoFA7wZ",
      recordingPassword: "#RjuB+Y5",
      slides: "https://hackmd.io/@levs57/B1uG_Hx6A#/"
    },
    {
      speaker: {
        name: "Zhenfei Zhang",
        personalWebsite: "https://zhenfeizhang.github.io/",
        affiliation: {
          name: "Polyhdera Network",
          website: "https://www.polyhedra.network/"
        }
      },
      topic: "Tricks used in Expander prover, including GKR² to accelerate Poseidon hash functions",
      date: "Friday, Sept 6, 8 AM PT / 11 AM EST / 5 PM CET / 11 PM SGT",
      recording: "https://zoom.us/rec/share/al5gScEwEhG3bdGUcQEZj2AaTtWhEb3MJx9oZ7J1JmpDQsZRxyWHlvIhihQCX8Hs.dR-SNfe0o0L0LpTd",
      recordingPassword: "4YYnVV1!"
    }
  ];

  return (
    <div className="content">
      <h2 className="text-2xl font-bold mb-4">Past Talks</h2>
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
              <strong>Topic:</strong> {talk.topicLink ? (
                <a href={talk.topicLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {talk.topic}
                </a>
              ) : talk.topic}
            </p>
            <p className="mb-2"><strong>Date:</strong> {talk.date}</p>
            <p className="mb-2">
              <strong>Recording:</strong> <a href={talk.recording} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Link</a>
              {talk.recordingPassword && ` (Password: ${talk.recordingPassword})`}
            </p>
            {talk.slides && (
              <p>
                <strong>Slides:</strong> <a href={talk.slides} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Link</a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastTalks;