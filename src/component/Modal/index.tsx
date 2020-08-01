import React, { useRef } from "react";

import useOutsideRef from "../../hooks/useOutsideRef";
import { ModalBackdrop, ModalContainer } from "./style";

interface ModalProps {
  active: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const modalRef = useRef(null);
  useOutsideRef(modalRef, props.onClose);

  if (!props.active) return null;

  return (
    <ModalBackdrop>
      <ModalContainer ref={modalRef}>{props.children}</ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
