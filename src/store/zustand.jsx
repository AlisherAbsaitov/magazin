import { create } from "zustand";

export const useStore = create((set) => ({
  product: localStorage.getItem("product"),
}));
