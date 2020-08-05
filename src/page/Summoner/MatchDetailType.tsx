import React from 'react';

import { diffTodayDay } from '../../utils/calculate';

import { MatchTypeContainer } from './style';
import { secondsToTime } from '../../utils/formatter';

interface MatchDetailTypeProps {
  gameLength: number;
  gameType: string;
  isWin: boolean;
  needRenew: false;
  createDate: number;
}
const MatchDetailType = (props: MatchDetailTypeProps) => {
  const type = () => {
    if (props.needRenew)
      return {
        className: 'renew',
        label: '다시하기'
      };
    if (props.isWin)
      return {
        className: 'win',
        label: '승리'
      };
    return {
      className: 'losses',
      label: '패배'
    };
  };

  const createDay = () => {
    const diffDay = diffTodayDay(new Date(props.createDate * 1000));
    if (diffDay === 0) return '오늘';
    if (diffDay === 1) return '하루 전';
    return `${diffDay}일 전`;
  };

  return (
    <MatchTypeContainer>
      <h5>{props.gameType}</h5>
      <p>{createDay()}</p>
      <hr />
      <h5 className={type().className}>{type().label}</h5>
      <p>{secondsToTime(props.gameLength)}</p>
    </MatchTypeContainer>
  );
};

export default MatchDetailType;
