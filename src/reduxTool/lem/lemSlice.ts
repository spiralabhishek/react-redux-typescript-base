import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { LemState, MessageState } from './types';

const INITIAL_STATE: LemState = {
  loading: false,
  message: undefined,
};

const lemSlice = createSlice({
  name: 'Lem',
  initialState: INITIAL_STATE,
  reducers: {
    showLoader: (state, { payload }: PayloadAction<LemState>) => {
      state.loading = payload.loading;
      state.message = payload.message;
    },
    hideLoader: (state) => {
      state.loading = false;
      state.message = undefined;
    },
    showMessage: (state, { payload }: PayloadAction<MessageState>) => {
      state.loading = false;
      state.message = payload;
    },
    hideMessage: (state) => {
      state.loading = false;
      state.message = undefined;
    },
  },
});

export const { showLoader, hideLoader, showMessage, hideMessage } =
  lemSlice.actions;

export const lemSelector = (state: RootState) => state.Lem;

export default lemSlice.reducer;
