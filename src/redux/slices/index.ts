import appReducer from './app.slice';
import playerReducer from './player.slice';

export const rootReducer = {
  app: appReducer,
  player: playerReducer,
};
