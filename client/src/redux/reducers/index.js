import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import posts from './posts'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data']
};

const rootReducer = combineReducers({
  posts
});


export default persistReducer(persistConfig, rootReducer);