import { immer } from 'zustand/middleware/immer';

import { create } from '~/stores';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user?: User | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const useAuthStore = create<AuthState>()(
  immer((_) => ({
    ...initialState,
  })),
);

export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useIsInitialized = () => useAuthStore((state) => state.isInitialized);
export const useUser = () => useAuthStore((state) => state.user);

export const initialize = ({ isAuthenticated, user }: Pick<AuthState, 'isAuthenticated' | 'user'>) =>
  useAuthStore.setState({
    isAuthenticated,
    isInitialized: true,
    user,
  });

export const authenticate = (user: User) =>
  useAuthStore.setState((state) => {
    state.isAuthenticated = true;
    state.user = user;
  });

export const deauthenticate = () =>
  useAuthStore.setState((state) => {
    state.isAuthenticated = false;
    state.user = undefined;
  });

export const resetAuthStore = () => useAuthStore.setState(useAuthStore.getInitialState());
