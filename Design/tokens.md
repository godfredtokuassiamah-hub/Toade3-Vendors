# Design Tokens

Source: `src/theme/colors.ts`, `src/theme/typography.ts`, plus values repeated across components.

## Colour

### Brand

| Token | Value | Use |
| --- | --- | --- |
| `primary` | `#E8682A` | Primary buttons, links, active ETA text, selected chip text/border, focus stroke, switch track on, cart pill |
| `primaryLight` | `#FDEFE6` | Selected chip/row fill, "Popular" badge fill, initials avatar fill, waiting-status banner |
| `navy` | `#152244` | Secondary brand colour, used sparingly (empty-state wash tint) |
| `headerTop` | `#C9410F` | Top of the orange auth header gradient |
| `headerBottom` | `#F07A3E` | Bottom of the orange auth header gradient |
| (cart badge) | `#B84A18` | Darker orange for a count badge sitting on an orange surface |
| (brand yellow) | `#FCB501` | Only as a low-alpha tint in the empty-state wash |

### Text

| Token | Value | Use |
| --- | --- | --- |
| `text` | `#111111` | Primary text, titles, prices, active icons |
| `textMuted` | `#6B6B6B` | Secondary text, subtitles, meta lines, hints |
| `textSecondary` / `placeholder` | `#8A8A8A` | Placeholders, floating labels at rest, clear-field icon |
| `disabledText` | `#9E9E9E` | Text on disabled buttons |
| `white` | `#FFFFFF` | Text on orange / dark / image surfaces |

### Surfaces and lines

| Token | Value | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Page background, cards, sheets |
| `surfaceCard` | `#FAFAFA` | Food card fill (cards that sit on white without a shadow) |
| `surfaceMuted` | `#F2F2F2` | Round icon buttons, secondary action fills, grey page behind stacked white cards (order tracking), store cover fallback |
| `inputFill` | `#EDEDED` | Text field at rest |
| `inputFillFocused` | `#F6F6F6` | Text field focused |
| `imagePlaceholder` | `#EFEFEF` | Image box before / without a photo |
| `imagePlaceholderIcon` | `#BDBDBD` | Glyph inside an empty image box |
| `disabledFill` | `#D9D9D9` | Disabled button fill, sheet grab handle, inactive pagination dot |
| `border` | `#EEEEEE` | General borders |
| `cardBorder` | `#F0F0F0` | Card borders when used |
| `hairline` | `#ECECEC` | Dividers between rows, header bottom line on scroll, inactive progress segments |
| (control border) | `#DDDDDD` | 1–1.5 px outline on chips, search field, segmented controls, range pills, switch track off. Used in many files but not yet a token; add it as `controlBorder` |
| (slider track) | `#E5E5E5` | Slider / histogram off state |

### Status

| Token | Value | Use |
| --- | --- | --- |
| `success` | `#1E7F4F` | Order progress, "active/done" status text, progress segments |
| (success bg) | `#E7F5EC` | Background behind success text/banners |
| `error` | `#D93025` | Field error stroke and text, destructive buttons, cancelled status, discount badge, discounted price |
| (error bg) | `#FDECEA` | Background behind error text / enabled cancel button |
| `requiredRed` | `#B00020` | "Required" badges on item options |

Status tone pairs (from order tracking), use them for any status banner or pill:

| Tone | Background | Foreground |
| --- | --- | --- |
| waiting / pending | `primaryLight` `#FDEFE6` | `primary` `#E8682A` |
| active / in progress | `#E7F5EC` | `success` `#1E7F4F` |
| done | `#E7F5EC` | `success` `#1E7F4F` |
| error / cancelled | `#FDECEA` | `error` `#D93025` |

### Overlays and glass

| Use | Value |
| --- | --- |
| Sheet backdrop "dim" | `rgba(0,0,0,0.4)` |
| Sheet backdrop "frost", iOS | BlurView tint light, intensity 40, under `rgba(255,255,255,0.4)` |
| Sheet backdrop "frost", Android | `rgba(255,255,255,0.75)` (no blur) |
| Pill on orange header | `rgba(255,255,255,0.25)` |
| Selected tab capsule | `rgba(17,17,17,0.08)` |
| Glass outline | `rgba(17,17,17,0.10)` |
| Frosted fill (Android tab bar) | `rgba(250,250,252,0.86)` |

## Typography

Font: **Manrope** (`@expo-google-fonts/manrope`), four weights, each its own family:

| Key | Family | Weight |
| --- | --- | --- |
| `fontFamily.regular` | `Manrope_400Regular` | 400 |
| `fontFamily.medium` | `Manrope_500Medium` | 500 |
| `fontFamily.semibold` | `Manrope_600SemiBold` | 600 |
| `fontFamily.bold` | `Manrope_700Bold` | 700 |

Never set `fontWeight` alongside these.

### Type scale (as used)

