export interface ISummonerState {
  summoner?: ISummoner;
  mostInfo?: IMostInfo;
}

export interface ISummoner {
  ladderRank: ILadderRank;
  leagues: ILeague[];
  level: number;
  name: string;
  previousTiers: IPreviousTier[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export interface IPreviousTier {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface ILadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface ILeague {
  hasResults: boolean;
  losses: number;
  tierRank: {
    division: string;
    imageUrl: string;
    lp: number;
    name: string;
    season: number;
    shortString: string;
    string: string;
    tier: string;
    tierDivision: string;
    tierRankPoint: number;
  };
  wins: number;
}

export interface IChampions extends IRecentWinRate {
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
  rank: number;
}

export interface IRecentWinRate {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  wins: number;
  losses: number;
}

export interface IMostInfo {
  champions: IChampions[];
  recentWinRate: IRecentWinRate[];
}
