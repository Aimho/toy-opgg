import React from 'react';

import { Badge, Button } from '../elements';
import { Container, Title, Actions } from './style';
import useRouter from '../../hooks/useRouter';
import useCart from '../../modules/cart/useCart';

const Header = () => {
  const { itemCount } = useCart();
  const { linkTo, pathName } = useRouter();
  const isPageCart = pathName.indexOf('/cart') ? true : false;

  const CartBadge = () => (itemCount ? <Badge label={itemCount} /> : null);

  return (
    <Container>
      <Title>크몽이네 과일가게</Title>
      <Actions>
        <Button
          theme={isPageCart ? '' : 'tertiary'}
          onClick={() => linkTo('/')}
        >
          상품목록
        </Button>
        <Button
          theme={isPageCart ? 'tertiary' : ''}
          onClick={() => linkTo('/cart')}
        >
          장바구니 <CartBadge />
        </Button>
      </Actions>
    </Container>
  );
};

export default Header;
