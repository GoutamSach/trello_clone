import { create } from "zustand";

interface CardState {
  card: Card;
  getCard: () => void;
}
const useBearStore = create((set) => ({
  card: null,
}));
