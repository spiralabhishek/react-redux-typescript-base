import { hideLoader, showLoader, showMessage } from "@/reduxTool/lem/lemSlice";
import { defaultMessageObj } from "@/reduxTool/lem/types";

export function isCurrentDomainLocalhost() {
  return import.meta.env.MODE === "development";
}

export const handleApiRequest = async (
  apiFunc: () => Promise<any>,
  dispatch: any,
  successCallback?: (data: any) => void
) => {
  dispatch(showLoader({ loading: true, message: "Loading..." }));
  try {
    const response = await apiFunc();
    dispatch(hideLoader());
    if (successCallback) successCallback(response);
    return response;
  } catch (error) {
    dispatch(hideLoader());
    dispatch(
      showMessage({
        ...defaultMessageObj,
        type: "error",
        messageText:
          error?.response?.data?.message ||
          "An error occurred while processing the request.",
      })
    );
    throw error;
  }
};
