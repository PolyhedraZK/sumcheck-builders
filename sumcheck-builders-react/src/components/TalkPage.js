import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { findTalkById } from '../data/talks';
import './styles/TalkPage.css';

const TalkPage = () => {
  const { talkId } = useParams();
  const talk = findTalkById(talkId);

  if (!talk) {
    return <Navigate to="/upcoming" replace />;
  }

  return (
    <div className="talk-page">
      <div className="talk-header">
        <h1>{talk.topic}</h1>
      </div>
      
      <div className="talk-content">
        <div className="talk-main">
          <div className="speakers">
            <a href={talk.speaker.personalWebsite} target="_blank" rel="noopener noreferrer">
              {talk.speaker.name}
            </a>
            {" from "}
            <a href={talk.speaker.affiliation.website} target="_blank" rel="noopener noreferrer">
              {talk.speaker.affiliation.name}
            </a>
          </div>
          
          <div className="date-time">
            <h3>Date and Time</h3>
            <p>{talk.date}</p>
          </div>

          <div className="abstract">
            <h3>Abstract</h3>
            <p>{talk.abstract}</p>
          </div>
        </div>

        <div className="talk-metadata">
          <div className="metadata-section">
            <h3>Speaker Bio</h3>
            <p>{talk.bio}</p>
          </div>

          <div className="metadata-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href={talk.speaker.personalWebsite} target="_blank" rel="noopener noreferrer">
                  Speaker's Website ↗
                </a>
              </li>
              <li>
                <a href={talk.speaker.affiliation.website} target="_blank" rel="noopener noreferrer">
                  Institution Website ↗
                </a>
              </li>
              {talk.topicLink && talk.topicLink !== '#' && (
                <li>
                  <a href={talk.topicLink} target="_blank" rel="noopener noreferrer">
                    Paper/Topic Link ↗
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkPage;
