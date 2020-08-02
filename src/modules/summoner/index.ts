import { createAction, ActionType, createReducer } from 'typesafe-actions';

import { ISummonerState, ISummoner, IMostInfo } from './types';

// action type
const GET_SUMMONER = 'summoner/GET_SUMMONER';
const GET_MOST_INFO = 'summoner/GET_SUMMONER_MOST_INFO';

// create action function
export const getSummoner = createAction(GET_SUMMONER)<ISummoner>();
export const getMostInfo = createAction(GET_MOST_INFO)<IMostInfo>();

// action
const actions = { getSummoner, getMostInfo };
type Action = ActionType<typeof actions>;

// initialState
const initialState: ISummonerState = {
  mostInfo: {
    champions: [],
    recentWinRate: []
  }
};

// reducer
const cart = createReducer<ISummonerState, Action>(initialState, {
  [GET_SUMMONER]: (state, action) => {
    const summoner = action.payload;
    return { ...state, summoner };
  },

  [GET_MOST_INFO]: (state, action) => {
    const mostInfo = action.payload;
    return { ...state, mostInfo };
  }
});

export default cart;
