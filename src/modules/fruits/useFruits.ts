import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFruitsApi } from '../../api/fruitsApi';
import { searchQueryToObject } from '../../utils/formatter';

import { RootState } from '../index';
import { getList, changeFilter } from './index';
import { IFruit } from './types';

function useFruits() {
  // state
  const state = useSelector((state: RootState) => state.fruits);
  const fruits = state.list;
  const filter = state.filter;

  // dispatch functions
  const dispatch = useDispatch();
  const onGetFruits = useCallback(() => {
    getFruitsApi()
      .then((resp) => {
        if (resp.data && resp.data.fruits) {
          // sort prime first
          const fruits = (resp.data.fruits as IFruit[]).sort(
            (a, b) => Number(b.isPrime) - Number(a.isPrime)
          );
          // update redux
          dispatch(getList(fruits));
        } else {
          console.error('resp data is null');
        }
      })
      .catch((e) => console.error('get fruits error', e));
  }, [dispatch]);

  const onChangeFilter = useCallback(
    (query?: string) => {
      if (!query) {
        dispatch(changeFilter(undefined));
      } else {
        const { filter } = searchQueryToObject(query);
        dispatch(changeFilter(filter));
      }
    },
    [dispatch]
  );

  return {
    fruits,
    filter,
    onGetFruits,
    onChangeFilter
  };
}

export default useFruits;
