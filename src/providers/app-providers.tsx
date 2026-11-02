import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import { QueryProvider } from './query-provider';

/** Single composition point for every app-wide provider. Add new providers here. */
export function AppProviders({ children }: PropsWithChildren) {
  const theme = useTheme();
  const navigationBase = theme.scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryProvider>
          <ThemeProvider
            value={{
              ...navigationBase,
              colors: {
                ...navigationBase.colors,
                primary: theme.colors.primary,
                background: theme.colors.background,
                card: theme.colors.background,
                text: theme.colors.text,
                border: theme.colors.border,
              },
            }}
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
