interface IKDA {
  assists: number;
  deaths: number;
  kills: number;
}

export interface ISummonerState {
  summoner?: ISummoner;
  mostInfo?: IMostInfo;
  matches?: IMatches;
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

export interface IChampions extends IRecentWinRate, IKDA {
  games: number;
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

export interface IMatches {
  champions: IMatchChampions[];
  games: any[];
  positions: IMatchPosition[];
  summary: IMatchSummary;
}

export interface IMatchChampions extends IMatchSummary {
  id: number;
  imageUrl: string;
  name: string;
}

export interface IMatchPosition {
  games: number;
  losses: number;
  wins: number;
  position: string;
  positionName: string;
}

export interface IMatchSummary extends IKDA {
  losses: number;
  wins: number;
}
