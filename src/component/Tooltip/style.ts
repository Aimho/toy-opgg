import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  &:hover .tooltip-message {
    visibility: visible;
  }
`;

const tooltipPosition = css`
  position: absolute;
  top: -15px;
  left: 50%;
`;

export const Message = styled.span`
  ${tooltipPosition}
  visibility: hidden;
  max-width: 300px;
  width: max-content;
  transform: translate(-50%, -100%);
  padding: 10px;
  display: block;
  background-color: #222727;
  color: #fff;
  font-size: 11px;
  line-height: 15px;
  &:after {
    ${tooltipPosition}
    top: 100%;
    content: '';
    margin-left: -9px;
    border-width: 9px;
    border-style: solid;
    border-color: #222727 transparent transparent transparent;
  }
`;