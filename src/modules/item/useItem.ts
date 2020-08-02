import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import itemApi from '../../api/itemApi';
import { RootState } from '../index';
import { getItems } from './index';

function useItem() {
  // state
  const state = useSelector((state: RootState) => state.item);
  const items = state.list;

  // dispatch functions
  const dispatch = useDispatch();
  const onGetItems = useCallback(() => {
    itemApi
      .getItems()
      .then((resp) => {
        if (resp.data && resp.data.data) {
          dispatch(getItems(resp.data.data));
        }
      })
      .catch((e) => console.error('getItemsApi error'));
  }, [dispatch]);

  return {
    items,
    onGetItems
  };
}

export default useItem;
