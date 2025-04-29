
import { createSlice } from "@reduxjs/toolkit";
import {
  getPriceListsAction,
  createPriceListAction,
  getYardNamesAction,
  getPriceListByIdAction,
  updatePriceListAction,
} from "./middleware";
import { RootState } from "../store";
import { PriceList } from "@/types/PriceList";

interface PriceListState {
  priceLists: PriceList[];
  currentPriceList: PriceList | null;
  yardNames: string[];
}

const INITIAL_STATE: PriceListState = {
  priceLists: [],
  currentPriceList: null,
  yardNames: [],
};

const priceListSlice = createSlice({
  name: "priceList",
  initialState: INITIAL_STATE,
  reducers: {
    clearCurrentPriceList: (state) => {
      state.currentPriceList = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPriceListsAction.fulfilled, (state, { payload }) => ({
      ...state,
      priceLists: payload,
    }));
    
    builder.addCase(getPriceListByIdAction.fulfilled, (state, { payload }) => ({
      ...state,
      currentPriceList: payload,
    }));
    
    builder.addCase(createPriceListAction.fulfilled, (state) => ({
      ...state,
    }));
    
    builder.addCase(updatePriceListAction.fulfilled, (state) => ({
      ...state,
    }));
    
    builder.addCase(getYardNamesAction.fulfilled, (state, { payload }) => ({
      ...state,
      yardNames: payload,
    }));
  },
});

export const { clearCurrentPriceList } = priceListSlice.actions;
export const priceListSelector = (state: RootState) => state.PriceList;

export default priceListSlice.reducer;
