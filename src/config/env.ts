/**
 * Typed access to public environment variables.
 * Expo inlines `process.env.EXPO_PUBLIC_*` at build time, so each variable
 * must be referenced statically (no dynamic `process.env[key]` lookups).
 */
type AppEnv = 'development' | 'staging' | 'production';

const APP_ENVS: readonly AppEnv[] = ['development', 'staging', 'production'];

function parseAppEnv(value: string | undefined): AppEnv {
  return APP_ENVS.includes(value as AppEnv) ? (value as AppEnv) : 'development';
}

export const env = {
  appEnv: parseAppEnv(process.env.EXPO_PUBLIC_APP_ENV),
  apiUrl: process.env.EXPO_PUBLIC_API_URL ?? '',
} as const;

export const isDev = env.appEnv === 'development';
