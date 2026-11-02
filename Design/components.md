# Components

Specs for the shared building blocks. File paths point at the customer-app implementation to copy or mirror. Token names refer to [tokens.md](tokens.md).

## Buttons

### PrimaryButton (full-width form button) — `src/components/ui/PrimaryButton.tsx`

- Height 56, radius 10, full width.
- Enabled: `primary` fill, white `text.button` (15 semibold).
- Disabled: `disabledFill` fill, `disabledText` label, not pressable. Colour animates between states over 200 ms.
- Loading: white `ActivityIndicator` replaces the label, inert, `accessibilityState.busy`.
- Pressed: opacity 0.85, scale 0.98.
- Use on forms and onboarding/auth flows (sign in, profile, address).

### Pill primary (sheet / dialog action)

- Min height 52, radius 999, stretches to the sheet width.
- `primary` fill, white 16 semibold label. Pressed opacity 0.7.
- 24 above it from the body copy.

### Destructive pill

- Same as the pill primary with `error` fill. Use for "Clear cart", "Delete", and similar irreversible actions. Never use orange for destructive.

### Secondary text button (under a pill)

- Min height 48, no fill, 15 semibold `text`. 8 below the primary. Use for "Cancel" / "Keep my cart".

### Soft action button

- Min height 56, radius 999, `surfaceMuted` fill, 16 semibold `text`.
- Destructive variant: `#FDECEA` fill, `error` label. Disabled: `surfaceMuted` fill, `disabledText` label.

### Outline pill

- Min height 44, horizontal padding 20, radius 22, 1.5 px `text` border, 14 semibold `text` label. Use for low-emphasis calls to action in empty states ("Start exploring").

### Round icon button

- 44 × 44 circle, `surfaceMuted` fill, 20 pt icon. Orange icon for header actions (bell, chat); `text` colour for navigation (back) or utility (reorder). Pressed opacity 0.7.

### BackButton — `src/components/ui/BackButton.tsx`

- Circular, default 60 diameter. `outline` = white fill + 2 px coloured border + coloured arrow; `filled` = coloured fill + white arrow. Used on onboarding/auth. In-app screens use the 44 round icon button instead.

### Floating add button (on product photos)

- 32 circle, white, shadow `0 1 4 rgba(0,0,0,0.18)`, 16 pt `+` glyph in `text`. Sits 6 past the bottom-right corner of the photo. hitSlop 6. After a successful add it shows an orange check for a moment and announces "Added X to cart". Disabled: opacity 0.4.

## Inputs

### FloatingLabelInput — `src/components/ui/FloatingLabelInput.tsx`

- Height 56, radius 10, 1.5 px border, padding 16 horizontal.
- Rest: `inputFill`, transparent border, label 15 regular `placeholder` centred vertically.
- Focus: `inputFillFocused`, `primary` border (fades in from transparent orange), label lifts to the top and scales to 11 pt. Cursor and selection `primary`.
- Error: `error` border (wins over focus), 13 regular `error` message collapses in 8 below, optional shake. Error message is announced (`accessibilityRole="alert"`).
- Typed text 15 / 20 regular `text`, sits under the lifted label without moving.

### Search field — `src/components/search/SearchField.tsx`

- Min height 56, radius 14, 1.5 px `#DDDDDD` border, white fill, padding 14, gap 10.
- Leading 20 pt magnifier (becomes a back arrow when the search is expanded). Input 16 medium. Trailing clear button (`clearField` icon, 18 pt, `placeholder` colour) only when there is text.

### Switch row — `src/components/filters/SwitchRow.tsx`

- Min height 56. Label 15 semibold + hint 13 regular muted on the left, native `Switch` on the right.
- Track off `#DDDDDD`, on `primary`, thumb white.

### OTP input — `src/components/auth/OtpInput.tsx`

- Separate boxes, same fill/focus/error language as FloatingLabelInput (orange focus stroke, red error stroke, shake 360 ms).

## Selection controls

### Chip — `src/components/search/Chip.tsx`

- Min height 40 (+ hitSlop 4), radius 20, 1.5 px `#DDDDDD` border, white fill, padding 14 × 8, gap 6.
- Label 14 medium `text`.
- Selected: `primary` border, `primaryLight` fill, label 14 semibold `primary`.
- Removable (applied filter): trailing 12 pt close icon; reads "Remove filter X".
- Filled chip variant (action chips on order tracking): `surfaceMuted` fill, no border, 13 semibold.

### Segmented control — `src/components/filters/ScopeSegment.tsx`

- Track: radius 16, 1 px `#DDDDDD` border, padding 4, gap 4.
- Segment: min height 48, radius 12, optional 26 pt 3D icon + 15 medium `textMuted` label.
- Selected: white fill, 1.5 px `text` border, 15 bold `text` label. Uses `radiogroup` / `radio` roles.

### Selected list row (pickers like language/country)

- Row fill `selectionBg` (`#FDEFE6`), accent/check in `selection` (`#E8682A`).

### CheckCircle — `src/components/ui/CheckCircle.tsx`

