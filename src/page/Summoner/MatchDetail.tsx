import React, { useState, useEffect } from 'react';

import summonerApi from '../../api/summonerApi';
import { IMatchGame, IMatchGameDetail } from '../../modules/summoner/types';
import { diffTodayDay } from '../../utils/calculate';

import { MatchDetailContainer, MatchType, MatchChamp } from './style';
import { secondsToTime } from '../../utils/formatter';

interface MatchDetailProps {
  index: number;
  game: IMatchGame;
}
const MatchDetail = ({ game, index }: MatchDetailProps) => {
  const [matchDetail, setMatchDetail] = useState({} as IMatchGameDetail);
  // console.log(game);
  // console.log(matchDetail);

  // useEffect(() => {
  //   const gameId = game.gameId;
  //   const summonerName = game.summonerName;
  //   if (!gameId || !summonerName) return;

  //   function onGetMatchDetail() {
  //     summonerApi(summonerName)
  //       .getMatchDetail(gameId)
  //       .then((resp) => setMatchDetail(resp.data));
  //   }

  //   setTimeout(() => {
  //     onGetMatchDetail();
  //   }, 200 * index);
  // }, [game, index]);

  const type = () => {
    if (game.needRenew)
      return {
        className: 'renew',
        label: '다시하기'
      };
    if (game.isWin)
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
    const diffDay = diffTodayDay(new Date(game.createDate * 1000));
    if (diffDay === 0) return '오늘';
    if (diffDay === 1) return '하루 전';
    return `${diffDay}일 전`;
  };

  return (
    <MatchDetailContainer className={type().className}>
      <MatchType>
        <h5>{game.gameType}</h5>
        <p>{createDay()}</p>
        <hr />
        <h5 className={type().className}>{type().label}</h5>
        <p>{secondsToTime(game.gameLength)}</p>
      </MatchType>

      <MatchChamp>
        <span className="images">
          <img
            src={game.champion.imageUrl}
            alt="레오나"
            width="46"
            height="46"
          />
          <span className="spells">
            {game.spells.map((spell, index) => (
              <img
                src={spell.imageUrl}
                alt={`spell${index}`}
                width="22"
                height="22"
                key={index}
              />
            ))}
          </span>
          <span className="peak">
            {game.peak.map((item, index) => (
              <img
                src={item}
                alt={`spell${index}`}
                width="22"
                height="22"
                key={index}
              />
            ))}
          </span>
        </span>
        <p>레오나</p>
      </MatchChamp>
    </MatchDetailContainer>
  );
};

export default MatchDetail;
