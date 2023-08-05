import { State, create } from "zustand";
import { devtools } from "zustand/middleware";
import * as O from "optics-ts";

interface AppState {
  //   errorNotification: {
  //     show: boolean;
  //     msg: any;
  //   };
  //   successNotification: {
  //     show: boolean;
  //     msg: any;
  //   };

  //   toggleErrorNotification: (value: boolean, msg?: string) => void;
  //   toggleSuccessNotification: (value: boolean, msg?: string) => void;

  toolbarSubmenu: {
    open: boolean;
    // submenu: {
    //   option1: {
    //     open: boolean;
    //     // submenu: "" | null;
    //   };
    //   option2: {
    //     open: boolean;
    //     // submenu: "" | null;
    //   };
    //   option3: {
    //     open: boolean;
    //     // submenu: "" | null;
    //   };
    // };
  };

  toggleTopSubmenu: () => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    toolbarSubmenu: {
      open: false,
      //   submenu: {
      //     option1: {
      //       open: false,
      //     },
      //     option2: {
      //       open: false,
      //     },
      //     option3: {
      //       open: false,
      //     },
      //   },
    },

    toggleTopSubmenu: () =>
      set((state) => ({
        toolbarSubmenu: {
          open: state.toolbarSubmenu.open ? false : true,
        },
      })),
    // errorNotification: {
    //   //TODO - Implement a self removing feature
    //   show: false,
    //   msg: {},
    // },
    // successNotification: {
    //   //TODO - Implement a self removing feature
    //   show: false,
    //   msg: {},
    // },

    // toggleErrorNotification: (value, msg) =>
    //   set((state) => {
    //     //notifications have to disapper after a while
    //     return {
    //       errorNotification: {
    //         show: value,
    //         msg: !msg ? "" : msg,
    //       },
    //     };
    //   }),
    // toggleSuccessNotification: (value, msg) =>
    //   //notifications have to disapper after a while
    //   set((state) => {
    //     return {
    //       successNotification: {
    //         show: value,
    //         msg: msg,
    //       },
    //     };
    //   }),
  }))
);
