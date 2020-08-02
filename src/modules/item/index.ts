import { createAction, ActionType, createReducer } from 'typesafe-actions';

import { IItemState } from './types';

// action type
const GET_ITEMS = 'item/GET_ITEMS';

// create action function
export const getItems = createAction(GET_ITEMS)<any>();

// action
const actions = { getItems };
type Action = ActionType<typeof actions>;

// initialState
const initialState: IItemState = {
  list: []
};

// reducer
const cart = createReducer<IItemState, Action>(initialState, {
  [GET_ITEMS]: (___, action) => {
    const list = action.payload;
    return { list };
  }
});

export default cart;
