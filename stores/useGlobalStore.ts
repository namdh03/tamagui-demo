import type { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { CountSlice, createCountSlice } from './count/count.slice';
import { createLanguageSlice, LanguageSlice } from './language/language.slice';
import { create } from '.';

export type Store = {
  language: LanguageSlice;
  count: CountSlice;
};

export type ImmerStateCreator<T> = StateCreator<Store, [['zustand/immer', never]], [], T>;

export const useGlobalStore = create<Store>()(
  immer((...a) => ({
    language: createLanguageSlice(...a),
    count: createCountSlice(...a),
  })),
);
