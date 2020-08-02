import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import summonerApi from '../../api/summonerApi';
import { RootState } from '../index';
import { getSummoner } from './index';

function useSummoner() {
  // state
  const state = useSelector((state: RootState) => state.summoner);
  const summoner = state.summoner;

  // dispatch functions
  const dispatch = useDispatch();
  const onGetSummoner = useCallback(
    (userName: string) => {
      summonerApi(userName)
        .getSummoner()
        .then((resp) => {
          if (resp.data && resp.data.summoner) {
            dispatch(getSummoner(resp.data.summoner));
          }
        })
        .catch((e) => console.error('getSummoner api error'));
    },
    [dispatch]
  );

  return {
    summoner,
    onGetSummoner
  };
}

export default useSummoner;
