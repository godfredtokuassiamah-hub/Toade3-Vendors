import { useColorScheme } from '@/hooks/use-color-scheme';

import { themes, type Theme } from './themes';

/** Returns the active theme (colors + tokens) for the current color scheme. */
export function useTheme(): Theme {
  const scheme = useColorScheme();
  return themes[scheme === 'dark' ? 'dark' : 'light'];
}
