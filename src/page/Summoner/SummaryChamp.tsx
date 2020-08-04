import { fill } from 'lodash';
import React from 'react';

import { IMatchChampions } from '../../modules/summoner/types';
import ColorPrint from '../../component/ColorPrint';
import { getWinRate, getKDA } from '../../utils/calculate';

import {
  SummaryChampContainer,
  SummaryChampCardContainer,
  SummaryChampImg,
  SummaryChampInfo,
  SummaryEmptyChampImg
} from './style';

interface SummaryChampProps {
  champions: IMatchChampions[];
}
const SummaryChamp = ({ champions }: SummaryChampProps) => {
  const EmptyChamps = () => {
    if (champions.length > 3) return null;
    const emptyItem = fill(Array(3 - champions.length), '');
    return (
      <React.Fragment>
        {emptyItem.map((___, index) => (
          <SummaryChampCardContainer key={index}>
            <SummaryEmptyChampImg />
            <SummaryChampInfo>
              <span className="champ-none">챔피언 정보가 없습니다.</span>
            </SummaryChampInfo>
          </SummaryChampCardContainer>
        ))}
      </React.Fragment>
    );
  };

  return (
    <SummaryChampContainer>
      {champions.map((item, index) => {
        return (
          <SummaryChampCardContainer key={index}>
            <SummaryChampImg src={item.imageUrl} alt={item.name} />
            <SummaryChampInfo>
              {item.name} <br />
              <span className="champ-win-rate">
                {ColorPrint.WinRate(
                  getWinRate({
                    wins: item.wins,
                    totalPlay: item.wins + item.losses
                  })
                )}
              </span>
              <span className="champ-record">
                ({item.wins}승 {item.losses}패)
              </span>
              <span className="champ-kda">
                {ColorPrint.KDA(getKDA({ ...item }), '평점')}
              </span>
            </SummaryChampInfo>
          </SummaryChampCardContainer>
        );
      })}
      <EmptyChamps />
    </SummaryChampContainer>
  );
};

export default SummaryChamp;
