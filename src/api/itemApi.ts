import axios from "axios";

// [GET] 아이템 정보
export const getItems = (summonerName: string) =>
  axios.get(
    "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json"
  );
