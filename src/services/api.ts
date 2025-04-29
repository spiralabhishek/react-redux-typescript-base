import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ErrorResponse } from "./SuccessResponse";
import { isCurrentDomainLocalhost } from "@/utils/getItems";
import { getLocalAccessToken } from "./token";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = getLocalAccessToken();
  if (config.headers) {
    if (token) {
      config.headers.Authorization = token;
      config.headers.identity = 'admin';
    }
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = async (error: AxiosError) => {
  let retry = false;
  const originalConfig: AxiosRequestConfig | any = error?.config;
  if (originalConfig.url !== "/" && error?.response) {
    if (error?.response?.status === 401 && !retry) {
      retry = true;
      try {
        return axiosInstanceApi(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosObj: AxiosInstance): AxiosInstance => {
  axiosObj?.interceptors?.request?.use(onRequest, onRequestError);
  axiosObj?.interceptors?.response?.use(onResponse, onResponseError);
  return axiosObj;
};

const isDomainLocalhost = isCurrentDomainLocalhost();

const instance: AxiosInstance = axios.create({
  baseURL: "http://192.168.29.68:8080/api/v1",
  timeout: 1000 * 60 * 1,
  withCredentials: Boolean(!isDomainLocalhost),
});

export const isAxiosError = (err: any): ErrorResponse | any => {
  if (axios.isAxiosError(err)) {
    if (err?.response && err?.response?.data) {
      if (err?.response?.status === 404)
        return { code: 404, message: err?.message } as ErrorResponse;
      return err?.response?.data as ErrorResponse;
    }
    return { code: err?.code, message: err?.message } as ErrorResponse;
  }
  return { code: err?.code, message: err?.message } as ErrorResponse;
};

export const axiosInstanceApi: AxiosInstance = setupInterceptorsTo(instance);
