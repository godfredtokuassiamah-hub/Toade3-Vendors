# Patterns

How screens are put together in the customer app. Pair with [tokens.md](tokens.md) and [components.md](components.md).

## Platform and stack

- Expo SDK 58, React Native 0.88, React 19, React Compiler on, typed routes on.
- Navigation: Expo Router. Tabs in `src/app/(tabs)/` with a custom floating tab bar; everything else is a root-stack screen. Modals and pickers are bottom sheets (RN `Modal`), not routes.
- Animation: `react-native-reanimated` 4 + `react-native-worklets`, gestures with `react-native-gesture-handler`.
- Visual libs: `expo-image`, `expo-blur`, `expo-glass-effect`, `expo-linear-gradient`, `expo-symbols`, `expo-haptics`.
- Portrait only. Light mode only (no dark tokens yet).

## Screen layout

- Page background white. Detail screens that stack several cards use a `surfaceMuted` page with white cards.
- Horizontal gutter 14 on feeds and lists, 20 inside sheets.
- Safe areas via `useSafeAreaInsets`. Headers pad by `insets.top`; scroll content pads its bottom for the floating chrome:
  - Tab screens: tab bar height + 12 + safe area + 16.
  - Stack screens: safe area + 24 (+ cart bar height when the cart bar shows).
- Feeds: vertical scroll of sections. Each section is a `SectionHeader` + a horizontal row or 2-column grid.
- Lists use `FlatList` with `keyExtractor`, memoised rows (`memo`), `initialNumToRender` ~8.
- Headers stay pinned outside the scroll view; a hairline fades in under them once content scrolls.
- Status bar `dark` on white screens, `light` over the orange header or photos.

## Navigation

- Back is a 44 round `surfaceMuted` button with a left arrow, top-left.
- Header actions are 44 round buttons on the right.
- Tapping an item opens its detail as a bottom sheet over the current screen.
- Confirmations (clear cart, replace cart, delete) are compact `dim` bottom sheets with an illustration, not system alerts.
- Info explainers (what is a service charge?) are compact `dim` sheets with one "Got it" pill.
- Filters and pickers (language, country code) are full `frost` sheets with a header and a sticky footer.

## Interaction states

| State | Treatment |
| --- | --- |
| Pressed (generic) | opacity 0.7 |
| Pressed (primary button) | opacity 0.85 + scale 0.98 |
| Pressed (cards, cart pill) | scale 0.97 over 120 ms |
| Disabled button | grey fill `#D9D9D9`, label `#9E9E9E` |
| Disabled control | opacity 0.4 |
| Unavailable content (closed, sold out) | image opacity 0.45–0.5 + black label badge; stays in place |
| Out of range (too far) | whole card opacity 0.5 + explanatory meta text |
| Selected | orange border/text + light orange fill (chips, rows); dark border + bold (segments); filled icon + grey capsule (tabs) |
| Focused input | lighter fill + orange 1.5 px stroke |
| Error | red stroke + red 13 pt message under the field + shake + error haptic |
| Loading | spinner in place of the label; button inert |
| Success after an action | brief orange check icon + screen-reader announcement + success/light haptic |

## Haptics — `src/lib/haptics.ts`

Fire-and-forget wrappers that never throw:

- `selectionHaptic` — toggles, segment changes, swipe-to-delete commit.
- `lightHaptic` — favourite toggle, small confirmations.
- `successHaptic` — order placed, item added.
- `errorHaptic` — validation failure (with the shake).

## Motion rules

- Short and eased out: 120 ms press, 180–220 ms state changes, 250–300 ms enter/exit.
- Enter: slide up + fade (+ slight scale for floating pills). Exit: reverse with ease-in, then unmount.
- No bounce. Springs only for drag spring-back.
- `useReducedMotion()` everywhere: fade only, no shakes, no loops.
- Worklets: no default params, capture only primitives and shared values, call JS via `scheduleOnRN`. (A throwing UI-thread worklet crashes iOS.)

## Accessibility

- Touch targets ≥ 44 pt (use `hitSlop`).
- Every pressable sets `accessibilityRole` and a full `accessibilityLabel` that reads the whole card: "Jollof rice, from Auntie Ama, GHS 45.00, 18 mins, opens item details".
- `accessibilityState` for selected / disabled / busy / checked.
- Section titles and screen titles use `accessibilityRole="header"`.
- Decorative images and icons are hidden from screen readers.
- Sheets: modal to screen readers, focus the title on open, escape gesture closes.
- Announce async results (`AccessibilityInfo.announceForAccessibility`).
- Field errors use `accessibilityRole="alert"` and also go into the field's hint.
- Respect font scaling; cap only where layout would break (tab labels and count badges at 1.3×).
- Reduce Transparency → opaque surfaces in place of glass.
- Full WCAG conformance still needs manual testing with VoiceOver/TalkBack.

## Formatting and copy

### Money

- Stored as integer pesewas (minor units). Never multiply floats.
- Helpers in `src/lib/discovery/money.ts` and `src/lib/format.ts`:
  - `formatMinorFixed(4500)` → `GHS 45.00` (cards, totals, fees)
  - `formatMinor(4500)` → `GHS 45` (filters and summaries)
  - `formatCedi(1089)` → `GH₵10.89` (storefront menu, orders)
- Grouping with commas, no `Intl` (identical output on every device).

### Time and dates

- ETA: `18 mins`, `1 min`; ranges `20–35 min`.
- Dates: `10 Oct, 2026 3:15 PM`.
- Greeting by local time: morning 05:00–11:59, afternoon 12:00–16:59, evening otherwise.

### Names

- Initials: first + last word, uppercase (`James Mensah` → `JM`).
- Greet by first name.

### Voice

- Short, plain, friendly. Sentence case for titles and buttons ("Clear cart", "Keep my cart", "Start exploring").
- British spelling (favourites, colour).
- Confirmations say what happens and whether it can be undone: "This removes everything from {vendor}. You can't undo this."
- Empty states: title names the situation, body says how to fill it.
- Status words: "Closed", "Sold out", "Too far to deliver", "In progress", "Delivered", "Cancelled".

## Known inconsistencies (pick one in the vendor app)

These exist in the customer app today. Standardise on the recommended option in new work.

| Topic | In use | Recommendation |
| --- | --- | --- |
| Primary button shape | 56 tall radius 10 (`PrimaryButton`, forms) and 52 tall radius 999 pill (sheets, dialogs) | Radius 10 for full-width form submits, pill for sheet/dialog actions, as now. Don't add a third shape |
| Currency text | `GHS 45.00` and `GH₵45.00` | One format per app. `GHS 45.00` is the more common one in the customer app |
| Control border `#DDDDDD` | Hard-coded in ~10 files | Add a `controlBorder` token |
| Status backgrounds `#E7F5EC`, `#FDECEA` | Hard-coded in order tracking | Add `successBg`, `errorBg` tokens |
| Shadows | Several near-identical values, plus some legacy `shadow*` props | Use the levels in tokens.md via `boxShadow` |
| Spacing / radii | No token file | Add `spacing` and `radius` scales in `theme/` and use the values from tokens.md |
| `userInterfaceStyle` | `automatic` in app.json, but no dark styles | Set `light` until dark tokens exist |
