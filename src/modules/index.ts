import { combineReducers } from 'redux';
import item from './item';
import summoner from './summoner';

const rootReducer = combineReducers({
  item,
  summoner
});

export default rootReducer;
// RootState 타입을 꼭 만들어서 내보내야 함
// 추후 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해 필요함
export type RootState = ReturnType<typeof rootReducer>;
