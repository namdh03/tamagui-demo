import { defaultConfig } from '@tamagui/config/v4';

import { createFont, createTamagui, GenericFont } from 'tamagui';

const SFProDisplayFace: GenericFont['face'] = {
  normal: { normal: 'SFProDisplay-Regular' },
  bold: { normal: 'SFProDisplay-Bold' },
  '400': { normal: 'SFProDisplay-Regular' },
  '500': { normal: 'SFProDisplay-Medium' },
  '600': { normal: 'SFProDisplay-Semibold' },
  '700': { normal: 'SFProDisplay-Bold' },
  '900': { normal: 'SFProDisplay-Black' },
};

const SFProDisplayFontsHeading = createFont({
  ...defaultConfig.fonts.heading,
  family: 'SFProDisplay-Regular',
  face: SFProDisplayFace,
});

const SFProDisplayFontsBody = createFont({
  ...defaultConfig.fonts.body,
  family: 'SFProDisplay-Regular',
  face: SFProDisplayFace,
});

export const config = createTamagui({
  ...defaultConfig,
  fonts: {
    ...defaultConfig.fonts,
    heading: SFProDisplayFontsHeading,
    body: SFProDisplayFontsBody,
  },

  themes: {
    ...defaultConfig.themes,
  },
});

type CustomConfig = typeof config;

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends CustomConfig {}
}
