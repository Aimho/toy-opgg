import React from 'react';

import { IMatchGameDetail } from '../../modules/summoner/types';

import { MatchTeamContainer, MatchTeam } from './style';

interface MatchDetailTeamProps {
  summonerName: string;
  details: IMatchGameDetail[];
}
const MatchDetailTeam = ({ details, summonerName }: MatchDetailTeamProps) => {
  return (
    <React.Fragment>
      {details.map((detail, detailIndex) => (
        <MatchTeamContainer key={detailIndex}>
          {detail.players.map((player, playerIndex) => {
            const boldName = summonerName === player.summonerName ? 'bold' : '';
            return (
              <MatchTeam key={playerIndex}>
                <img src={player.champion.imageUrl} alt={player.summonerName} />
                <p className={boldName}>{player.summonerName}</p>
              </MatchTeam>
            );
          })}
        </MatchTeamContainer>
      ))}
    </React.Fragment>
  );
};

export default MatchDetailTeam;
