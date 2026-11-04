/**
 * Colour tokens, from Design/tokens.md (Toade3 design system).
 * Light mode only. If dark mode is added, add dark tokens next to these
 * rather than inventing colours per screen.
 *
 * Never hard-code a colour in a component when a token exists here.
 */
export const colors = {
  // Brand
  // Vendor app: primary is black (the customer app uses orange #E8682A).
  // Roles are unchanged: primary = primary action / selected.
  primary: '#111111', // primary actions, links, ETA text, selection, focus stroke
  primaryLight: '#F0F0F0', // selected chip/row fill, "Popular" badge, initials avatar
  navy: '#152244', // secondary brand colour, use sparingly
  headerTop: '#000000', // top of the auth header gradient
  headerBottom: '#3A3A3A', // bottom of the auth header gradient
  cartBadge: '#3A3A3A', // count badge sitting on a primary (black) surface
  brandYellow: '#FCB501', // only as a low-alpha tint in the empty-state wash

  // Text
  text: '#111111', // primary text, titles, prices, active icons
  textMuted: '#6B6B6B', // secondary text, subtitles, meta lines, hints
  placeholder: '#8A8A8A', // placeholders, floating labels at rest
  disabledText: '#9E9E9E', // text on disabled buttons
  white: '#FFFFFF', // text on primary/dark/image surfaces; page, card, sheet background

  // Surfaces
  background: '#FFFFFF',
  surfaceCard: '#FAFAFA', // cards on white without a shadow
  surfaceMuted: '#F2F2F2', // round icon buttons, secondary fills, grey page behind white cards
  inputFill: '#EDEDED', // text field at rest
  inputFillFocused: '#F6F6F6', // text field focused
  imagePlaceholder: '#EFEFEF',
  imagePlaceholderIcon: '#BDBDBD',
  disabledFill: '#D9D9D9', // disabled button, grab handle, inactive dot

  // Lines
  border: '#EEEEEE',
  cardBorder: '#F0F0F0',
  hairline: '#ECECEC', // row dividers, header line on scroll, inactive progress
  controlBorder: '#DDDDDD', // chips, search field, segmented controls, switch off
  sliderTrack: '#E5E5E5',

  // Status
  success: '#1E7F4F',
  successBg: '#E7F5EC',
  error: '#D93025', // errors and destructive actions only
  errorBg: '#FDECEA',
  requiredRed: '#B00020', // "Required" badges on item options

  // Overlays and glass
  backdropDim: 'rgba(0,0,0,0.4)',
  backdropFrostIOS: 'rgba(255,255,255,0.4)',
  backdropFrostAndroid: 'rgba(255,255,255,0.75)',
  pillOnHeader: 'rgba(255,255,255,0.25)',
  tabCapsule: 'rgba(17,17,17,0.08)',
  glassOutline: 'rgba(17,17,17,0.10)',
  frostedFill: 'rgba(250,250,252,0.86)',
  tabInactive: '#8E8E93',

  // Vendor app only: short bottom gradient behind white copy on onboarding photos.
  scrim: 'rgba(0,0,0,0.55)',
  scrimClear: 'rgba(0,0,0,0)',
} as const;

export type ColorToken = keyof typeof colors;

/** Background/foreground pairs for status banners and pills. */
export const statusTones = {
  waiting: { background: colors.primaryLight, foreground: colors.primary },
  active: { background: colors.successBg, foreground: colors.success },
  done: { background: colors.successBg, foreground: colors.success },
  error: { background: colors.errorBg, foreground: colors.error },
} as const;

export type StatusTone = keyof typeof statusTones;
