import styled from "styled-components";
import { Button } from "../../component/elements";

const Container = styled.main`
  min-height: 100vh;
  padding-bottom: 48px;
  background-color: #f2f3f7;
`;

const ContainerEmpty = styled.div`
  margin: auto;
  max-width: 960px;
  padding: 96px 40px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 48px;
  }
  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #727585;
  }
`;

const ContainerBox = styled.div`
  margin: auto;
  max-width: 960px;
  padding: 48px 40px;
  @media only screen and (max-width: 960px) {
    padding: 20px 12px;
  }
  &.disabled-padding-top {
    padding-top: 0px;
  }
`;

const CardContainer = styled.section`
  margin: -24px;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 960px) {
    justify-content: center;
    margin: -12px;
  }
  .card-item {
    margin: 24px;
    @media only screen and (max-width: 960px) {
      margin: 12px 24px;
    }
  }
`;

const PaymentContainer = styled.div`
  max-width: 250px;
  margin-left: auto;
  @media only screen and (max-width: 960px) {
    margin-right: auto;
  }
`;

const TypoP = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  span {
    font-size: 16px;
    line-height: 19px;
    i {
      color: #fb842d;
    }
  }
  & + p {
    margin-top: 12px;
  }
`;

const Divider = styled.hr`
  background-color: #c8cad2;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const TotalPrice = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #116ad4;
  span {
    font-size: 20px;
    line-height: 23px;
    color: #333333;
  }
`;

const ActionContainer = styled(PaymentContainer)`
  margin-top: 32px;
  text-align: right;
`;

const ModalTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #116ad4;
  text-align: center;
  margin-bottom: 24px;
`;

const ModalContent = styled.p`
  font-size: 14px;
  line-height: 20px;
  max-width: 576px;
  text-align: center;
`;

const ModalActionButton = styled(Button)`
  padding: 8px;
  width: 100%;
  margin-top: 32px;
  text-align: center;
`;

export {
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
};
