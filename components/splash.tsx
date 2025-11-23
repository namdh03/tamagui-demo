import { SplashScreen } from 'expo-router';

import { useIsInitialized } from '~/modules/auth/stores/useAuthStore';

SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const isInitialized = useIsInitialized();

  if (isInitialized) {
    SplashScreen.hide();
  }

  return null;
}
