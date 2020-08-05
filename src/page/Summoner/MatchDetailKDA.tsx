import React from 'react';

import { Intl } from '../../utils/formatter';

import { MatchKDAContainer, MatchBadgeContainer } from './style';

interface MatchDetailKDAProps {
  assist: number;
  death: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
}
const MatchDetailKDA = (props: MatchDetailKDAProps) => {
  return (
    <MatchKDAContainer>
      <p className="record">
        {props.kill} <span className="divider">/</span>{' '}
        <span className="deaths">{props.death}</span>{' '}
        <span className="divider">/</span> {props.assist}
      </p>
      <p className="kda">
        {props.kdaString} <b>평점</b>
      </p>
      <MatchBadgeContainer>
        {props.largestMultiKillString && (
          <p className="badge kill">
            <Intl id={props.largestMultiKillString.toLowerCase()} />
          </p>
        )}
        {props.opScoreBadge && (
          <p className={`badge ${props.opScoreBadge.toLowerCase()}`}>
            {props.opScoreBadge}
          </p>
        )}
      </MatchBadgeContainer>
    </MatchKDAContainer>
  );
};

export default MatchDetailKDA;
