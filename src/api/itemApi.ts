import axios from 'axios';

const itemApi = () => {
  // [GET] 아이템 정보
  const getItems = () =>
    axios.get(
      'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json'
    );

  return { getItems };
};

export default itemApi();
