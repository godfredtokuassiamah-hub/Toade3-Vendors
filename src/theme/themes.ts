import { darkColors, lightColors, type ColorTokens } from './colors';
import { fontFamily, fontSize, fontWeight, radius, spacing } from './tokens';

export type ColorScheme = 'light' | 'dark';

export type Theme = {
  scheme: ColorScheme;
  colors: ColorTokens;
  spacing: typeof spacing;
  radius: typeof radius;
  typography: {
    fontFamily: typeof fontFamily;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
  };
};

const shared = {
  spacing,
  radius,
  typography: { fontFamily, fontSize, fontWeight },
};

export const themes: Record<ColorScheme, Theme> = {
  light: { scheme: 'light', colors: lightColors, ...shared },
  dark: { scheme: 'dark', colors: darkColors, ...shared },
};
