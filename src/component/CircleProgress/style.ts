import styled from 'styled-components';

export const Container = styled.span`
  position: relative;
  display: block;
  width: 90px;
  height: 90px;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #555;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
