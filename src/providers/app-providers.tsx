import { DefaultTheme, ThemeProvider } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors } from '@/theme';

import { QueryProvider } from './query-provider';

// Light mode only (Design/patterns.md), so the navigation theme is static.
const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.white,
    text: colors.text,
    border: colors.hairline,
  },
};

/** Single composition point for every app-wide provider. Add new providers here. */
export function AppProviders({ children }: PropsWithChildren) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryProvider>
          <ThemeProvider value={navigationTheme}>{children}</ThemeProvider>
        </QueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
