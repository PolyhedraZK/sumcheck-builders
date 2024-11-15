import React from 'react';
import TalksList from './TalksList';
import { pastTalks } from '../data/talks';

const PastTalks = () => {
  return <TalksList title="Past Talks" talks={pastTalks} showZoomLink={false} />;
};

export default PastTalks;
