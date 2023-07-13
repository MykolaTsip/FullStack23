import {create} from 'zustand';

export const storeCounter = create((set) => ({
    count: 0,
    setP: () => set(store => ({...store, count: store.count + 1})),
    setM: () => set(store => ({...store, count: store.count - 1}))
}))