
import { axiosInstanceApi, isAxiosError } from "@/services/api";

export const getPriceListsAsync = async (date?: string) => {
  try {
    const url = date ? `/price-list/list?date=${date}` : "/price-list";
    const response = await axiosInstanceApi.get(url);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getPriceListByIdAsync = async (id: string) => {
  try {
    const response = await axiosInstanceApi.get(`/price-list/${id}`);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const createPriceListAsync = async (data: any) => {
  try {
    const response = await axiosInstanceApi.post("/price-list", data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const updatePriceListAsync = async (id: string, data: any) => {
  try {
    const response = await axiosInstanceApi.put(`/price-list/${id}`, data);
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getYardNamesAsync = async () => {
  try {
    const response = await axiosInstanceApi.get("/price-list/yard-names");
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};
