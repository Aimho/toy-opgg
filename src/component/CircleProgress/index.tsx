import React from 'react';

import { Container, Label } from './style';

interface CircleProgressProps {
  percentage: number;
}

const CircleProgress = ({ percentage }: CircleProgressProps) => {
  return (
    <Container>
      <svg viewBox="0 0 36 36" width="90px" height="90px">
        <path
          fill="none"
          stroke="#1f8ecd"
          strokeWidth="5px"
          d="M18 3
          a 15 15 0 0 1 0 30
          a 15 15 0 0 1 0 -30"
        />
        <path
          fill="none"
          stroke="#ee5a52"
          strokeWidth="5px"
          strokeDasharray={`${percentage}, 100`}
          d="M18 3
          a 15 15 0 0 1 0 30
          a 15 15 0 0 1 0 -30"
        />
      </svg>
      <Label>{percentage}%</Label>
    </Container>
  );
};

export default CircleProgress;
