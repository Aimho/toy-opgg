import React from 'react';

import { TooltipProps } from './types';
import { Container, Message } from './style';

const Tooltip: React.FC<TooltipProps> = (props) => {
  return (
    <Container>
      {props.children}
      <Message className="tooltip-message">{props.message}</Message>
    </Container>
  );
};

export default Tooltip;
