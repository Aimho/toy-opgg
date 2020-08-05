import axios from 'axios';
import AppConfig from '../config';

const itemApi = () => {
  // [GET] 아이템 정보
  const getItems = () => axios.get(`${AppConfig.itemApi}`);

  return { getItems };
};

export default itemApi();
