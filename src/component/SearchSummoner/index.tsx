import { uniqBy, findIndex } from 'lodash';
import React, { useState, useLayoutEffect, useRef } from 'react';

import useOutsideRef from '../../hooks/useOutsideRef';
import { getItem, setItem } from '../../utils/localStorage';

import { Container, SearchInput, SearchImgBtn } from './style';
import { SearchSummonerProps, ISearchItem } from './types';
import SearchPopover from './SearchPopover';

const SearchSummoner = (props: SearchSummonerProps) => {
  // popover state
  const [popoverActive, setPopoverActive] = useState(false);
  const popoverRef = useRef(null);
  useOutsideRef(popoverRef, () => setPopoverActive(false));

  // localStorage 검색 state
  const [recentSearches, setRecentSearch] = useState([] as ISearchItem[]);

  // load localStorage 검색 데이터
  useLayoutEffect(() => {
    const recentSummoners = getItem('recentSummoners') as ISearchItem[];
    setRecentSearch((value) => (recentSummoners ? recentSummoners : value));
  }, []);

  const onSearch = (name?: string) => {
    // 현재 검색 데이터
    const searchItem: ISearchItem = {
      name: name ? name : props.value,
      isRecent: true,
      isFavorites: false
    };

    const items = [...recentSearches];
    const targetIndex = findIndex(recentSearches, ['name', searchItem.name]);
    // 최근 검색 결과, 즐겨찾기 localStorage 등록
    if (targetIndex !== -1) {
      const result = { ...recentSearches[targetIndex], isRecent: true };
      items.splice(targetIndex, 1);
      items.push(result);
    } else {
      items.push(searchItem);
    }
    setItem('recentSummoners', uniqBy(items, 'name'));

    // summary search 시작
    props.onSearch(name);
  };

  return (
    <Container
      className="search-summoner"
      ref={popoverRef}
      style={{ width: props.width ? props.width : '260px' }}
    >
      <SearchInput
        type="search"
        placeholder="소환사 검색, 챔피언.."
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setPopoverActive(true)}
      />
      <SearchImgBtn
        onClick={() => onSearch()}
        src={require('../../assets/icons/search-icon.svg')}
        alt="검색"
      />

      <SearchPopover
        active={!props.value && popoverActive}
        onSearch={props.onSearch}
        recentSearches={recentSearches}
        setRecentSearch={(items: ISearchItem[]) => {
          setRecentSearch(items);
          setItem('recentSummoners', items);
        }}
      />
    </Container>
  );
};

export default SearchSummoner;
