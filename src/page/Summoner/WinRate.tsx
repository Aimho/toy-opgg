import React, { useState, useEffect } from 'react';

import useSummoner from '../../modules/summoner/useSummoner';
import ColorPrint from '../../component/ColorPrint';

import {
  WinRateContainer,
  WinRateTabContainer,
  RecentWinRateCardContainer,
  ChampionsCardContainer
} from './style';

interface WinRateProps {
  name: string;
}

const WinRate = ({ name }: WinRateProps) => {
  const [tabKey, setTabKey] = useState('champions');
  const { champions, recentWinRate, onGetMostInfo } = useSummoner();

  useEffect(() => {
    onGetMostInfo(name);
  }, [name, onGetMostInfo]);

  const TabButton: React.FC<{ tabKey: string }> = (props) => (
    <button
      className={tabKey === props.tabKey ? 'active' : ''}
      onClick={() => setTabKey(props.tabKey)}
    >
      {props.children}
    </button>
  );

  const TabContent = () => {
    if (tabKey === 'champions') {
      return (
        <React.Fragment>
          {champions.map((item, index) => {
            const winRate = Math.floor((item.wins / item.games) * 100);
            const rateClassName = winRate >= 60 ? 'rate max' : 'rate';
            const KDA = ((item.kills + item.assists) / item.deaths).toFixed(2);

            return (
              <ChampionsCardContainer key={index}>
                <img
                  className="champion-img"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="name">
                  <h5>{item.name}</h5>
                  <p>CS {item.cs} (2.4)</p>
                </div>
                <div className="grade">
                  <h5>{ColorPrint.KDA(Number(KDA), '평점')}</h5>
                  <p>
                    {item.kills} / {item.deaths} / {item.assists}
                  </p>
                </div>
                <div className={rateClassName}>
                  <h5>{ColorPrint.WinRate(winRate)}</h5>
                  <p>{item.games}게임</p>
                </div>
              </ChampionsCardContainer>
            );
          })}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {recentWinRate.map((item, index) => {
          const totalPlay = item.wins + item.losses;
          const winRate = Math.floor((item.wins / totalPlay) * 100);

          return (
            <RecentWinRateCardContainer key={index} winRate={winRate}>
              <img
                className="champion-img"
                src={item.imageUrl}
                alt={item.name}
              />
              <h5 className="name">{item.name}</h5>
              <h5 className="rate">{winRate}%</h5>
              <div className="rate-bar">
                <h5>{item.wins}승</h5>
                <h5>{item.losses}패</h5>
              </div>
            </RecentWinRateCardContainer>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <WinRateContainer>
      <WinRateTabContainer>
        <TabButton tabKey={'champions'}>챔피언 승률</TabButton>
        <TabButton tabKey={'recentWinRate'}>7일간 랭크 승률</TabButton>
      </WinRateTabContainer>
      <TabContent />
    </WinRateContainer>
  );
};

export default WinRate;
