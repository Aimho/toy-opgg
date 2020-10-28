import React, { useState, useEffect } from 'react';

import summonerApi from '../../api/summonerApi';
import { IMatchGame, IMatchGameDetail } from '../../modules/summoner/types';

import { ExpandMoreIcon } from '../../component/SvgIcon';

import {
  MatchDetailContainer,
  MatchCollapseBtn,
  MatchReportContainer
} from './style';
import MatchDetailType from './MatchDetailType';
import MatchDetailChamp from './MatchDetailChamp';
import MatchDetailKDA from './MatchDetailKDA';
import MatchDetailInfo from './MatchDetailInfo';
import MatchDetailItems from './MatchDetailItems';
import MatchDetailTeam from './MatchDetailTeam';

interface MatchDetailProps {
  index: number;
  game: IMatchGame;
}
const MatchDetail = ({ game, index }: MatchDetailProps) => {
  const [collapse, setCollapse] = useState(false);
  const [matchDetail, setMatchDetail] = useState([] as IMatchGameDetail[]);
  const ward = game.stats.ward;
  const general = game.stats.general;

  useEffect(() => {
    const gameId = game.gameId;
    const summonerName = game.summonerName;
    if (!gameId || !summonerName) return;

    function onGetMatchDetail() {
      summonerApi()
        .getMatchDetail()
        .then((resp) => {
          if (resp.data && resp.data.teams) {
            setMatchDetail(resp.data.teams);
          }
        });
    }

    setTimeout(() => {
      onGetMatchDetail();
    }, 200 * index);
  }, [game, index]);

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

  return (
    <MatchDetailContainer className={type().className}>
      <MatchDetailType {...game} />

      <MatchDetailChamp {...game} />

      <MatchDetailKDA {...general} />

      <MatchDetailInfo level={game.champion.level} {...general} />

      <MatchDetailItems
        isWin={game.isWin}
        items={game.items}
        visionWardsBought={ward.visionWardsBought}
      />

      <MatchDetailTeam summonerName={game.summonerName} details={matchDetail} />

      <MatchCollapseBtn
        className={type().className}
        onClick={() => setCollapse((collapse) => !collapse)}
      >
        <ExpandMoreIcon
          className={`expand-icon ${collapse ? 'active' : ''}`}
          width="30"
          height="30"
        />
      </MatchCollapseBtn>

      {collapse && (
        <MatchReportContainer className={type().className}>
          매치 더보기 기능은 제외합니다.
        </MatchReportContainer>
      )}
    </MatchDetailContainer>
  );
};

export default MatchDetail;
