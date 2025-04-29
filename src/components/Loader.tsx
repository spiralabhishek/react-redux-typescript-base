import React, { useEffect } from "react";
import { toast, ToastOptions } from "react-toastify";
import { useSelector } from "react-redux";

import { hideMessage, lemSelector } from "@/reduxTool/lem/lemSlice";
import { LemState, MessageState } from "@/reduxTool/lem/types";
import { useAppDispatch } from "@/reduxTool/store";

const Loader: React.FC = () => {
  const dispatch = useAppDispatch();
  const state: LemState = useSelector(lemSelector);
  const { message, loading } = state;

  useEffect(() => {
    if (message && message !== null && !loading) {
      const { type, messageText, duration, position, onCloseAction } =
        message as MessageState;
      const toastConfig: ToastOptions = {
        position,
        autoClose: duration || false,
        onClose: () => {
          dispatch(hideMessage());
          if (onCloseAction) {
            onCloseAction();
          }
        },
      };
      switch (type) {
        case "error":
          toast.error(messageText, toastConfig);
          break;

        case "success":
          toast.success(messageText, toastConfig);
          break;

        default:
          toast.info(messageText, toastConfig);
          break;
      }
    }
    const handleBeforeUnload = () => {
      dispatch(hideMessage());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, message]);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50 pointer-events-none">
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }
  return null;
};

export default Loader;
