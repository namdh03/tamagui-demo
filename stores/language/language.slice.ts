import LOCAL_STORAGE from '@/constants/localStorage';
import localStorage from '@/utils/localStorage';

import { ImmerStateCreator } from '..';

export interface LanguageState {
  lng?: string;
}

export interface LanguageActions {
  actions: {
    setLanguage: (lng: string) => void;
    reset: () => void;
  };
}

export type LanguageSlice = LanguageState & LanguageActions;

const initialState: LanguageState = {
  lng: localStorage.getString(LOCAL_STORAGE.LANGUAGE) ?? 'en',
};

export const createLanguageSlice: ImmerStateCreator<LanguageSlice> = (set, _, store) => ({
  ...initialState,
  actions: {
    setLanguage: (lng: string) => {
      set((state) => {
        state.language.lng = lng;
      });
    },
    reset: () => set(() => store.getInitialState(), true),
  },
});
