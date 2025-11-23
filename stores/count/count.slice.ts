import { ImmerStateCreator } from '../useGlobalStore';

export interface CountState {
  value: number;
}

export interface CountActions {
  actions: {
    setCount: (value: number) => void;
    reset: () => void;
  };
}

export type CountSlice = CountState & CountActions;

const initialState: CountState = {
  value: 0,
};

export const createCountSlice: ImmerStateCreator<CountSlice> = (set, _, store) => ({
  ...initialState,
  actions: {
    setCount: (value: number) => {
      set((state) => {
        state.count.value = value;
      });
    },
    reset: () =>
      set((state) => {
        state.count = store.getInitialState().count;
      }),
  },
});
