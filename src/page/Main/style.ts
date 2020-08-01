import styled from "styled-components";
import Button from "../../component/elements/Button";

const Container = styled.main`
  min-height: 100vh;
  padding-bottom: 48px;
  background-color: #f2f3f7;
`;

const ContainerBox = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 24px 48px;
  @media only screen and (max-width: 576px) {
    padding: 12px 24px;
    max-width: none;
  }
`;

const FilterContainer = styled.section`
  margin-top: 8px;
  button + button {
    margin-left: 16px;
  }
`;

const FilterButton = styled(Button)`
  i {
    color: #fb842d;
  }
`;

const CardContainer = styled.section`
  margin: -12px;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 960px) {
    justify-content: center;
  }
  .card-item {
    margin: 12px;
  }
`;

export {
  Container,
  ContainerBox,
  FilterContainer,
  FilterButton,
  CardContainer,
};
