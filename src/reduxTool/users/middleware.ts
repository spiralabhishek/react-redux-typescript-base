import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice";
import {
  addDistrictListAsync,
  changeUserStatusAsync,
  createCategoryAsync,
  createTalukaAsync,
  createUserAsync,
  deleteCategoryAsync,
  deleteDistrictAsync,
  deleteTalukaAsync,
  deleteUserAsync,
  getCategoryList,
  getDashboardAsync,
  getDistrictList,
  getTalukaList,
  getUserList,
  toggleDistrictStatusAsync,
  updateCategoryAsync,
  updateDistrictAsync,
  updateTalukaAsync,
  updateUserAsync,
} from "./service";
import { defaultMessageObj } from "../lem/types";

export const getDashboardAction = createAsyncThunk(
  "user/getDashboard",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getDashboardAsync();
      if (response?.data) {
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

export const getUserListAction = createAsyncThunk(
  "user/list",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getUserList();
      if (response?.data) {
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

export const createUserAction = createAsyncThunk<any, any>(
  "user/createUser",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await createUserAsync(data);
      if (response?.statusCode === 200) {
        dispatch(hideLoader());
        dispatch(getUserListAction());
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

export const updateUserAction = createAsyncThunk<any, any>(
  "user/updateUser",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updateUserAsync(data);
      if (response?.statusCode === 200) {
        dispatch(hideLoader());
        dispatch(getUserListAction());
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

export const deleteUserAction = createAsyncThunk<any, any>(
  "user/deleteUser",
  async (userId, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deleteUserAsync(userId);
      if (response?.statusCode === 200) {
        dispatch(hideLoader());
        dispatch(getUserListAction());
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

export const changeUserStatusAction = createAsyncThunk<any, any>(
  "user/changeUserStatus",
  async (userId, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await changeUserStatusAsync(userId);
      if (response?.statusCode === 200) {
        dispatch(hideLoader());
        dispatch(getUserListAction());
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

export const getDistrictListAction = createAsyncThunk(
  "user/getDistrictList",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getDistrictList();
      if (response?.data) {
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

export const addDistrictListAction = createAsyncThunk<any, any>(
  "user/addDistrictList",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await addDistrictListAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(getDistrictListAction());
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

export const updateDistrictAction = createAsyncThunk<any, any>(
  "user/updateDistrict",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updateDistrictAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(getDistrictListAction());
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

export const deleteDistrictAction = createAsyncThunk<any, any>(
  "user/deleteDistrict",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deleteDistrictAsync(data);
      if (response?.data) {
        dispatch(getTalukaListAction());
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

export const toggleDistrictStatusAction = createAsyncThunk<any, any>(
  "user/toggleDistrictStatus",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await toggleDistrictStatusAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(getDistrictListAction());
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

export const getTalukaListAction = createAsyncThunk(
  "user/getTalukaList",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getTalukaList();
      if (response?.data) {
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

export const createTalukaAction = createAsyncThunk<any, any>(
  "user/createTaluka",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await createTalukaAsync(data);
      if (response?.data) {
        dispatch(getTalukaListAction());
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

export const updateTalukaAction = createAsyncThunk<any, any>(
  "user/updateTaluka",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updateTalukaAsync(data);
      if (response?.data) {
        dispatch(getTalukaListAction());
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

export const deleteTalukaAction = createAsyncThunk<any, any>(
  "user/deleteTaluka",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deleteTalukaAsync(data);
      if (response?.data) {
        dispatch(getTalukaListAction());
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

export const getCategoryListAction = createAsyncThunk(
  "user/getCategoryList",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getCategoryList();
      if (response?.data) {
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

export const createCategoryAction = createAsyncThunk<any, any>(
  "user/createCategory",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await createCategoryAsync(data);
      if (response?.data) {
        dispatch(getCategoryListAction());
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

export const updateCategoryAction = createAsyncThunk<any, any>(
  "user/updateCategory",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updateCategoryAsync(data);
      if (response?.data) {
        dispatch(getCategoryListAction());
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

export const deleteCategoryAction = createAsyncThunk<any, any>(
  "user/deleteCategory",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deleteCategoryAsync(data);
      if (response?.data) {
        dispatch(getCategoryListAction());
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
