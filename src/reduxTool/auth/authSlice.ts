import { createSlice } from '@reduxjs/toolkit';
import { loginAction, resendOtpAction, verifyOtpAction } from './middleware';
import { RootState } from '../store';

type initialData = {
  authData: any;
  userData: any;
};

const INITIAL_STATE: initialData = {
  authData: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, { payload }) => ({
      ...state,
      authData: payload,
    }));
    builder.addCase(resendOtpAction.fulfilled, (state, { payload }) => ({
      ...state,
      authData: payload,
    }));
    builder.addCase(verifyOtpAction.fulfilled, (state, { payload }) => ({
      ...state,
      userData: payload,
    }));
  },
});

export const authSelector = (state: RootState) => state?.Auth;

export default authSlice.reducer;
