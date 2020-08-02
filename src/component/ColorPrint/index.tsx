import React from 'react';

const ColorPrint = () => {
  const KDA = (value: number, extra?: string) => {
    const color = () => {
      if (value >= 3) return '#2daf7f';
      if (value >= 4) return '#1f8ecd';
      if (value >= 5) return '#e19205';
      return 'inherit';
    };
    return (
      <span style={{ color: color() }}>
        {value}:1 {extra}
      </span>
    );
  };

  const WinRate = (value: number) => {
    const color = () => {
      if (value >= 60) return '#c6443e';
      return 'inherit';
    };
    return <span style={{ color: color() }}>{value}%</span>;
  };

  const Grade = (value: number) => {
    const color = () => {
      if (value >= 6) return '#e19205';
      return 'inherit';
    };
    return <span style={{ color: color() }}>{value}</span>;
  };
  return {
    KDA,
    WinRate,
    Grade
  };
};

export default ColorPrint();
