import React from 'react';

import { ILeague } from '../../modules/summoner/types';

import { RankCardContainer, RankImg, RankInfo } from './style';

interface RankCardProps {
  leagues: ILeague[];
}

const RankCard = ({ leagues }: RankCardProps) => (
  <React.Fragment>
    {leagues.map((item, index) => {
      const rankImg = `url(${item.tierRank.imageUrl})`;
      const totalPlay = item.wins + item.losses;
      const winRate = Math.floor((item.wins / totalPlay) * 100);

      return (
        <RankCardContainer key={index}>
          <RankImg
            style={{ backgroundImage: rankImg }}
            className={!index ? 'solo' : 'team'}
          />
          <RankInfo>
            <p className="title">{item.tierRank.name}</p>
            <p>
              총 <b>{totalPlay}</b>게임
            </p>
            <h5>{item.tierRank.tier}</h5>
            <p>
              <b>{item.tierRank.lp}LP</b> / {item.wins}승 {item.losses}패
            </p>
            <p>승률 {winRate}%</p>
          </RankInfo>
        </RankCardContainer>
      );
    })}
  </React.Fragment>
);

export default RankCard;
