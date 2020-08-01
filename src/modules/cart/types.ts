import { IFruit } from "../fruits/types";

export interface ICart extends IFruit {}
export interface IPurchaseReq {
  id: number;
  quantity: number;
}

export interface ICartState {
  list: ICart[];
  purchases?: IPurchaseReq[];
}
