import { createAction, ActionType, createReducer } from 'typesafe-actions';

import { ISummonerState, ISummoner } from './types';

// action type
const GET_SUMMONER = 'summoner/GET_SUMMONER';

// create action function
export const getSummoner = createAction(GET_SUMMONER)<ISummoner>();

// action
const actions = { getSummoner };
type Action = ActionType<typeof actions>;

// initialState
const initialState: ISummonerState = {};

// reducer
const cart = createReducer<ISummonerState, Action>(initialState, {
  [GET_SUMMONER]: (___, action) => {
    const summoner = action.payload;
    return { summoner };
  }
});

export default cart;
