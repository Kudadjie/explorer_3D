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
      open: true,

      content:
        "Consectetur esse dolore dolor aute aliqua cupidatat duis id dolor. Eu nostrud aliqua proident ad dolore est ea veniam voluptate ut cupidatat in duis nisi. Sunt proident id enim quis irure est culpa laborum. Incididunt deserunt pariatur id minim aliquip proident magna. Consectetur esse dolore dolor aute aliqua cupidatat duis id dolor. Eu nostrud aliqua proident ad dolore est ea veniam voluptate ut cupidatat in duis nisi. Sunt proident id enim quis irure est culpa laborum. Incididunt deserunt pariatur id minim aliquip proident magna.",
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
