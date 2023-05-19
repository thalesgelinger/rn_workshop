import axios from 'axios';
import {requestStart, setError} from './app.actions';

export const PLAYER_ACTIONS = {
  LEVEL_INCREMENT: 'LEVEL_INCREMENT',
  SET_EQUIPMENTS: 'SET_EQUIPMENTS',
};

export const incrementLevel = (value: number) => ({
  type: PLAYER_ACTIONS.LEVEL_INCREMENT,
  payload: value,
});

export const setEquipments = (equipments: []) => ({
  type: PLAYER_ACTIONS.SET_EQUIPMENTS,
  payload: equipments,
});

export const getEquipments = () => {
  return async dispatch => {
    const URL =
      'https://dws-bug-hunters-k58ck9b2z-thalesgelinger.vercel.app/api/equipment';
    try {
      dispatch(requestStart());
      const response = await axios.get(URL);
      dispatch(setEquipments(response.data));
      dispatch(setError(''));
    } catch (error) {
      dispatch(setError(JSON.stringify(error)));
    }
  };
};
