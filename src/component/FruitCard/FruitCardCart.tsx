import React from 'react';

import useCart from '../../modules/cart/useCart';
import { ICart } from '../../modules/cart/types';
import { formatCurrency } from '../../utils/formatter';

import { Button } from '../elements';

import {
  Container,
  Type,
  Emoji,
  InfoContainer,
  TypoP,
  Name,
  Price,
  Divider,
  Actions
} from './style';

interface FruitCardProps {
  className?: string;
  cartFruit: ICart;
}

const FruitCardCart: React.FC<FruitCardProps> = (props) => {
  const { onChangeItem } = useCart();

  const className = props.className ? props.className : '';
  const cartFruit = props.cartFruit;

  const CardType = () => {
    if (!cartFruit.isPrime) return null;
    return <Type>prime</Type>;
  };

  const DeleteCartButton = () => {
    const onClick = () =>
      onChangeItem({ ...cartFruit, stock: cartFruit.stock - 1 });
    return <Button onClick={onClick}>취소</Button>;
  };

  return (
    <Container className={className}>
      <CardType />

      <Emoji>
        <span role="img" aria-label="emoji">
          {cartFruit.image}
        </span>
      </Emoji>

      <InfoContainer>
        <Name>{cartFruit.name}</Name>
        <Price>{formatCurrency(cartFruit.price)}원</Price>
        <TypoP>
          <span className="info-title">수량</span>
          {cartFruit.stock}
        </TypoP>
        <Divider />
        <TypoP>
          <span className="info-title">상품금액</span>
          {formatCurrency(cartFruit.stock * cartFruit.price)}원
        </TypoP>
        <Actions>
          <DeleteCartButton />
        </Actions>
      </InfoContainer>
    </Container>
  );
};

export default FruitCardCart;
