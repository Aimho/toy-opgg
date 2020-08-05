import { fill } from 'lodash';
import React from 'react';

import useItem from '../../modules/item/useItem';

import Tooltip from '../../component/Tooltip';
import { WardIcon, BuildIcon } from '../../component/SvgIcon';

import {
  MatchItemsContainer,
  MatchItemImg,
  MatchItemDescContainer
} from './style';

interface MatchDetailItemsProps {
  isWin: boolean;
  items: { imageUrl: string }[];
  visionWardsBought: number;
}
const MatchDetailItems = (props: MatchDetailItemsProps) => {
  const { items } = useItem();

  const EmptyItems = () => {
    if (props.items.length > 7) return null;
    const emptyItem = fill(Array(7 - props.items.length), '');
    return (
      <React.Fragment>
        {emptyItem.map((___, index) => (
          <MatchItemImg
            src="https://opgg-static.akamaized.net/images/pattern/opacity.1.png"
            alt={`no-item-${index}`}
            key={index}
          />
        ))}
      </React.Fragment>
    );
  };

  return (
    <MatchItemsContainer>
      {props.items.map((item, index) => {
        const url = item.imageUrl;
        const itemKey = url.substring(
          url.lastIndexOf('/') + 1,
          url.lastIndexOf('.')
        );
        const itemInfo = items[itemKey];
        if (!itemInfo) return null;

        const itemDesc = (
          <MatchItemDescContainer>
            <p className="item-name">{itemInfo.name}</p>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: itemInfo.description }}
            />
            <p className="item-gold">
              가격
              <b>
                {itemInfo.gold.total} ({itemInfo.gold.base})
              </b>
            </p>
          </MatchItemDescContainer>
        );

        return (
          <Tooltip key={index} message={itemDesc}>
            <MatchItemImg src={url} alt={itemInfo.name} />
          </Tooltip>
        );
      })}

      <EmptyItems />

      <Tooltip message="빌드">
        <BuildIcon
          width="22"
          height="22"
          className={`build-icon ${props.isWin ? 'win' : 'losses'}`}
        />
      </Tooltip>

      <span className="ward">
        <WardIcon
          width="16"
          height="16"
          className={`ward-icon ${props.isWin ? 'win' : 'losses'}`}
        />
        제어 와드 {props.visionWardsBought}
      </span>
    </MatchItemsContainer>
  );
};

export default MatchDetailItems;
