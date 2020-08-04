import React from 'react';

import { IMatchPosition } from '../../modules/summoner/types';
import { getWinRate } from '../../utils/calculate';
import { Intl } from '../../utils/formatter';

import {
  SummaryPositionContainer,
  SummaryPositionInfoContainer,
  SummaryPositionImg,
  SummaryPositionInfo
} from './style';

interface SummaryChampProps {
  totalPlay: number;
  positions: IMatchPosition[];
}
const SummaryPosition = ({ positions, totalPlay }: SummaryChampProps) => {
  return (
    <SummaryPositionContainer>
      <p className="title">선호하는 포지션 (랭크)</p>
      {positions.map((item, index) => {
        const position = item.position.toLowerCase();
        const positionRate = getWinRate({ wins: item.games, totalPlay });
        const winRate = getWinRate({
          wins: item.wins,
          totalPlay: item.games
        });
        return (
          <SummaryPositionInfoContainer key={index}>
            <SummaryPositionImg>
              <span className={position} />
            </SummaryPositionImg>
            <SummaryPositionInfo>
              <Intl id={`position.${item.positionName}`} /> <br />
              <span className="position-rate">{positionRate}%</span>
              <span className="win-rate">
                승률 <b>{winRate}</b>%
              </span>
            </SummaryPositionInfo>
          </SummaryPositionInfoContainer>
        );
      })}
    </SummaryPositionContainer>
  );
};

export default SummaryPosition;
