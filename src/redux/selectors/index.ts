import {useSelector} from 'react-redux';
import {RootState} from '../storeOLD';

export const usePlayer = () => {
  return useSelector((state: RootState) => state.player);
};

export const usePlayerEquipments = () => {
  return usePlayer().equipments;
};

export const usePlayerLevel = () => {
  return usePlayer().level;
};

export const useApp = () => {
  return useSelector((state: RootState) => state.app);
};
