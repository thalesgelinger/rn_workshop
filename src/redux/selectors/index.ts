import {storeOLD} from '../storeOLD';

export const getPlayer = () => {
  return storeOLD.getState().player;
};

export const getPlayerEquipments = () => {
  return getPlayer().equipments;
};

export const getPlayerLevel = () => {
  return getPlayer().level;
};
