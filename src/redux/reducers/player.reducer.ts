import {PLAYER_ACTIONS} from '../actions/player.actions';

const initialState = {
  level: 1,
  equipments: [],
};

export function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_ACTIONS.LEVEL_INCREMENT:
      return {
        ...state,
        level: state.level + action.payload,
      };
    case PLAYER_ACTIONS.SET_EQUIPMENTS:
      return {
        ...state,
        equipments: action.payload,
      };
    default:
      return state;
  }
}
