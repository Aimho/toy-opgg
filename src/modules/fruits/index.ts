import { createAction, ActionType, createReducer } from 'typesafe-actions';

import { IFruitState, IFruit, TFilter } from './types';

// action type
const GET_LIST = 'fruits/GET_LIST';
const CHANGE_FILTER = 'fruits/CHANGE_FILTER';

// create action function
export const getList = createAction(GET_LIST)<IFruit[]>();
export const changeFilter = createAction(CHANGE_FILTER)<TFilter>();

// action
const actions = { getList, changeFilter };
type Action = ActionType<typeof actions>;

// initialState
const initialState: IFruitState = {
  list: []
};

// reducer
const fruits = createReducer<IFruitState, Action>(initialState, {
  [GET_LIST]: (___, action) => ({
    list: action.payload
  }),

  [CHANGE_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload
  })
});

export default fruits;
