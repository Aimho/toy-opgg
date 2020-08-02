export interface SearchSummonerProps {
  width?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch: (name?: string) => void;
}

export interface ISearchItem {
  name: string;
  isRecent: boolean;
  isFavorites: boolean;
}

export interface SearchPopoverProps {
  active: boolean;
  onSearch: (name?: string) => void;
  recentSearches: ISearchItem[];
  setRecentSearch: (value: ISearchItem[]) => void;
}
