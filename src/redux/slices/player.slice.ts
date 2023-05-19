import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    level: 1,
    equipments: [],
  },
  reducers: {
    levelIncrement: (state, action) => {
      state.level = state.level + action.payload;
    },
    setEquipments: (state, action) => {
      state.equipments = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchEquipments.fulfilled, (state, action) => {
      state.equipments = action.payload;
    });
  },
});

export const fetchEquipments = createAsyncThunk('fetchEquipments', async () => {
  const URL =
    'https://dws-bug-hunters-k58ck9b2z-thalesgelinger.vercel.app/api/equipment';
  try {
    const {data} = await axios.get(URL);
    return data;
  } catch (error) {
    return JSON.stringify(error);
  }
});

export const {levelIncrement, setEquipments} = playerSlice.actions;

export default playerSlice.reducer;
