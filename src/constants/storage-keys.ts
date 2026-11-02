/** Keys for `lib/storage` (AsyncStorage). Keep every key here to avoid collisions. */
export const StorageKeys = {
  onboardingCompleted: 'onboarding.completed',
} as const;

/** Keys for `lib/secure-storage` (encrypted). */
export const SecureKeys = {
  authToken: 'auth.token',
} as const;
