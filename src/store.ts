import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './modules';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return { store };
}
