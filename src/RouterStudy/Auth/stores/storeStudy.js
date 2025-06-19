import { create } from "zustand";

export const useStore = create((set) => ({
  value: true, //초기값
  setValue: (callback) => set((state) => ({ value: callback(state) })),
}));

// export const useRefreshStore = create((set) => ({
//   isRefresh: true, //초기값
//   refresh: () => set((state) => ({ isRefresh: true })), //setter
//   reset: () => set((state) => ({ isRefresh: false })), //
// }));

export const useGlobalStateStore = create((set) => ({
  name: "이진혁",
  setName: (newName) => set((state) => ({ name: newName })),
  setName2: () => set((state) => ({ name: state.name + "님" })),
}));

export const useLogin = create((set) => ({
  isLogin: false,
  setLogin: () => set((state) => ({ isLogin: true })),
  setLogout: () => set((state) => ({ isLogin: false })),
}));