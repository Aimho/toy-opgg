import styled from "styled-components";

const ModalBackdrop = styled.aside`
  z-index: 1300;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(118, 118, 118, 0.8);
`;

const ModalContainer = styled.section`
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 3px 5px 0 rgba(47, 46, 46, 0.5);
  border: solid 1px #979797;
`;

export { ModalBackdrop, ModalContainer };
