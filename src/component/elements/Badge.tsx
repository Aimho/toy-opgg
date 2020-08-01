import React from 'react';
import styled from 'styled-components';

const BadgeStyle = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;

  background: #ffd400;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: #000;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
`;

interface BadgeProps {
  label: string | number;
}
const Badge = ({ label }: BadgeProps) => <BadgeStyle>{label}</BadgeStyle>;

export default Badge;
