import 'react-native-reanimated';

import { useEffect } from 'react';

import { AppStateStatus, Platform } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import i18next from 'i18next';
import { TamaguiProvider } from 'tamagui';

import LOCAL_STORAGE from '@/constants/localStorage';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAppState } from '@/hooks/useAppState';
import { useOnlineManager } from '@/hooks/useOnlineManager';
import { config } from '@/tamagui.config';
import localStorage from '@/utils/localStorage';

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
  const colorScheme = useColorScheme();
  useOnlineManager();
  useAppState(onAppStateChange);

  useEffect(() => {
    // Listen for language changes
    i18next.on('languageChanged', (lng) => {
      localStorage.set(LOCAL_STORAGE.LANGUAGE, lng);
    });
  }, []);

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
          <StatusBar style='auto' />
        </ThemeProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}
