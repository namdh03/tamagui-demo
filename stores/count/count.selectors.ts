import { useGlobalStore } from '../useGlobalStore';

export const useCountValue = () => useGlobalStore((state) => state.count.value);
export const useCountActions = () => useGlobalStore((state) => state.count.actions);
