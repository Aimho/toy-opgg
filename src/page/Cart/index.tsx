import React, { useState } from "react";

import useRouter from "../../hooks/useRouter";
import useCart from "../../modules/cart/useCart";
import { formatCurrency } from "../../utils/formatter";

import { Button } from "../../component/elements";
import { FruitCardCart } from "../../component/FruitCard";
import Modal from "../../component/Modal";

import {
  Container,
  ContainerEmpty,
  ContainerBox,
  CardContainer,
  PaymentContainer,
  TypoP,
  Divider,
  TotalPrice,
  ActionContainer,
  ModalTitle,
  ModalContent,
  ModalActionButton,
} from "./style";

const Cart = () => {
  const { linkTo } = useRouter();
  const { cart, purchases, onCreatePurchase, onInitCart } = useCart();
  const [activeModal, setActiveModal] = useState(false);

  if (cart.length === 0) {
    return (
      <Container>
        <ContainerEmpty>
          <img alt="❔" src="https://twemoji.maxcdn.com/2/svg/2754.svg" />
          <p>장바구니가 비어있습니다.</p>
        </ContainerEmpty>
      </Container>
    );
  }

  // prime 과일 합
  const primeFruits = cart.filter((item) => item.isPrime);
  const primePay = primeFruits
    .map((item) => item.price * item.stock)
    .reduce((a, b) => a + b, 0);

  // 일반 과일 합
  const normalFruits = cart.filter((item) => !item.isPrime);
  const normalPay = normalFruits
    .map((item) => item.price * item.stock)
    .reduce((a, b) => a + b, 0);

  const handlePayment = async () => {
    const request = cart.map((item) => ({ id: item.id, quantity: item.stock }));
    // post API가 있다면 api call
    await onCreatePurchase(request);
    setActiveModal(true);
  };

  const onCloseModal = async () => {
    await onInitCart();
    linkTo("/");
  };

  return (
    <Container>
      <ContainerBox>
        <CardContainer>
          {primeFruits.concat(normalFruits).map((item) => {
            return (
              <FruitCardCart
                key={item.id}
                cartFruit={item}
                className="card-item"
              />
            );
          })}
        </CardContainer>
      </ContainerBox>

      <ContainerBox className="disabled-padding-top">
        <PaymentContainer>
          <TypoP>
            <span>
              <i>prime</i> 과일
            </span>
            {formatCurrency(primePay)}원
          </TypoP>
          <TypoP>
            <span>일반 과일</span>
            {formatCurrency(normalPay)}원
          </TypoP>
          <Divider />
          <TotalPrice>
            <span>총 상품금액</span>
            {formatCurrency(primePay + normalPay)}원
          </TotalPrice>
        </PaymentContainer>

        <ActionContainer>
          <Button theme="primary" onClick={handlePayment}>
            결제하기
          </Button>
        </ActionContainer>
      </ContainerBox>

      <Modal active={activeModal} onClose={onCloseModal}>
        <ModalTitle>결제가 완료되었습니다.</ModalTitle>
        <ModalContent>
          <b>request data</b>
          <br />
          {purchases && JSON.stringify(purchases)}
        </ModalContent>
        <ModalActionButton theme="primary" onClick={onCloseModal}>
          확인
        </ModalActionButton>
      </Modal>
    </Container>
  );
};

export default Cart;
