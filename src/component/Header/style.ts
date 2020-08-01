import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  height: 64px;
  padding: 20px 0px;
  @media only screen and (max-width: 576px) {
    padding: 20px 12px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  @media only screen and (max-width: 576px) {
    text-align: left;
  }
`;

const Actions = styled.nav`
  position: absolute;
  right: 16px;
  top: calc(50% - 20px);
  button + button {
    margin-left: 12px;
    overflow: visible;
  }
`;

export { Container, Title, Actions };
