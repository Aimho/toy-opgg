import React, { useLayoutEffect } from 'react';

import useRouter from '../../hooks/useRouter';
import useSummoner from '../../modules/summoner/useSummoner';
import { searchQueryToObject } from '../../utils/formatter';

const Summoner = () => {
  const { search } = useRouter();
  const { onGetSummoner } = useSummoner();

  useLayoutEffect(() => {
    const query = searchQueryToObject(search);
    if (query && query.userName) {
      onGetSummoner(query.userName);
    }
  }, [search, onGetSummoner]);

  return <div>소환사 정보</div>;
};

export default Summoner;
