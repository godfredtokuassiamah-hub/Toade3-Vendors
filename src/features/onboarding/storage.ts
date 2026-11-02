import { StorageKeys } from '@/constants/storage-keys';
import { storage } from '@/lib/storage';

export async function hasCompletedOnboarding(): Promise<boolean> {
  return (await storage.get<boolean>(StorageKeys.onboardingCompleted)) === true;
}

export async function markOnboardingCompleted(): Promise<void> {
  await storage.set(StorageKeys.onboardingCompleted, true);
}
