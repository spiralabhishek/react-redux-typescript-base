import { axiosInstanceApi, isAxiosError } from "@/services/api";

export const getDashboardAsync = async () => {
  try {
    const response = await axiosInstanceApi.get("/dashboard/stats");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getUserList = async () => {
  try {
    const response = await axiosInstanceApi.get("/user/listAllUsers");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const createUserAsync = async (data) => {
  try {
    const response = await axiosInstanceApi.post("/user/addUser", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updateUserAsync = async (data: { _id: string; data: any }) => {
  try {
    const response = await axiosInstanceApi.put(
      `/user/updateUser/${data._id}`,
      data?.data
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deleteUserAsync = async (userId) => {
  try {
    const response = await axiosInstanceApi.delete(
      `/user/deleteUser/${userId}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const changeUserStatusAsync = async (userId) => {
  try {
    const response = await axiosInstanceApi.patch(
      `/user/toggleUserStatus/${userId}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getDistrictList = async () => {
  try {
    const response = await axiosInstanceApi.get("/district/listAllDistrict");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updateDistrictAsync = async (data: { _id: string; data: any }) => {
  try {
    const response = await axiosInstanceApi.put(
      `/district/updateDistrict/${data._id}`,
      data?.data
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const addDistrictListAsync = async (data) => {
  try {
    const response = await axiosInstanceApi.post("/district/addDistrict", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deleteDistrictAsync = async (id) => {
  try {
    const response = await axiosInstanceApi.delete(
      `/district/deleteDistrict/${id}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const toggleDistrictStatusAsync = async (id) => {
  try {
    const response = await axiosInstanceApi.patch(
      `/district/toggleDistrictStatus/${id}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getTalukaList = async () => {
  try {
    const response = await axiosInstanceApi.get("/taluka/listTaluka");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const createTalukaAsync = async (data) => {
  try {
    const response = await axiosInstanceApi.post("/taluka/addTaluka", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updateTalukaAsync = async (data: { _id: string; data: any }) => {
  try {
    const response = await axiosInstanceApi.put(
      `/taluka/updateTaluka/${data._id}`,
      data?.data
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deleteTalukaAsync = async (id) => {
  try {
    const response = await axiosInstanceApi.delete(
      `/taluka/deleteTaluka/${id}`
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getCategoryList = async () => {
  try {
    const response = await axiosInstanceApi.get("/category/listAllCategories");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const createCategoryAsync = async (data) => {
  try {
    const response = await axiosInstanceApi.post("/category/addCategory", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updateCategoryAsync = async (data: { _id: string; data: any }) => {
  try {
    const response = await axiosInstanceApi.put(
      `/category/${data._id}`,
      data?.data
    );
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const deleteCategoryAsync = async (id) => {
  try {
    const response = await axiosInstanceApi.delete(`/category/${id}`);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};
