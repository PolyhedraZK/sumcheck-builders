import React from 'react';
import { Link } from 'react-router-dom';

const TalksList = ({ title, talks, showZoomLink = false }) => {
  const zoomLink = "https://zoom.us/j/9132917498?pwd=cO2kdIxCEOkwrwwd0Qvd61Rc8UxtWu.1#success";

  const formatRecordingLink = (recording, password) => {
    if (!recording) return null;
    
    const isYouTube = recording.includes('youtube.com') || recording.includes('youtu.be');
    const isGoogleDrive = recording.includes('drive.google.com');
    
    let text = 'Watch Recording ↗';
    if (isYouTube) text = 'Watch on YouTube ↗';
    else if (isGoogleDrive) text = 'Watch on Google Drive ↗';
    
    return (
      <>
        <a href={recording} target="_blank" rel="noopener noreferrer" className="recording-link">
          {text}
        </a>
        {password && <span className="recording-password">, Passcode: {password}</span>}
      </>
    );
  };

  return (
    <div className="content">
      <h2>{title}</h2>
      {showZoomLink && (
        <div className="zoom-invite">
          <span>Join our talks via: </span>
          <a 
            href={zoomLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            Zoom Meeting ↗
          </a>
        </div>
      )}
      <ul className="talks-list">
        {talks.map((talk) => (
          <li key={talk.id} className="talk-item">
            <h3>
              <a href={talk.speaker.personalWebsite} target="_blank" rel="noopener noreferrer">
                {talk.speaker.name}
              </a>
              {" from "}
              <a href={talk.speaker.affiliation.website} target="_blank" rel="noopener noreferrer">
                {talk.speaker.affiliation.name}
              </a>
            </h3>
            <p className="topic">
              <strong>Topic: </strong>
              <Link to={`/talks/${talk.id}`} className="talk-link">
                {talk.topic}
              </Link>
            </p>
            <p className="date"><strong>Date: </strong>{talk.date}</p>
            {talk.recording && (
              <p className="recording">
                <strong>Recording: </strong>
                {formatRecordingLink(talk.recording, talk.recordingPassword)}
              </p>
            )}
            {talk.slides && (
              <p className="slides">
                <strong>Slides: </strong>
                <a href={talk.slides} target="_blank" rel="noopener noreferrer">
                  View Slides ↗
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalksList;
