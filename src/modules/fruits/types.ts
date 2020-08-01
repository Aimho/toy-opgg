export interface IFruit {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: number;
  isPrime: boolean;
}

export interface IFruitResp {
  list: IFruit[];
}

export type TFilter = 'prime' | 'normal' | undefined;
export interface IFruitState extends IFruitResp {
  filter?: TFilter;
}
