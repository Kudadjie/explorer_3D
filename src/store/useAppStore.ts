import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppState {
  forgotPwd: boolean;
  isLoginPage: boolean;
  errorNotification: boolean;
  successNotification: boolean;
  toggleLoginPage: (value: boolean) => void;
  toggleForgotPwdModal: (value: boolean) => void;
  toggleErrorNotification: (value: boolean) => void;
  toggleSuccessNotification: (value: boolean) => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    forgotPwd: false,
    isLoginPage: true,
    errorNotification: false,
    successNotification: false,
    toggleErrorNotification: (value) =>
      set((state) => {
        return {
          errorNotification: value,
        };
      }),
    toggleForgotPwdModal: (value) =>
      set((state) => {
        return {
          forgotPwd: value,
        };
      }),
    toggleLoginPage: (value) =>
      set((state) => {
        return {
          isLoginPage: value,
        };
      }),
    toggleSuccessNotification: (value) =>
      set((state) => {
        return {
          successNotification: value,
        };
      }),
  }))
);
