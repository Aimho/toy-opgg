import React, { useLayoutEffect } from 'react';

import useRouter from '../../hooks/useRouter';
import useSummoner from '../../modules/summoner/useSummoner';
import { searchQueryToObject } from '../../utils/formatter';

import Header from './Header';
import PreviousTiers from './PreviousTiers';
import Profile from './Profile';

import { Container, BasicContainer, DetailContainer } from './style';

const Summoner = () => {
  const { search } = useRouter();
  const { summoner, onGetSummoner } = useSummoner();

  useLayoutEffect(() => {
    const query = searchQueryToObject(search);
    if (query && query.userName) {
      onGetSummoner(query.userName);
    }
  }, [search, onGetSummoner]);

  // Todo Loading
  if (!summoner) return null;

  return (
    <Container>
      <Header />

      <BasicContainer>
        <PreviousTiers previousTiers={summoner.previousTiers} />
        <Profile {...summoner} />
      </BasicContainer>

      <DetailContainer>콘텐츠</DetailContainer>
    </Container>
  );
};

export default Summoner;
