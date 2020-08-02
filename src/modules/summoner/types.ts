export interface ISummonerState {
  summoner?: ISummoner;
}

export interface ISummoner {
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  leagues: {
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
  }[];
  level: number;
  name: string;
  previousTiers: {
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
  }[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}
