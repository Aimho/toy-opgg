import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1ea1f7;
  @media only screen and (max-width: 960px) {
    padding-top: 24px;
  }
`;

export const Logo = styled.img`
  max-height: 200px;
  margin-bottom: 32px;
  @media only screen and (max-width: 960px) {
    max-height: 180px;
  }
`;
