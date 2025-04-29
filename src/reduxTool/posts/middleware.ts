import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice";
import {
  addNewsAsync,
  addNotificationAsync,
  addPostAsync,
  deleteNewsAsync,
  deleteNotificationAsync,
  deletePostAsync,
  getNewsList,
  getNotificationList,
  getPostList,
  sendNotificationAsync,
  updateNewsAsync,
  updateNotificationAsync,
  updatePostAsync,
} from "./service";
import { defaultMessageObj } from "../lem/types";

export const getPostListAction = createAsyncThunk(
  "post/postlist",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getPostList();
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const addPostAction = createAsyncThunk<any, any>(
  "post/addPostAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await addPostAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const updatePostAction = createAsyncThunk<any, any>(
  "post/updatePostAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updatePostAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const deletePostAction = createAsyncThunk<any, any>(
  "post/deletePostAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deletePostAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const getNewsListAction = createAsyncThunk(
  "post/getNewsList",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getNewsList();
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const addNewsAction = createAsyncThunk<any, any>(
  "post/addNewsAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await addNewsAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const updateNewsAction = createAsyncThunk<any, any>(
  "post/updateNewsAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updateNewsAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const deleteNewsAction = createAsyncThunk<any, any>(
  "post/deleteNewsAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deleteNewsAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || "Failed to fetch post list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const getNotificationListAction = createAsyncThunk(
  "Notification/getNotificationList",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getNotificationList();
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch Notification list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const addNotificationAction = createAsyncThunk<any, any>(
  "Notification/addNotificationAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await addNotificationAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch Notification list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const updateNotificationAction = createAsyncThunk<any, any>(
  "Notification/updateNotificationAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await updateNotificationAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch Notification list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const deleteNotificationAction = createAsyncThunk<any, any>(
  "Notification/deleteNotificationAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await deleteNotificationAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch Notification list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const sendNotificationAction = createAsyncThunk<any, any>(
  "Notification/sendNotificationAsync",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await sendNotificationAsync(data);
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText:
            response?.data?.message || "Failed to fetch Notification list",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
