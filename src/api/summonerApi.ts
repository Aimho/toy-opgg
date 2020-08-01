import axios from "axios";
import AppConfig from "../config";

const summonerUrl = `${AppConfig.opggApi}/summoner`;

// [GET] 소환사 기본 정보
export const getSummoner = (summonerName: string) =>
  axios.get(`${summonerUrl}/${summonerName}`);

// [GET] 소환사 match 상세정보
export const getMatchDetail = (summonerName: string, gameId: string) =>
  axios.get(`${summonerUrl}/${summonerName}/matchDetail/${gameId}`);

// [GET] 소환사 match list
export const getMatches = (summonerName: string) =>
  axios.get(`${summonerUrl}/${summonerName}/matches`);

// [GET] 소환사 most info
export const getMostInfo = (summonerName: string) =>
  axios.get(`${summonerUrl}/${summonerName}/mostInfo`);
