import { immer } from 'zustand/middleware/immer';

import { create } from '~/stores';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user?: User;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

export const useAuthStore = create<AuthState>()(
  immer((_) => ({
    ...initialState,
  })),
);

export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useUser = () => useAuthStore((state) => state.user);

export const initialize = (isAuthenticated: boolean, user?: User) =>
  useAuthStore.setState({
    isAuthenticated,
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
