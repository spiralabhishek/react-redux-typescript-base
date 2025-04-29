import { ToastPosition, ToastType } from "react-native-toast-message";

export interface LemState {
  loading: boolean;
  message: string | MessageState | undefined;
}

export interface MessageState {
  type: ToastType;
  messageText?: string;
  duration?: number;
  position?: ToastPosition;
  onCloseAction?: (data?: unknown) => void;
}

export const defaultMessageObj: MessageState = {
  type: "info",
  messageText: "",
  duration: 20000,
  position: "top",
};
