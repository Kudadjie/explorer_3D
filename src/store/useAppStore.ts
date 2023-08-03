// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// interface AppState {
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
// }

// export const useAppStore = create<AppState>()(
//   devtools((set) => ({
//     errorNotification: {
//       //TODO - Implement a self removing feature
//       show: false,
//       msg: {},
//     },
//     successNotification: {
//       //TODO - Implement a self removing feature
//       show: false,
//       msg: {},
//     },

//     toggleErrorNotification: (value, msg) =>
//       set((state) => {
//         //notifications have to disapper after a while
//         return {
//           errorNotification: {
//             show: value,
//             msg: !msg ? "" : msg,
//           },
//         };
//       }),
//     toggleSuccessNotification: (value, msg) =>
//       //notifications have to disapper after a while
//       set((state) => {
//         return {
//           successNotification: {
//             show: value,
//             msg: msg,
//           },
//         };
//       }),
//   }))
// );
