import {APP_ACTIONS} from '../actions/app.actions';
import { PLAYER_ACTIONS } from '../actions/player.actions';

const initialState = {
  loading: false,
  error: '',
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case APP_ACTIONS.REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case APP_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PLAYER_ACTIONS.SET_EQUIPMENTS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
