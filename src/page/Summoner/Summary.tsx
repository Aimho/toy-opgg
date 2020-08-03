import { fill } from 'lodash';
import React, { useState, useEffect } from 'react';

import useSummoner from '../../modules/summoner/useSummoner';
import CircleProgress from '../../component/CircleProgress';
import ColorPrint from '../../component/ColorPrint';
import Tooltip from '../../component/Tooltip';
import { getWinRate, getKDA } from '../../utils/calculate';

import {
  SummaryContainer,
  SummaryHeaderContainer,
  SummaryContentContainer,
  SummaryInfoContainer,
  SummaryRecord,
  SummaryKDAContainer,
  SummaryKDARecord,
  SummaryKDARate,
  SummaryChampContainer,
  SummaryChampCardContainer,
  SummaryChampImg,
  SummaryChampInfo,
  SummaryPositionContainer,
  SummaryPositionInfoContainer,
  SummaryPositionImg,
  SummaryEmptyChampImg,
  SummaryPositionInfo
} from './style';

interface SummaryProps {
  name: string;
}
const Summary = ({ name }: SummaryProps) => {
  // 솔랭, 자유 5:5 랭크
  const [tabKey, setTabKey] = useState('');
  const { matches, onGetMatches } = useSummoner();

  useEffect(() => {
    onGetMatches(name);
  }, [tabKey, name, onGetMatches]);

  if (!matches) return null;

  const summary = matches.summary;
  const totalPlay = summary.wins + summary.losses;
  const winRate = getWinRate({ wins: summary.wins, totalPlay });
  const KDA = getKDA({ ...summary });
  const killRate = getWinRate({
    wins: summary.kills,
    totalPlay: summary.kills + summary.assists
  });

  const champions = matches.champions;
  const EmptyChamps = () => {
    if (champions.length > 3) return null;
    const emptyItem = fill(Array(3 - champions.length), '');
    return (
      <React.Fragment>
        {emptyItem.map((___, index) => (
          <SummaryChampCardContainer key={index}>
            <SummaryEmptyChampImg />
            <SummaryChampInfo>
              <span className="champ-none">챔피언 정보가 없습니다.</span>
            </SummaryChampInfo>
          </SummaryChampCardContainer>
        ))}
      </React.Fragment>
    );
  };

  const positions = matches.positions;
  console.log(positions);

  const TabButton: React.FC<{ tabKey: string }> = (props) => (
    <button
      className={tabKey === props.tabKey ? 'active' : ''}
      onClick={() => setTabKey(props.tabKey)}
    >
      {props.children}
    </button>
  );

  return (
    <SummaryContainer>
      <SummaryHeaderContainer>
        <TabButton tabKey={''}>전체</TabButton>
        <TabButton tabKey={'솔랭'}>솔로게임</TabButton>
        <TabButton tabKey={'자유 5:5 랭크'}>자유랭크</TabButton>
      </SummaryHeaderContainer>

      <SummaryContentContainer>
        <SummaryInfoContainer>
          <SummaryRecord>
            <p className="record">
              {totalPlay}전 {summary.wins}승 {summary.losses}패
            </p>
            <CircleProgress percentage={winRate} />
          </SummaryRecord>

          <SummaryKDAContainer>
            <SummaryKDARecord>
              {summary.kills} <span className="divider">/</span>{' '}
              <span className="deaths">{summary.deaths}</span>{' '}
              <span className="divider">/</span> {summary.assists}
            </SummaryKDARecord>
            <SummaryKDARate>
              {ColorPrint.KDA(KDA)}

              <Tooltip message={`킬관여율`}>
                <b>({killRate}%)</b>
              </Tooltip>
            </SummaryKDARate>
          </SummaryKDAContainer>
        </SummaryInfoContainer>

        <SummaryChampContainer>
          {champions.map((item, index) => {
            return (
              <SummaryChampCardContainer key={index}>
                <SummaryChampImg src={item.imageUrl} alt={item.name} />
                <SummaryChampInfo>
                  {item.name} <br />
                  <span className="champ-win-rate">
                    {ColorPrint.WinRate(
                      getWinRate({
                        wins: item.wins,
                        totalPlay: item.wins + item.losses
                      })
                    )}
                  </span>
                  <span className="champ-record">
                    ({item.wins}승 {item.losses}패)
                  </span>
                  <span className="champ-kda">
                    {ColorPrint.KDA(getKDA({ ...item }), '평점')}
                  </span>
                </SummaryChampInfo>
              </SummaryChampCardContainer>
            );
          })}
          <EmptyChamps />
        </SummaryChampContainer>

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
                  {item.positionName} <br />
                  <span className="position-rate">{positionRate}%</span>
                  <span className="win-rate">
                    승률 <b>{winRate}</b>%
                  </span>
                </SummaryPositionInfo>
              </SummaryPositionInfoContainer>
            );
          })}
        </SummaryPositionContainer>
      </SummaryContentContainer>
    </SummaryContainer>
  );
};

export default Summary;
