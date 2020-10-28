import axios from 'axios';

const summonerApi = () => {
  // [GET] 소환사 정보
  const getSummoner = () => axios.get(`/data/summoner.json`);

  // [GET] 소환사 match 상세정보
  const getMatchDetail = () => axios.get(`/data/matchDetail.json`);

  // [GET] 소환사 match list
  const getMatches = () => axios.get(`/data/matches.json`);

  // [GET] 소환사 most info
  const getMostInfo = () => axios.get(`/data/mostInfo.json`);

  return {
    getSummoner,
    getMatchDetail,
    getMatches,
    getMostInfo
  };
};

export default summonerApi;
