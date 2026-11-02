# Toade3 Design System

Extracted from the Toade3 customer app (`Toade3-customer`, Expo SDK 58, React Native 0.88). Use these files to build the vendor app (or any other Toade3 surface) so it looks and behaves like the customer app.

| File | Contents |
| --- | --- |
| [tokens.md](tokens.md) | Colours, typography, spacing, radii, shadows, sizes, motion timings |
| [components.md](components.md) | Specs for every shared component (buttons, inputs, cards, sheets, chips, badges, tab bar, empty states) |
| [patterns.md](patterns.md) | Screen layout, headers, navigation, motion, haptics, accessibility, copy and formatting rules |

The source of truth is the code. When these docs and the code disagree, the code wins:

- Tokens: `src/theme/colors.ts`, `src/theme/typography.ts`
- Primitives: `src/components/ui/*`
- Tab bar: `src/components/navigation/*`

## Brand in one paragraph

Light, clean and warm. A white canvas with near-black text, one brand orange (`#E8682A`) for primary actions, prices in motion (ETAs) and selection, and a light orange tint (`#FDEFE6`) for selected or highlighted surfaces. Navy (`#152244`) is a secondary brand colour, used sparingly. Type is Manrope throughout. Cards are soft: rounded corners, light or no shadows, no heavy borders. Illustrations are Icons8 "3D Fluency" style. Glass and blur are used for floating chrome (tab bar, sheet backdrops). Motion is short (120–300 ms), eased out, never bouncy, and always respects Reduce Motion.

## Core rules

1. Never hard-code a colour or font family that exists as a token. Import from `theme` (`colors`, `fontFamily`, `text`).
2. Manrope only. Pick the weight with the font family (`Manrope_600SemiBold`), never with `fontWeight` (Android fakes a bold on top).
3. Orange means "primary action" or "selected". Red (`#D93025`) means error or destructive. Green (`#1E7F4F`) means success / progress. Don't mix these roles.
4. Every touch target is at least 44×44 pt (use `hitSlop` to reach it on small visuals).
5. Every animation has a Reduce Motion path (fade only, or no animation).
6. Icons go through the shared `Icon` component (SF Symbols on iOS, Material Symbols on Android/web).
7. Money is integer pesewas in code; format it with the shared helpers, never with floats.
8. Light mode only for now. There are no dark tokens yet; if the vendor app adds dark mode, add dark tokens next to the light ones rather than inventing colours per screen.

## For the vendor app

Copy `src/theme/` and the primitives in `src/components/ui/` (`PrimaryButton`, `FloatingLabelInput`, `BottomSheet`, `Icon`, `Avatar`, `BackButton`, `CheckCircle`, `Collapse`, `EmptyState`) as the starting kit. Extend the `Icon` map with vendor-specific icons (each needs an SF Symbol name and a Material Symbols name). Add vendor-only tokens to `colors.ts` with a comment saying where they are used, the same way the customer app does.

See "Known inconsistencies" at the end of [patterns.md](patterns.md) for the choices to standardise on.