| Role | Size / line | Weight | Colour |
| --- | --- | --- | --- |
| Hero title (status screens) | 26 / 32 | bold | text |
| Screen title | 20 | bold | text |
| Sheet / dialog title | 20 / 26 | bold | text, centred |
| Header bar title | 17 | bold | text |
| Card section title | 19 | bold | text |
| Total row | 18 | bold | text |
| `text.title` | 18 | semibold | text |
| Section header (feed) | 16 | semibold | text |
| Search input | 16 | medium | text |
| Sheet primary button | 16 | semibold | white |
| `text.body` / input text | 15 / 20 | regular | text |
| `text.button` | 15 | semibold | — |
| List row title / store name | 15 | semibold | text |
| Body copy in sheets / empty states | 14 / 20 | regular | textMuted, centred |
| Link / "View all" | 14 | semibold | primary |
| Chip label | 14 | medium (semibold when selected) | text (primary when selected) |
| `text.subtitle` / `text.caption` | 13 / 18 | regular | textMuted |
| Meta line (date, fee, ETA) | 12 | regular | textMuted |
| Small card title / price | 12 / 16 | semibold / bold | text |
| Badge, tab label, tiny meta | 11 | semibold (badge, tab) / regular | — |

Rules:
- Prices are **bold** (or semibold in dense lists), never regular.
- Muted grey (`#6B6B6B`) for anything secondary; don't use lighter greys for readable text.
- Tab labels cap font scaling at 1.3×. Count badges cap at 1.3× (`maxFontSizeMultiplier`).

## Spacing

There is no spacing token file; these values repeat across the app. Stick to them.

| Value | Use |
| --- | --- |
| 14 | Default horizontal page gutter (Home, Favourites, section headers, top bars) |
| 20 | Gutter inside sheets and dialogs; tab bar side inset |
| 16 | Card inner padding (vertical), field padding horizontal, gap above sheet bottom inset |
| 12 | Gap between cards in a list, gap between row elements, gap between icon and text in pills |
| 10 | Gap between grid columns, section header bottom margin |
| 8 | Card padding (food/store cards), small gaps, top-bar vertical padding |
| 6 / 4 | Badge gaps, icon-to-text gap in meta rows |
| 20 | Section header top margin |
| 24 | Space above the primary button in a sheet; extra bottom padding on stack screens |

## Radii

| Value | Use |
| --- | --- |
| 999 | Pills: cart bar, sheet primary buttons, secondary action buttons, outline buttons |
| 24 | Floating white cards (search sheet) |
| 22 | Bottom sheet top corners |
| 20 | Stacked content cards (order tracking), chips (`minHeight 40`) |
| 18 | List cards (order card) |
| 16 | Store card, segmented control track, quick-filter tile, header pills |
| 14 | Search field, thumbnails 64 px |
| 12 | Food card, image boxes, menu row photo, banners, segment inside a track |
| 10 | Text fields, full-width `PrimaryButton`, image inside food card, small square icon buttons |
| 8 | Small badges ("Closed", "Popular", "-20%") |
| size / 2 | Avatars, round icon buttons |

Use `borderCurve: "continuous"` on cards (iOS squircle corners).

## Shadows

Use CSS `boxShadow` (works on iOS, Android and web). Keep them soft.

| Level | Value | Use |
| --- | --- | --- |
| Subtle | `0px 2px 8px rgba(0,0,0,0.05)` | List cards (orders) |
| Card | `0px 2px 8px rgba(0,0,0,0.08)` | Store cards |
| Badge | `0px 1px 4px rgba(0,0,0,0.16–0.18)` | Heart badge, round "+" add button |
| Floating | `0 6px 18px rgba(0,0,0,0.18)` | Cart pill |
| Tab bar | `0px 8px 22px rgba(0,0,0,0.16)` | Floating tab bar |
| Overlay card | `0px 8px 24px rgba(0,0,0,0.14)` | Map preview card |

Cards on a white page either use a shadow (white fill) or a `surfaceCard` fill with no shadow. Don't combine a border and a shadow.

## Sizes

| Element | Size |
| --- | --- |
| Primary button / text field / search field height | 56 |
| Sheet primary button min height | 52 |
| Secondary text button min height | 48 |
| Round icon button | 44 (circle, `surfaceMuted` fill) |
| Chip min height | 40 (+ hitSlop 4 = 48) |
| Segment min height | 48 |
| Switch / list row min height | 56 |
| Top bar height (below safe area) | 52 (screens), 60 (Home) |
| Avatar | 44 (header), 48 (list logo, radius 12) |
| Thumbnail | 64 (radius 14) |
| Sheet / empty-state illustration | 96 (sheets), 120 (empty states) |
| Badge circle (heart) | 28 |
| Round add button | 32 (+ hitSlop 6 = 44) |
| Icon default | 20; 24 tab bar; 12–14 inline meta / chevrons |
| Grab handle | 36 × 4, radius 2 |
| Tab bar | width `min(380, screen − 40)`, height 68 expanded / 60 compact, 12 above the safe area |

## Motion

| Use | Duration | Easing |
| --- | --- | --- |
| Press scale (cards, pills) | 120 ms to 0.97 | timing |
| Field focus / label lift | 180 ms | out cubic |
| Button disabled ↔ enabled colour | 200 ms | timing |
| Fade in / total change | 220 ms | timing |
| Sheet / cart bar enter | 300 ms | out cubic |
| Sheet / cart bar exit | 250 ms | in cubic |
| Backdrop fade | 250 ms | timing |
| Error shake | 6 × 50 ms (−8, 8, −6, 6, −3, 0 px) | timing |
| Badge pop | 110 ms up to 1.18, 110 ms back | timing |
| Drag spring-back | spring damping 20, stiffness 220 | — |
| Ambient loop (empty-state wash) | 9000 ms, reverse, infinite | in-out sine |

No bouncy springs on enter/exit. Reduce Motion: replace slides and scales with a fade, stop loops.