- Filled circle with a white tick; used for radio-style selection and success marks.

## Cards

### Food / product card — `src/components/home/FoodCard.tsx`

- Padding 8, radius 12, `surfaceCard` fill, no shadow.
- Image 16:10, radius 10, `imagePlaceholder` behind; placeholder glyph 24 pt `imagePlaceholderIcon` if no photo.
- Title row 10 below image: name 12/16 semibold (2 lines max) + price 12/16 bold, right.
- Vendor 11 regular muted, 1 line.
- ETA row 8 below: 12 pt orange clock + 11 regular orange "18 mins".
- Status ("Closed", "Sold out"): image dims to 0.45, black badge top-left (radius 8, 11 semibold white). Unavailable items stay in place, never reordered.
- Optional heart badge top-right (28 white circle, soft shadow).
- Press: scale 0.97 over 120 ms.
- Grids: 2 columns, gutter 14, gap 10.

### Store card — `src/components/stores/StoreCard.tsx`

- Padding 8, radius 16 continuous, white, shadow `0 2 8 rgba(0,0,0,0.08)`.
- Cover 16:9, radius 12, `surfaceMuted` behind. No cover: centred 64 logo circle, or initials (20 bold muted on white circle).
- Name 15 semibold, 10 below cover. Meta row: bike icon + fee · clock icon + "20–35 min", 12 regular muted, 13/12 pt icons.
- Closed: cover dims to 0.5 + black "Closed" badge. Not deliverable: whole card opacity 0.5 + "Too far to deliver".

### List card (order card) — `src/components/orders/OrderCard.tsx`

- Row, padding 14, gap 12, radius 18 continuous, white, shadow `0 2 8 rgba(0,0,0,0.05)`. No divider lines between cards; 12 gap.
- Leading 48 logo, radius 12, `primaryLight` behind initials (16 semibold orange).
- Title 15 semibold, value 14 semibold below. Trailing 44 round icon button.
- Meta 12 regular muted: "10 Oct, 2026 3:15 PM · Status" with status semibold and coloured (orange active, red cancelled, muted done).
- Swipe left reveals a red delete backing (radius 18, trash icon + "Delete" 13 semibold white); past 96 px it deletes on release with a selection haptic.

### Menu row — `src/components/storefront/MenuItemRow.tsx`

- Horizontal row, min height 112, hairline bottom divider, gap 12.
- Left: badges (8 radius, 11 semibold): "Popular" = `primaryLight` / `primary`; discount "-20%" = `error` / white. Name 15 semibold (2 lines), subtitle 13 muted (2 lines), price 14 bold (red when discounted) with the original struck through in 13 muted.
- Right: square photo, radius 12, with the floating add button on its corner.

### Content card on grey page (order tracking, detail screens)

- Page `surfaceMuted`; white cards radius 20, padding 16 vertical, 10 apart. The first card under the header is flush (top radius 0).
- Card title 19 bold. Price rows min height 30: label 14 regular muted / value 14 regular `text`. Hairline divider with 10 vertical margin, then total 18 bold.

### Floating white card (search sheet) — `src/components/search/searchStyles.ts`

- White, radius 24, margin 12, shadow opacity 0.08, radius 16, offset y 4.

## Badges and status

| Badge | Spec |
| --- | --- |
| Status on image ("Closed", "Sold out") | `text` fill, 11 semibold white, padding 8 × 3, radius 8, top-left inset 6–8 |
| Popular | `primaryLight` fill, `primary` text |
| Discount | `error` fill, white text |
| Required | `requiredRed` (`#B00020`) |
| Count on orange | min 28 circle, `#B84A18`, 14 bold white |
| Status banner | radius 12, padding 16 × 14, 8 px dot + 14/19 medium text, colours from the status tone table in tokens.md |
| Progress | Segmented bar, 4 tall, radius 2, gap 6; off `hairline`, on `success`. Step labels 11 regular muted, active step 11 semibold `text` |

## Headers

### Screen top bar

- Height 52 below the safe area, padding 14 horizontal, gap 8. 44 round back button + 20 bold title, left aligned.
- Transparent over content when the screen has a hero/wash; white otherwise.

### Detail header (stack screens)

- Height 52, white, padding 8. 44 × 44 transparent icon buttons, title 17 bold flex 1.

### Home top bar — `src/components/home/HomeTopBar.tsx`

- Height 60, white, pinned (outside the scroll view). Avatar 44, then a tappable location line (15 semibold + chevron) over a greeting (12 regular muted), then 44 round orange-icon action buttons.
- A 1 px `hairline` fades in at the bottom once content scrolls under it (0 → 12 px scroll).

### Brand header (auth) — `src/components/auth/AuthHeader.tsx`

- Vertical gradient `headerTop` → `headerBottom`. White logo top-left; translucent white pills (32 tall, radius 16, `rgba(255,255,255,0.25)`, 14 medium white) top-right. A white sheet with rounded top corners overlaps its bottom.

### Section header — `src/components/home/SectionHeader.tsx`

