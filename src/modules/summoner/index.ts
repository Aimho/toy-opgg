import { createAction, ActionType, createReducer } from 'typesafe-actions';

import { ISummonerState, ISummoner, IMostInfo, IMatches } from './types';

// action type
const GET_SUMMONER = 'summoner/GET_SUMMONER';
const GET_MOST_INFO = 'summoner/GET_SUMMONER_MOST_INFO';
const GET_MATCHES = 'summoner/GET_MATCHES';

// create action function
export const getSummoner = createAction(GET_SUMMONER)<ISummoner>();
export const getMostInfo = createAction(GET_MOST_INFO)<IMostInfo>();
export const getMatches = createAction(GET_MATCHES)<IMatches>();

// action
const actions = { getSummoner, getMostInfo, getMatches };
type Action = ActionType<typeof actions>;

// initialState
const initialState: ISummonerState = {};

// reducer
const cart = createReducer<ISummonerState, Action>(initialState, {
  [GET_SUMMONER]: (state, action) => {
    const summoner = action.payload;
    return { ...state, summoner };
  },

  [GET_MOST_INFO]: (state, action) => {
    const mostInfo = action.payload;
    return { ...state, mostInfo };
  },

  [GET_MATCHES]: (state, action) => {
    const matches = action.payload;
    return { ...state, matches };
  }
});

export default cart;
