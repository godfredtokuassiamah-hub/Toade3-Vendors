/**
 * Color tokens. Components should consume semantic names (e.g. `text`,
 * `background`) via `useTheme()` rather than raw palette values.
 */
const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F7F7F8',
  gray100: '#F0F0F3',
  gray200: '#E0E1E6',
  gray500: '#60646C',
  gray400: '#B0B4BA',
  gray800: '#2E3135',
  gray900: '#212225',
  blue500: '#208AEF',
  red500: '#E5484D',
  green500: '#30A46C',
} as const;

export const lightColors = {
  primary: palette.blue500,
  background: palette.white,
  surface: palette.gray100,
  surfaceSelected: palette.gray200,
  text: palette.black,
  textSecondary: palette.gray500,
  border: palette.gray200,
  danger: palette.red500,
  success: palette.green500,
} as const;

export type ColorTokens = { [K in keyof typeof lightColors]: string };

export const darkColors: ColorTokens = {
  primary: palette.blue500,
  background: palette.black,
  surface: palette.gray900,
  surfaceSelected: palette.gray800,
  text: palette.white,
  textSecondary: palette.gray400,
  border: palette.gray800,
  danger: palette.red500,
  success: palette.green500,
};
