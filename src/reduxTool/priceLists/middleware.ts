
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPriceListsAsync,
  createPriceListAsync,
  getYardNamesAsync,
  getPriceListByIdAsync,
  updatePriceListAsync,
} from "./service";
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice";
import { defaultMessageObj } from "../lem/types";

export const getPriceListsAction = createAsyncThunk(
  "priceLists/getAll",
  async (date: string | undefined, { rejectWithValue, dispatch }) => {
    try {
      const response = await getPriceListsAsync(date);
      return response.data || [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPriceListByIdAction = createAsyncThunk(
  "priceLists/getById",
  async (id: string, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Loading price list..." }));
    try {
      const response = await getPriceListByIdAsync(id);
      if (response?.data) {
        dispatch(hideLoader());
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.message || "Failed to fetch price list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const createPriceListAction = createAsyncThunk(
  "priceLists/create",
  async (data: any, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Creating price list..." }));
    try {
      const response = await createPriceListAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to create price list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const updatePriceListAction = createAsyncThunk(
  "priceLists/update",
  async ({ id, data }: { id: string; data: any }, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating price list..." }));
    try {
      const response = await updatePriceListAsync(id, data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to update price list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const getYardNamesAction = createAsyncThunk(
  "priceLists/getYardNames",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getYardNamesAsync();
      return response.data || [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
