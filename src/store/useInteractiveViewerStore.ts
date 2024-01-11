import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface InteractiveViwerState {
  acknowledgementModal: {
    open: boolean;
  };
  aboutModal: {
    open: boolean;
  };
  toggleAcknowledgementModal: () => void;
  toggleAboutModal: () => void;
}

export const useInteractiveViewerStore = create<InteractiveViwerState>()(
  devtools((set) => ({
    acknowledgementModal: {
      open: false,
    },
    aboutModal: {
      open: true,
    },
    toggleAcknowledgementModal: () =>
      set((state) => ({
        acknowledgementModal: {
          open: state.acknowledgementModal.open ? false : true,
        },
      })),
    toggleAboutModal: () =>
      set((state) => ({
        aboutModal: {
          open: state.aboutModal.open ? false : true,
        },
      })),
  }))
);
