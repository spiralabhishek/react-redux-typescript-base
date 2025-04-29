import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice";
import { loginService, resendOtpService, verifyOtpService } from "./service";
import { defaultMessageObj } from "../lem/types";
import { LoginRequest } from "@/types/RequestType";

type verifyOtpRequest = {
  phone: string;
  otp: string;
};

export const loginAction = createAsyncThunk<any, LoginRequest>(
  "user/loginAction",
  async (data: LoginRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await loginService(data);
      if (response) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch product list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const resendOtpAction = createAsyncThunk<any, any>(
  "user/resendOtp",
  async (data: LoginRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await resendOtpService(data);
      if (response) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch product list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const verifyOtpAction = createAsyncThunk<any, any>(
  "user/verifyOtp",
  async (data: verifyOtpRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await verifyOtpService(data);
      if (response) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to verify otp",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
