import React from 'react';

import { MatchChampContainer, MatchChampImgContainer } from './style';

interface MatchDetailChampProps {
  champion: { imageUrl: string };
  spells: { imageUrl: string }[];
  peak: string[];
}
const MatchDetailChamp = (props: MatchDetailChampProps) => {
  return (
    <MatchChampContainer>
      <MatchChampImgContainer>
        <img
          src={props.champion.imageUrl}
          alt="레오나"
          width="46"
          height="46"
        />
        <span className="spells">
          {props.spells.map((spell, index) => (
            <img
              src={spell.imageUrl}
              alt={`spell${index}`}
              width="22"
              height="22"
              key={index}
            />
          ))}
        </span>
        <span className="peak">
          {props.peak.map((item, index) => (
            <img
              src={item}
              alt={`spell${index}`}
              width="22"
              height="22"
              key={index}
            />
          ))}
        </span>
      </MatchChampImgContainer>
      <p>레오나</p>
    </MatchChampContainer>
  );
};

export default MatchDetailChamp;
