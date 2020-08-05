import React, { useState } from 'react';

import { PopoverContainer, TabContainer, TabListContainer } from './style';
import { SearchPopoverProps, ISearchItem } from './types';
import { StarIcon, CloseIcon } from '../SvgIcon';

const SearchPopover = (props: SearchPopoverProps) => {
  const [tabKey, setTabKey] = useState('recent');

  const TabButton: React.FC<{ tabKey: string }> = (props) => (
    <button
      className={tabKey === props.tabKey ? 'active' : ''}
      onClick={() => setTabKey(props.tabKey)}
    >
      {props.children}
    </button>
  );

  const TabListItem = () => {
    const viewItems =
      tabKey === 'favorites'
        ? [...props.recentSearches.filter((item) => item.isFavorites)]
        : [...props.recentSearches].filter((item) => item.isRecent);

    if (viewItems.length === 0) {
      const label =
        tabKey === 'favorites'
          ? '관심있는 소환사를 즐겨찾기에 등록해보세요!'
          : '최근에 본 소환사가 없습니다.';

      return <li className="empty">{label}</li>;
    }

    const onFavoriteItem = (item: ISearchItem) => {
      const items = [...props.recentSearches];
      const targetIndex = items.map((value) => value.name).indexOf(item.name);
      items.splice(targetIndex, 1, {
        ...item,
        isRecent: true,
        isFavorites: !item.isFavorites
      });
      props.setRecentSearch(items);
    };

    const onDeleteItem = (item: ISearchItem) => {
      const items = [...props.recentSearches];
      const targetIndex = items.map((value) => value.name).indexOf(item.name);
      if (items[targetIndex].isFavorites) {
        items.splice(targetIndex, 1, {
          ...item,
          isRecent: !item.isRecent
        });
      } else {
        items.splice(targetIndex, 1);
      }
      props.setRecentSearch(items);
    };

    return (
      <React.Fragment>
        {viewItems.map((item, index) => (
          <li key={item.name}>
            <p onClick={() => props.onSearch(item.name)}>{item.name}</p>
            <button
              className={item.isFavorites ? 'active' : ''}
              onClick={() => onFavoriteItem(item)}
            >
              <StarIcon width="16" height="16" />
            </button>
            <button onClick={() => onDeleteItem(item)}>
              <CloseIcon width="16" height="16" />
            </button>
          </li>
        ))}
      </React.Fragment>
    );
  };

  return (
    <PopoverContainer active={props.active}>
      <TabContainer>
        <TabButton tabKey={'recent'}>최근검색</TabButton>
        <TabButton tabKey={'favorites'}>즐겨찾기</TabButton>
      </TabContainer>
      <TabListContainer>
        <TabListItem />
      </TabListContainer>
    </PopoverContainer>
  );
};

export default SearchPopover;
