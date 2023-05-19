import {combineReducers} from 'redux';
import {appReducer} from './app.reducer';
import {playerReducer} from './player.reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
});
