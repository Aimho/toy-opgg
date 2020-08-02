import React from 'react';

import { IPreviousTier } from '../../modules/summoner/types';

import Tooltip from '../../component/Tooltip';

import { PreviousTierContainer, PreviousTier } from './style';

interface PreviousTiersProps {
  previousTiers: IPreviousTier[];
}

const PreviousTiers = ({ previousTiers }: PreviousTiersProps) => (
  <PreviousTierContainer>
    {previousTiers.map((item, index) => (
      <Tooltip message={item.string} key={index}>
        <PreviousTier>
          <b>S{item.season}</b> {item.tier}
        </PreviousTier>
      </Tooltip>
    ))}
  </PreviousTierContainer>
);

export default PreviousTiers;
