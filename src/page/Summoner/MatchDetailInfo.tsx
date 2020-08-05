import React from 'react';

import Tooltip from '../../component/Tooltip';

import { MatchInfoContainer } from './style';

interface MatchDetailInfoProps {
  level: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
}
const MatchDetailInfo = (props: MatchDetailInfoProps) => {
  return (
    <MatchInfoContainer>
      <p>레벨{props.level}</p>
      <Tooltip message={`분당CS ${props.csPerMin}개`}>
        <p>
          {props.cs} ({props.csPerMin}) CS
        </p>
      </Tooltip>
      <Tooltip message="킬관여율">
        <p className="kill">킬관여 {props.contributionForKillRate}</p>
      </Tooltip>
    </MatchInfoContainer>
  );
};

export default MatchDetailInfo;
