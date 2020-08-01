import React from 'react';

import useCart from '../../modules/cart/useCart';
import { ICart } from '../../modules/cart/types';
import { IFruit } from '../../modules/fruits/types';
import { formatCurrency } from '../../utils/formatter';

import { Button } from '../elements';

import {
  Container,
  Type,
  Emoji,
  InfoContainer,
  TypoP,
  Price,
  Name,
  Actions
} from './style';

interface FruitCardProps {
  className?: string;
  fruit: IFruit;
  cartFruit?: ICart;
}

const FruitCardMain: React.FC<FruitCardProps> = (props) => {
  const { onAddItem, onChangeItem } = useCart();

  const className = props.className ? props.className : '';
  const fruit = props.fruit;
  const cartFruit = props.cartFruit;

  const CardType = () => {
    if (!fruit.isPrime) return null;
    return <Type>prime</Type>;
  };

  const StockInfo = () => {
    let stock = fruit.stock;
    let CartFruitStock = null;

    if (cartFruit) {
      stock = stock - cartFruit.stock;
      CartFruitStock = (
        <TypoP>
          <span className="info-title">수량</span>
          {cartFruit.stock}
        </TypoP>
      );
    }

    return (
      <React.Fragment>
        <TypoP>
          <span className="info-title">잔량</span>
          {stock}
        </TypoP>
        {CartFruitStock}
      </React.Fragment>
    );
  };

  const DeleteCartButton = () => {
    if (!cartFruit) return null;
    const onClick = () =>
      onChangeItem({ ...cartFruit, stock: cartFruit.stock - 1 });
    return <Button onClick={onClick}>빼기</Button>;
  };

  const AddCartButton = () => {
    let theme = 'primary';
    let onClick: () => void = () => onAddItem({ ...fruit, stock: 1 });
    const disabled = cartFruit && cartFruit.stock === fruit.stock;

    if (cartFruit) {
      theme = 'secondary';
      onClick = () =>
        onChangeItem({ ...cartFruit, stock: cartFruit.stock + 1 });
    }

    return (
      <Button theme={theme} onClick={onClick} disabled={disabled}>
        담기
      </Button>
    );
  };

  return (
    <Container className={className}>
      <CardType />

      <Emoji>
        <span role="img" aria-label="emoji">
          {fruit.image}
        </span>
      </Emoji>

      <InfoContainer>
        <Name>{fruit.name}</Name>
        <Price>{formatCurrency(fruit.price)}원</Price>
        <StockInfo />
        <Actions>
          <DeleteCartButton />
          <AddCartButton />
        </Actions>
      </InfoContainer>
    </Container>
  );
};

export default FruitCardMain;
