import { useStore } from '..';

export const useLanguageLng = () => useStore((state) => state.language.lng);
export const useLanguageActions = () => useStore((state) => state.language.actions);
