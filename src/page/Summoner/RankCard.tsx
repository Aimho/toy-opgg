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
      return (
        <RankCardContainer key={index}>
          <RankImg
            style={{ backgroundImage: rankImg }}
            className={!index ? 'solo' : 'team'}
          />
          <RankInfo>
            <p className="title">{item.tierRank.name}</p>
            <p>
              총 <b>{item.wins + item.losses}</b>게임
            </p>
            <h5>{item.tierRank.tier}</h5>
            <p>
              <b>{item.tierRank.lp}LP</b> / {item.wins}승 {item.losses}패
            </p>
          </RankInfo>
        </RankCardContainer>
      );
    })}
  </React.Fragment>
);

export default RankCard;
