import { router } from 'expo-router';
import { useEffect } from 'react';

import { LogoScreen } from '@/features/onboarding';

/** How long the brand screen shows before moving on. */
const LOGO_DURATION_MS = 1500;

export default function IndexScreen() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/onboarding'), LOGO_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return <LogoScreen />;
}
