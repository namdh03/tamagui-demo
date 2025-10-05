import type { StateCreator } from 'zustand';
import { create as actualCreate } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createLanguageSlice, LanguageSlice } from './language/language.slice';

export type Store = {
  language: LanguageSlice;
};

export type ImmerStateCreator<T> = StateCreator<Store, [['zustand/immer', never]], [], T>;

const storeResetFns = new Set<() => void>();

export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

export const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = actualCreate(stateCreator);
    storeResetFns.add(() => {
      store.setState(store.getInitialState(), true);
    });
    return store;
  };
}) as typeof actualCreate;

export const useStore = create<Store>()(
  immer((...a) => ({
    language: createLanguageSlice(...a),
  })),
);
