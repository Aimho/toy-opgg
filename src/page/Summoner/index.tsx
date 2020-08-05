import React, { useLayoutEffect } from 'react';

import useRouter from '../../hooks/useRouter';
import useSummoner from '../../modules/summoner/useSummoner';
import { searchQueryToObject } from '../../utils/formatter';

import Header from './Header';
import PreviousTiers from './PreviousTiers';
import Profile from './Profile';
import RankCard from './RankCard';
import WinRate from './WinRate';
import Summary from './Summary';
import MatchDetail from './MatchDetail';

import {
  Container,
  BasicContainer,
  DetailContainer,
  MatchesContainer,
  MostContainer
} from './style';

const Summoner = () => {
  const { search } = useRouter();
  const { summoner, onGetSummoner, matches } = useSummoner();

  useLayoutEffect(() => {
    const query = searchQueryToObject(search);
    onGetSummoner(query.userName);
  }, [search, onGetSummoner]);

  if (!summoner) {
    return (
      <Container>
        <Header />
      </Container>
    );
  }

  const LoadMatchDetail = () => {
    if (!matches) return null;
    const query = searchQueryToObject(search);
    const filterGames = [...matches.games];

    if (query.filter) {
      return filterGames
        .filter((item) => item.gameType === query.filter)
        .map((game, index) => (
          <MatchDetail key={index} index={index} game={game} />
        ));
    }
    return filterGames.map((game, index) => (
      <MatchDetail key={index} index={index} game={game} />
    ));
  };

  return (
    <Container>
      <Header />

      <BasicContainer>
        <PreviousTiers previousTiers={summoner.previousTiers} />
        <Profile {...summoner} />
      </BasicContainer>

      <DetailContainer>
        <MostContainer>
          <RankCard leagues={summoner.leagues} />
          <WinRate name={summoner.name} />
        </MostContainer>

        <MatchesContainer>
          <Summary name={summoner.name} />
          {LoadMatchDetail()}
        </MatchesContainer>
      </DetailContainer>
    </Container>
  );
};

export default Summoner;
