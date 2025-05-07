import { create } from "zustand";

interface PriceStore {
    price: number;
    incrementPrice: () => void;
    decrementPrice: () => void;
    resetPrice: () => void;
    getPrice: () => number;
}

const usePriceStore = create<PriceStore>((set, get) => ({
    price: 0,
    incrementPrice: () => set((state) => ({ price: state.price + 1 })),
    decrementPrice: () => set((state) => ({ price: state.price - 1 })),
    resetPrice: () => set({ price: 0 }),
    getPrice: () => get().price,
}));

export default usePriceStore;

