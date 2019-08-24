import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import posts from './posts'
import movies from './movies'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'movieData']
};

const rootReducer = combineReducers({
  posts,
  movies
});


export default persistReducer(persistConfig, rootReducer);