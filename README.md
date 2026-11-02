# Vendors

React Native app built with Expo (SDK 58), Expo Router, and TypeScript.

## Getting started

```bash
npm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
npm start                    # then press a (Android), i (iOS), or w (web)
```

## Scripts

| Script              | Purpose                             |
| ------------------- | ----------------------------------- |
| `npm start`         | Start the Metro dev server          |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`)   |
| `npm run lint`      | ESLint (Expo config + Prettier)     |
| `npm run lint:fix`  | Auto-fix lint issues                |
| `npm run format`    | Format all files with Prettier      |
| `npm run validate`  | Typecheck + lint + format check     |
| `npm run doctor`    | Check Expo dependency/config health |

Add packages with `npx expo install <pkg>` so versions match the SDK.

## Folder structure

```
src/
├── app/                 # Expo Router routes ONLY (thin screens, layouts)
│   ├── _layout.tsx      # Root layout: mounts AppProviders + root Stack
│   └── index.tsx        # Entry route
├── features/            # Feature modules (domain logic lives here)
│   └── <feature>/
│       ├── api/         # Endpoint calls + React Query hooks (useXQuery, useXMutation)
│       ├── components/  # Feature-specific UI
│       ├── hooks/
│       ├── store/       # Feature-local zustand store (if needed)
│       ├── types.ts
│       └── index.ts     # Public API of the feature
├── components/
│   ├── ui/              # Reusable design-system primitives (Button, Text, Input…)
│   └── layout/          # Screen containers, headers, spacers
├── theme/               # Toade3 design tokens: colors, text (Manrope), spacing, radius, shadows, sizes, motion
├── providers/           # App-wide providers (gesture, safe area, query, navigation theme)
├── services/api/        # HTTP client (fetch wrapper, auth header, ApiError)
├── lib/                 # queryClient, storage, secureStorage, haptics, format (money/dates)
├── store/               # Global zustand stores (session, app settings)
├── hooks/               # Shared hooks
├── config/              # Typed env config (EXPO_PUBLIC_*)
├── constants/           # App-wide constants
├── types/               # Shared TypeScript types
└── utils/               # Pure helper functions
assets/                  # Images, fonts, icons
```

### Conventions

- **Routes stay thin.** A file in `src/app/` composes components from `features/` and `components/`; it holds no business logic.
- **Dependency direction:** `app → features → components/ui, services, lib, theme, utils`. Features don't import from other features' internals, only from their `index.ts`.
- **Imports:** use the `@/` alias (`@/theme`, `@/services/api`). Deep relative imports (`../../`) are blocked by ESLint.
- **Server state** goes in React Query (`@tanstack/react-query`); **client state** goes in zustand. Don't mirror server data into zustand.
- **Persistence:** `lib/storage` (AsyncStorage) for non-sensitive data, `lib/secure-storage` (expo-secure-store) for tokens.
- **Design system:** all UI follows the Toade3 design system in [`Design/`](Design/README.md). Import tokens from `@/theme` (`colors`, `text`, `spacing`, `layout`, `radius`, `shadows`, `sizes`, `motion`); never hard-code hex values, fonts or radii. Manrope only, weight via `fontFamily`, never `fontWeight`. Light mode only.
- **File names:** kebab-case (`user-card.tsx`), components exported in PascalCase.

## Environment variables

Only `EXPO_PUBLIC_*` variables are bundled into the app and they are visible to users, so never store secrets in them. Access them through `@/config/env`.
