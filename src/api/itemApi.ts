import axios from 'axios';

const itemApi = () => {
  // [GET] 아이템 정보
  const getItems = () => axios.get(`/data/item.json`);

  return { getItems };
};

export default itemApi();
