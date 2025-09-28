import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from '@tamagui/core';

export const config = createTamagui(defaultConfig);

type CustomConfig = typeof config;

declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends CustomConfig {}
}
