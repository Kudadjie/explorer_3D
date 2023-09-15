import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppState {
  acknowledgementModal: {
    open: boolean;
  };
  currentPin: {
    open: boolean;
    //refactor to how content should look content: { description: "", measurements: "", ...}?
    content: string;
  };
  toggleCurrentPin: () => void;
  toggleAcknowledgementModal: () => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    acknowledgementModal: {
      open: false,
    },
    currentPin: {
      open: false,

      content: "",
    },

    toggleCurrentPin: () =>
      set((state) => ({
        currentPin: {
          ...state.currentPin,
          open: state.currentPin.open ? false : true,
        },
      })),

    toggleAcknowledgementModal: () =>
      set((state) => ({
        acknowledgementModal: {
          open: state.acknowledgementModal.open ? false : true,
        },
      })),
  }))
);
