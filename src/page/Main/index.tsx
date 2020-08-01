import React, { useEffect } from 'react';

import useRouter from '../../hooks/useRouter';
import useCart from '../../modules/cart/useCart';
import { TFilter } from '../../modules/fruits/types';
import useFruits from '../../modules/fruits/useFruits';

import { FruitCardMain } from '../../component/FruitCard';

import {
  Container,
  ContainerBox,
  FilterContainer,
  FilterButton,
  CardContainer
} from './style';

function Main() {
  const { linkTo, search } = useRouter();
  const { cart } = useCart();
  const { fruits, filter, onChangeFilter } = useFruits();

  useEffect(() => onChangeFilter(search), [search, onChangeFilter]);

  const buttonTheme = (active?: TFilter) =>
    active === filter ? 'primary' : 'tertiary';

  const filterFruits = () => {
    if (!filter) return fruits;
    if (filter === 'normal') return fruits.filter((item) => !item.isPrime);
    return fruits.filter((item) => item.isPrime);
  };

  return (
    <Container>
      <ContainerBox>
        <FilterContainer>
          <FilterButton theme={buttonTheme()} onClick={() => linkTo('/')}>
            전체
          </FilterButton>
          <FilterButton
            theme={buttonTheme('normal')}
            onClick={() => linkTo('/?filter=normal')}
          >
            일반 과일
          </FilterButton>
          <FilterButton
            theme={buttonTheme('prime')}
            onClick={() => linkTo('/?filter=prime')}
          >
            <i>prime</i> 과일
          </FilterButton>
        </FilterContainer>
      </ContainerBox>

      <ContainerBox>
        <CardContainer>
          {filterFruits().map((fruit) => {
            // 해당 과일이 cart에 담겨있으면 해당 정보 넘김
            const cartFruit = cart.find((item) => item.id === fruit.id);
            return (
              <FruitCardMain
                key={fruit.id}
                fruit={fruit}
                cartFruit={cartFruit}
                className="card-item"
              />
            );
          })}
        </CardContainer>
      </ContainerBox>
    </Container>
  );
}

export default Main;
