import axios from 'axios';
import AppConfig from '../config';

const summonerApi = (summonerName: string) => {
  const summonerUrl = `${AppConfig.opggApi}/summoner/${summonerName}`;

  // [GET] 소환사 정보
  const getSummoner = () => axios.get(`${summonerUrl}`);

  // [GET] 소환사 match 상세정보
  const getMatchDetail = (gameId: string) =>
    axios.get(`${summonerUrl}/matchDetail/${gameId}`);

  // [GET] 소환사 match list
  const getMatches = () => axios.get(`${summonerUrl}/matches`);

  // [GET] 소환사 most info
  const getMostInfo = () => axios.get(`${summonerUrl}/mostInfo`);

  return {
    getSummoner,
    getMatchDetail,
    getMatches,
    getMostInfo
  };
};

export default summonerApi;
