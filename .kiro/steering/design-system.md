---
inclusion: always
---

# Toade3 design system

All UI in this app must match the Toade3 design system so it stays consistent with the customer app. The full specs live in `Design/`:

- #[[file:Design/README.md]]
- #[[file:Design/tokens.md]]
- #[[file:Design/components.md]]
- #[[file:Design/patterns.md]]

## How it maps to this codebase

- Tokens are implemented in `src/theme/` and imported from `@/theme`:
  - `colors`, `statusTones` (colours), `text`, `fontFamily` (Manrope type scale)
  - `spacing`, `layout` (gutters/gaps), `radius`, `shadows` (`boxShadow` strings), `sizes`, `motion`
- Never hard-code a hex value, font family, radius or shadow that exists as a token. If a value is missing, add it to `src/theme/` with a comment saying where it is used.
- Typography: Manrope only. Choose weight via `fontFamily` (or a `text` preset), never `fontWeight`.
- **Vendor app deviation: `primary` is black (`#111111`), not orange.** Wherever `Design/` says orange / `#E8682A` (buttons, focus stroke, links, selection, dots, header gradient), use `colors.primary`. `primaryLight` is a light grey (`#F0F0F0`). Never hard-code the customer orange.
- Colour roles: `primary` = primary action / selected; `error` = error / destructive; `success` = progress / done. Don't mix roles.
- Light mode only. Don't add per-screen dark colours.
- Haptics through `src/lib/haptics.ts`; money, dates, ETAs, initials through `src/lib/format.ts`. Money is integer pesewas, displayed as `GHS 45.00`.
- Shared primitives (PrimaryButton, FloatingLabelInput, BottomSheet, Icon, Avatar, BackButton, CheckCircle, Collapse, EmptyState) go in `src/components/ui/` and must follow `Design/components.md`. Build them once, reuse everywhere.
- Every pressable: ≥ 44 pt target, `accessibilityRole`, full `accessibilityLabel`, `accessibilityState` where relevant. Every animation has a Reduce Motion path.
- Copy: sentence case, British spelling, short and plain.
- Where `Design/patterns.md` lists "Known inconsistencies", use the recommended option.
