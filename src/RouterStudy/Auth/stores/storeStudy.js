import { create } from "zustand";

export const useRefreshStore = create((setter) => ({
    value: true,
    setValue: (callback) => setter(state => ({value: callback(state)})),
}));

export const useGlobalStateStore = create((set) => ({
    name: "이진혁",
    setName: (newName) => set(state => ({name: newName})),
    setName2: () => set(state => ({name: state.name + "님"}))
}));

// export const useRefreshStore = create((set) => ({
//     isRefresh: true,
//     refresh: () => set(state => ({isRefresh: true})),
//     reset: () => set(state => ({isRefresh: false})),
// }));