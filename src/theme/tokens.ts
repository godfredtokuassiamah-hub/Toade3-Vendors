import { Platform } from 'react-native';

/** 4pt spacing scale. */
export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 64,
} as const;

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
} as const;

const systemFonts = Platform.select({
  ios: { sans: 'system-ui', serif: 'ui-serif', rounded: 'ui-rounded', mono: 'ui-monospace' },
  web: {
    sans: 'ui-sans-serif, system-ui, sans-serif',
    serif: 'Georgia, serif',
    rounded: 'ui-rounded, sans-serif',
    mono: 'ui-monospace, monospace',
  },
  default: { sans: 'normal', serif: 'serif', rounded: 'normal', mono: 'monospace' },
}) ?? { sans: 'normal', serif: 'serif', rounded: 'normal', mono: 'monospace' };

export const fontFamily = {
  ...systemFonts,
  /**
   * Brand typeface (Airbnb Cereal). Falls back to the system font until the
   * font files are added to assets/fonts and loaded — then set this to the
   * loaded family name.
   */
  brand: systemFonts.sans,
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;
