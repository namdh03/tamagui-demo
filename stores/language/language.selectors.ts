import { useGlobalStore } from '../useGlobalStore';

export const useLanguageLng = () => useGlobalStore((state) => state.language.lng);
export const useLanguageActions = () => useGlobalStore((state) => state.language.actions);
