import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppState {
  currentPin: {
    open: boolean;
    content: string;
  };
  toggleCurrentPin: () => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    currentPin: {
      open: true,
      content: "",
    },

    toggleCurrentPin: () =>
      set((state) => ({
        currentPin: {
          ...state.currentPin,
          open: state.currentPin.open ? false : true,
        },
      })),
  }))
);
