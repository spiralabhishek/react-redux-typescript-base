import { axiosInstanceApi, isAxiosError } from "@/services/api";

export const getPostList = async () => {
  try {
    const response = await axiosInstanceApi.get("/post/listAllPosts");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const addPostAsync = async (data: any) => {
  try {
    const response = await axiosInstanceApi.post("/post/addPost", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getPostsByUserId = async (userId: string) => {
  try {
    const response = await axiosInstanceApi.get(`/post/user/${userId}`);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updatePostAsync = async (data: { _id: string; data: any }) => {
  try {
    const response = await axiosInstanceApi.put(`/post/${data._id}`, data.data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deletePostAsync = async (postId: string) => {
  try {
    const response = await axiosInstanceApi.delete(`/post/${postId}`);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getNewsList = async () => {
  try {
    const response = await axiosInstanceApi.get("/news/listAllNews");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const addNewsAsync = async (data: any) => {
  try {
    const response = await axiosInstanceApi.post("/news/addNews", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updateNewsAsync = async (data: { _id: string; data: any }) => {
  try {
    const response = await axiosInstanceApi.put(`/news/${data._id}`, data.data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deleteNewsAsync = async (newsId: string) => {
  try {
    const response = await axiosInstanceApi.delete(`/notification/${newsId}`);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getNotificationList = async () => {
  try {
    const response = await axiosInstanceApi.get(
      "/notification/listNotifications"
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const addNotificationAsync = async (data: any) => {
  try {
    const response = await axiosInstanceApi.post(
      "/notification/addNotification",
      data
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updateNotificationAsync = async (data: {
  _id: string;
  data: any;
}) => {
  try {
    const response = await axiosInstanceApi.put(
      `/notification/${data._id}`,
      data.data
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deleteNotificationAsync = async (notificationId: string) => {
  try {
    const response = await axiosInstanceApi.delete(
      `/notification/${notificationId}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const sendNotificationAsync = async (notificationId: string) => {
  try {
    const response = await axiosInstanceApi.patch(
      `/notification/${notificationId}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};
