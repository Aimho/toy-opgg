import React, { useState, useEffect } from 'react';

import useSummoner from '../../modules/summoner/useSummoner';

import SummaryInfo from './SummaryInfo';
import SummaryChamp from './SummaryChamp';
import SummaryPosition from './SummaryPosition';
import {
  SummaryContainer,
  SummaryHeaderContainer,
  SummaryContentContainer
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
  const champions = matches.champions;
  const positions = matches.positions;

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
        <SummaryInfo {...summary} />
        <SummaryChamp champions={champions} />
        <SummaryPosition totalPlay={totalPlay} positions={positions} />
      </SummaryContentContainer>
    </SummaryContainer>
  );
};

export default Summary;
