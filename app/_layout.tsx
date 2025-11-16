import 'react-native-reanimated';

import { useEffect } from 'react';

import { AppStateStatus, Platform } from 'react-native';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import i18next from 'i18next';
import { TamaguiProvider } from 'tamagui';

import APP_STORAGE from '~constants/appStorage';
import { useAppState } from '~hooks/useAppState';
import { useOnlineManager } from '~hooks/useOnlineManager';
import { config } from '~tamagui.config';
import { appStorage } from '~utils/publicStorage';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Create a client
const queryClient = new QueryClient();

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

function RootNavigator() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>
  );
}

export default function RootLayout() {
  useOnlineManager();
  useAppState(onAppStateChange);

  useEffect(() => {
    // Listen for language changes
    i18next.on('languageChanged', (lng) => {
      appStorage.set(APP_STORAGE.LANGUAGE, lng);
    });
  }, []);

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <RootNavigator />
        <StatusBar style='auto' />
      </TamaguiProvider>
    </QueryClientProvider>
  );
}
