import { createAction, ActionType, createReducer } from "typesafe-actions";

import { ICartState, ICart, IPurchaseReq } from "./types";

// action type
const ADD_ITEM = "cart/ADD_ITEM";
const CHANGE_ITEM = "cart/CHANGE_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const CREATE_PURCHASE = "cart/CREATE_PURCHASE";
const INIT_CART = "cart/INIT_CART";

// create action function
export const addItem = createAction(ADD_ITEM)<ICart>();
export const changeItem = createAction(CHANGE_ITEM)<ICart>();
export const removeItem = createAction(REMOVE_ITEM)<number>();
export const createPurchase = createAction(CREATE_PURCHASE)<IPurchaseReq[]>();
export const initCart = createAction(INIT_CART)();

// action
const actions = { addItem, changeItem, removeItem, createPurchase, initCart };
type Action = ActionType<typeof actions>;

// initialState
const initialState: ICartState = {
  list: [],
};

// reducer
const cart = createReducer<ICartState, Action>(initialState, {
  [ADD_ITEM]: (state, action) => {
    const list = state.list.concat(action.payload);
    return { list };
  },

  [CHANGE_ITEM]: (state, action) => {
    const list = state.list.map((item) =>
      item.id === action.payload.id ? action.payload : item
    );
    return { list };
  },

  [REMOVE_ITEM]: (state, action) => {
    const list = state.list.filter((item) => item.id !== action.payload);
    return { list };
  },

  [CREATE_PURCHASE]: (state, action) => {
    return { ...state, purchases: action.payload };
  },

  [INIT_CART]: () => {
    return { list: [] };
  },
});

export default cart;
