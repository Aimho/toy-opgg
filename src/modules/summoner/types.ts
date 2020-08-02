export interface ISummonerState {
  summoner?: ISummoner;
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
