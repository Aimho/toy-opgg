import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import summonerApi from '../../api/summonerApi';
import { RootState } from '../index';
import { getSummoner, getMostInfo, getMatches } from './index';
import { IChampions, IRecentWinRate } from './types';

function useSummoner() {
  // state
  const state = useSelector((state: RootState) => state.summoner);
  const summoner = state.summoner;
  const mostInfo = state.mostInfo;
  const matches = state.matches;

  // dispatch functions
  const dispatch = useDispatch();
  const onGetSummoner = useCallback(() => {
    summonerApi()
      .getSummoner()
      .then((resp) => {
        if (resp.data && resp.data.summoner) {
          dispatch(getSummoner(resp.data.summoner));
        }
      })
      .catch((e) => console.error('getSummoner api error'));
  }, [dispatch]);

  const onGetMostInfo = useCallback(() => {
    summonerApi()
      .getMostInfo()
      .then((resp) => {
        if (resp.data) {
          console.log(resp.data);
          // 게임 플레이 많은 순서로 정렬
          const champions = resp.data.champions as IChampions[];
          champions.sort((a, b) => b.games - a.games);
          const recentWinRate = resp.data.recentWinRate as IRecentWinRate[];
          recentWinRate.sort((a, b) => b.wins + b.losses - (a.wins + a.losses));

          dispatch(getMostInfo({ champions, recentWinRate }));
        }
      })
      .catch((e) => console.error('getMostInfo api error'));
  }, [dispatch]);

  const onGetMatches = useCallback(() => {
    summonerApi()
      .getMatches()
      .then((resp) => {
        if (resp.data) {
          dispatch(getMatches(resp.data));
        }
      })
      .catch((e) => console.error('getMatches api error'));
  }, [dispatch]);

  return {
    summoner,
    onGetSummoner,
    mostInfo,
    onGetMostInfo,
    matches,
    onGetMatches
  };
}

export default useSummoner;
