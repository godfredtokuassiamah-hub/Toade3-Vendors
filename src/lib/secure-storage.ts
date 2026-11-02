import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

/**
 * Encrypted storage for sensitive values (auth tokens, credentials).
 * expo-secure-store is native-only; on web we fall back to in-memory storage
 * so nothing sensitive is written to localStorage.
 */
const memory = new Map<string, string>();
const isWeb = Platform.OS === 'web';

export const secureStorage = {
  async get(key: string): Promise<string | null> {
    if (isWeb) return memory.get(key) ?? null;
    return SecureStore.getItemAsync(key);
  },
  async set(key: string, value: string): Promise<void> {
    if (isWeb) {
      memory.set(key, value);
      return;
    }
    await SecureStore.setItemAsync(key, value);
  },
  async remove(key: string): Promise<void> {
    if (isWeb) {
      memory.delete(key);
      return;
    }
    await SecureStore.deleteItemAsync(key);
  },
};
