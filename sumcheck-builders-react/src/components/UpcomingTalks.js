import React from 'react';
import TalksList from './TalksList';
import { upcomingTalks } from '../data/talks';

const UpcomingTalks = () => {
  return <TalksList title="Upcoming Talks" talks={upcomingTalks} showZoomLink={true} />;
};

export default UpcomingTalks;
