import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface InteractiveViwerState {
  acknowledgementModal: {
    open: boolean;
  };
  downloadsModal: {
    open: boolean;
  };
  currentPin: {
    open: boolean;
    //refactor to how content should look content: { description: "", measurements: "", ...}?
    content: string;
  };

  notification: {
    title: "Info" | "Success" | "Error" | "Warning" | null;
    content: string | null;
  };

  toggleCurrentPin: () => void;
  toggleAcknowledgementModal: () => void;
  toggleDownloadsModal: () => void;
  toggleNotification: (
    title: "Info" | "Success" | "Error" | "Warning" | null,
    content: string | null
  ) => void;
}

export const useInteractiveViewerStore = create<InteractiveViwerState>()(
  devtools((set) => ({
    acknowledgementModal: {
      open: false,
    },
    downloadsModal: {
      open: false,
    },
    currentPin: {
      open: true,

      content: "",
    },
    notification: {
      title: null,
      content: null,
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
    toggleDownloadsModal: () =>
      set((state) => ({
        downloadsModal: {
          open: state.downloadsModal.open ? false : true,
        },
      })),
    toggleNotification: (title = null, content = null) =>
      set((state) => ({
        notification: {
          title: state.notification.title ? null : title,
          content: state.notification.content ? null : content,
        },
      })),
  }))
);
