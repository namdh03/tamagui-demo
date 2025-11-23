import APP_STORAGE from '~/constants/appStorage';
import { appStorage } from '~/utils/publicStorage';

import { ImmerStateCreator } from '../useGlobalStore';

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
  lng: appStorage.getString(APP_STORAGE.LANGUAGE) ?? 'en',
};

export const createLanguageSlice: ImmerStateCreator<LanguageSlice> = (set, _, store) => ({
  ...initialState,
  actions: {
    setLanguage: (lng: string) => {
      set((state) => {
        state.language.lng = lng;
      });
    },
    reset: () =>
      set((state) => {
        state.language = store.getInitialState().language;
      }),
  },
});
