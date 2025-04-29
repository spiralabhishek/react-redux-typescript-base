import { createSlice } from "@reduxjs/toolkit";
import {
  addPostAction,
  deletePostAction,
  getPostListAction,
  updatePostAction,
  getNewsListAction,
  addNewsAction,
  updateNewsAction,
  deleteNewsAction,
  getNotificationListAction,
  addNotificationAction,
  updateNotificationAction,
  deleteNotificationAction,
  sendNotificationAction,
} from "./middleware";
import { RootState } from "../store";

const INITIAL_STATE = {
  posts: [],
  news: [],
  notification: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostListAction.fulfilled, (state, { payload }) => ({
      ...state,
      posts: payload,
    }));
    builder.addCase(addPostAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updatePostAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(deletePostAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(getNewsListAction.fulfilled, (state, { payload }) => ({
      ...state,
      news: payload,
    }));
    builder.addCase(addNewsAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateNewsAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(deleteNewsAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(
      getNotificationListAction.fulfilled,
      (state, { payload }) => ({
        ...state,
        notification: payload,
      })
    );
    builder.addCase(addNotificationAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(
      updateNotificationAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      deleteNotificationAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(sendNotificationAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
  },
});

export const postSelector = (state: RootState) => state?.Post;

export default postSlice.reducer;
