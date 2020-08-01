import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../index";
import { ICart, IPurchaseReq } from "./types";
import {
  addItem,
  changeItem,
  removeItem,
  createPurchase,
  initCart,
} from "./index";

function useCart() {
  // state
  const state = useSelector((state: RootState) => state.cart);
  const cart = state.list;
  const itemCount = cart.length;
  const purchases = state.purchases;

  // dispatch functions
  const dispatch = useDispatch();
  const onAddItem = useCallback((item: ICart) => dispatch(addItem(item)), [
    dispatch,
  ]);

  const onChangeItem = useCallback(
    (item: ICart) => {
      if (!item.stock) {
        dispatch(removeItem(item.id));
      } else {
        dispatch(changeItem(item));
      }
    },
    [dispatch]
  );

  const onCreatePurchase = useCallback(
    (req: IPurchaseReq[]) => dispatch(createPurchase(req)),
    [dispatch]
  );

  const onInitCart = useCallback(() => dispatch(initCart()), [dispatch]);

  return {
    cart,
    itemCount,
    purchases,
    onAddItem,
    onChangeItem,
    onCreatePurchase,
    onInitCart,
  };
}

export default useCart;
