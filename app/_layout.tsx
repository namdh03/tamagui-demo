import 'react-native-reanimated';

import { useEffect } from 'react';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import i18next from 'i18next';
import { TamaguiProvider } from 'tamagui';

import LOCAL_STORAGE from '@/constants/localStorage';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { config } from '@/tamagui.config';
import localStorage from '@/utils/localStorage';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Listen for language changes
    i18next.on('languageChanged', (lng) => {
      localStorage.set(LOCAL_STORAGE.LANGUAGE, lng);
    });
  }, []);

  return (
    <TamaguiProvider config={config}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