- Padding 14, margin 20 top / 10 bottom. Title 16 semibold + 14 pt chevron, or title + trailing "View all" (14 semibold orange + 12 pt orange chevron, min height 44).

## Bottom sheets — `src/components/ui/BottomSheet.tsx`

- Rendered in a transparent RN `Modal`. White, top radius 22, grab handle 36 × 4 `disabledFill` 8 from the top.
- Two backdrops:
  - `frost` (default, for content sheets like filters, item detail, pickers): iOS blur + 40% white; Android 75% white.
  - `dim` (for confirmations and info): 40% black, spring-back without overshoot.
- Full sheets leave a gap of 10% of the screen above (min safe area + 8). Compact sheets use `fitContent` and sit on the bottom.
- Enter 300 ms out-cubic slide up; exit 250 ms in-cubic. Drag the handle/header down >120 px or flick >800 px/s to close. Tap backdrop or Android back to close. Reduce Motion: fade only.
- Keyboard: sheet top stays put, content shrinks above the keyboard.
- Accessibility: `accessibilityViewIsModal`, escape gesture closes, focus moves to the title once opened.

### Confirmation / info sheet layout — `ClearCartSheet.tsx`, `checkout/InfoSheet.tsx`

- `dim` + `fitContent`. Padding 20 horizontal, 16 top, bottom = max(safe area, 16). Centred content:
  1. 96 pt illustration (3D style)
  2. Title 20/26 bold, 16 below
  3. Message 14/20 regular muted, 8 below
  4. Pill primary (or destructive pill), 24 below
  5. Optional secondary text button, 8 below

## Floating cart bar — `src/components/cart/CartBar.tsx`

- Centred pill, min width 180, radius 999, `primary`, shadow `0 6 18 rgba(0,0,0,0.18)`, padding 20 left / 14 right, gap 12.
- Basket icon 22 white, total 17 semibold white, count badge on `#B84A18`.
- Sits 12 above the tab bar (tab screens) or 16 above the safe area (stack screens). Scroll content must add bottom padding for it.
- Enters with 24 pt rise + fade + 0.92 → 1 scale; badge pops when the count grows.

## Floating tab bar — `src/components/navigation/*`

- Capsule floating 12 above the safe area, side inset 20, max width 380, radius = height / 2, inner padding 6.
- Height 68 expanded, 60 compact (compacts while scrolling down).
- 5 tabs: 24 pt icon over an 11 pt semibold label, gap 2. Active `#111111` (filled icon), inactive `#8E8E93`.
- Selected tab: sliding capsule `rgba(17,17,17,0.08)`, 4 narrower than the cell each side.
- Material by device: iOS 26+ native Liquid Glass; older iOS blur (`systemThinMaterialLight`, 60) under 45% white; Android/web frosted fill `rgba(250,250,252,0.86)` + top sheen; Reduce Transparency → opaque white with 10% black outline. All translucent modes get a 10% black hairline outline and a white top rim.
- Shadow `0px 8px 22px rgba(0,0,0,0.16)`.
- Scroll content on tab screens pads its bottom by bar height + bottom gap + 16.

## Empty state — `src/components/ui/EmptyState.tsx`

- White page with a soft animated gradient wash across the top 42%: orange `rgba(232,104,42,0.28)` → navy `rgba(21,34,68,0.16)` → yellow `rgba(252,181,1,0.30)`, fading to white. Drifts slowly (9 s loop); frozen with Reduce Motion.
- Centred: 120 pt illustration, title 18 bold (16 below), body 14/20 muted max width 300 (8 below), optional outline pill or primary button (20 below).
- Copy pattern: title states the situation ("No orders yet"); body tells the user how to fill it.

## Avatar — `src/components/ui/Avatar.tsx`

- Circle, default 44. Photo, or initials (semibold `primary`, size × 0.36) on `primaryLight`. Decorative (hidden from screen readers).

## Icons — `src/components/ui/Icon.tsx`

- One component, a named map. Each entry: SF Symbol (outline + optional filled) for iOS, Material Symbols name for Android/web.
- Default 20 pt, `text` colour. Use `filled` for the active state (tabs, favourited heart). `weight` medium/semibold for small chevrons and arrows.
- Decorative by default; pass `accessibilityLabel` only when the icon carries meaning on its own.
- Add new icons to the map rather than importing icon fonts directly. `ExtraIcon` / `StoreGlyph` cover glyphs that aren't in the shared set (basket, plus).

## Illustrations and imagery

- Icons8 **3D Fluency** set for category tiles (≈48 pt, 300 px PNG), segment art (26 pt), sheet illustrations (96 pt) and empty states (120 pt). Keep new art in the same set so it matches. Icons8 needs attribution or a paid licence before release.
- Photos: `expo-image`, `contentFit="cover"`, `transition={150}`, `cachePolicy="memory-disk"`, `recyclingKey` in lists, always on an `imagePlaceholder` background.
- Images are decorative (`accessible={false}`); the surrounding control carries the label.
