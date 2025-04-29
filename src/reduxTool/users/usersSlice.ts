import { createSlice } from "@reduxjs/toolkit";
import {
  addDistrictListAction,
  changeUserStatusAction,
  createCategoryAction,
  createTalukaAction,
  createUserAction,
  deleteCategoryAction,
  deleteDistrictAction,
  deleteTalukaAction,
  deleteUserAction,
  getCategoryListAction,
  getDashboardAction,
  getDistrictListAction,
  getTalukaListAction,
  getUserListAction,
  toggleDistrictStatusAction,
  updateCategoryAction,
  updateDistrictAction,
  updateTalukaAction,
  updateUserAction,
} from "./middleware";
import { RootState } from "../store";

const INITIAL_STATE = {
  users: [],
  district: [],
  taluka: [],
  category: [],
  dashboard: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardAction.fulfilled, (state, { payload }) => ({
      ...state,
      dashboard: payload,
    }));
    builder.addCase(getUserListAction.fulfilled, (state, { payload }) => ({
      ...state,
      users: payload,
    }));
    builder.addCase(createUserAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateUserAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(deleteUserAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(changeUserStatusAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(getDistrictListAction.fulfilled, (state, { payload }) => ({
      ...state,
      district: payload,
    }));
    builder.addCase(addDistrictListAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateDistrictAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(deleteDistrictAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(
      toggleDistrictStatusAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(getTalukaListAction.fulfilled, (state, { payload }) => ({
      ...state,
      taluka: payload,
    }));
    builder.addCase(createTalukaAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateTalukaAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(deleteTalukaAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(getCategoryListAction.fulfilled, (state, { payload }) => ({
      ...state,
      category: payload,
    }));
    builder.addCase(createCategoryAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateCategoryAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(deleteCategoryAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
  },
});

export const userSelector = (state: RootState) => state?.User;

export default userSlice.reducer;
