import {createSlice} from '@reduxjs/toolkit';
import {fetchEquipments} from './player.slice';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: false,
    error: '',
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    requestStart: state => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setEquipments: state => {
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEquipments.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchEquipments.fulfilled, state => {
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchEquipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {setLoading, requestStart, setError, setEquipments} = appSlice.actions;

export default appSlice.reducer;
