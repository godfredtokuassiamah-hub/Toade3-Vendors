import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope';
import type { TextStyle } from 'react-native';

import { colors } from './colors';

/**
 * Manrope only. Pick the weight with the family, never with `fontWeight`
 * (Android fakes a bold on top of the real face).
 */
export const fontFamily = {
  regular: 'Manrope_400Regular',
  medium: 'Manrope_500Medium',
  semibold: 'Manrope_600SemiBold',
  bold: 'Manrope_700Bold',
} as const;

/** Passed to `useFonts` in the root layout. */
export const fontAssets = {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
};

type TextPreset = Pick<TextStyle, 'fontFamily' | 'fontSize' | 'lineHeight' | 'color'>;

/** Type scale from Design/tokens.md. Spread into styles: `{ ...text.body }`. */
export const text = {
  hero: { fontFamily: fontFamily.bold, fontSize: 26, lineHeight: 32, color: colors.text },
  screenTitle: { fontFamily: fontFamily.bold, fontSize: 20, color: colors.text },
  sheetTitle: { fontFamily: fontFamily.bold, fontSize: 20, lineHeight: 26, color: colors.text },
  cardTitle: { fontFamily: fontFamily.bold, fontSize: 19, color: colors.text },
  total: { fontFamily: fontFamily.bold, fontSize: 18, color: colors.text },
  title: { fontFamily: fontFamily.semibold, fontSize: 18, color: colors.text },
  headerTitle: { fontFamily: fontFamily.bold, fontSize: 17, color: colors.text },
  sectionHeader: { fontFamily: fontFamily.semibold, fontSize: 16, color: colors.text },
  sheetButton: { fontFamily: fontFamily.semibold, fontSize: 16, color: colors.white },
  input: { fontFamily: fontFamily.regular, fontSize: 15, lineHeight: 20, color: colors.text },
  body: { fontFamily: fontFamily.regular, fontSize: 15, lineHeight: 20, color: colors.text },
  button: { fontFamily: fontFamily.semibold, fontSize: 15 },
  rowTitle: { fontFamily: fontFamily.semibold, fontSize: 15, color: colors.text },
  bodyMuted: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  link: { fontFamily: fontFamily.semibold, fontSize: 14, color: colors.primary },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 18,
    color: colors.textMuted,
  },
  meta: { fontFamily: fontFamily.regular, fontSize: 12, color: colors.textMuted },
  badge: { fontFamily: fontFamily.semibold, fontSize: 11 },
} as const satisfies Record<string, TextPreset>;

/** Cap for tab labels and count badges. */
export const maxFontScale = 1.3;
