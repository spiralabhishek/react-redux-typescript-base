import { axiosInstanceApi, isAxiosError } from "@/services/api";

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstanceApi.post("/admin/login", {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const resendOtpService = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstanceApi.post("/user/resend-otp", {
      email: data.email,
    });
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const verifyOtpService = async (data: {
  phone: string;
  otp: string;
}) => {
  try {
    const response = await axiosInstanceApi.post("/user/verify-otp", {
      phone: data.phone,
      otp: data.otp,
    });
    return response.data;
  } catch (err) {
    return isAxiosError(err);
  }
};
