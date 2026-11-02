/** Spacing, radii, shadows, sizes and motion from Design/tokens.md. */

/** Spacing scale (only these values are used across Toade3 apps). */
export const spacing = {
  xxs: 4,
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
  xxl: 16,
  xxxl: 20,
  huge: 24,
} as const;

/** Semantic layout values. Prefer these in screens. */
export const layout = {
  gutter: 14, // horizontal page gutter on feeds and lists
  sheetGutter: 20, // gutter inside sheets and dialogs
  cardPadding: 16,
  listGap: 12, // gap between cards in a list
  gridGap: 10, // gap between grid columns
  sectionTop: 20,
  sectionBottom: 10,
  aboveSheetButton: 24,
  stackBottomExtra: 24, // extra bottom padding on stack screens
  onboardingCopyBottom: 40, // vendor-only: title/body inset from the bottom of the onboarding hero card
} as const;

export const radius = {
  badge: 8,
  field: 10, // text fields, full-width PrimaryButton
  image: 12, // food card, image boxes, banners
  search: 14, // search field, 64 px thumbnails
  storeCard: 16, // store card, segmented track, header pills
  listCard: 18,
  contentCard: 20, // stacked cards, chips
  sheet: 22, // bottom sheet top corners
  floatingCard: 24,
  pill: 999,
} as const;

/** CSS `boxShadow` values (iOS, Android, web). Don't combine with a border. */
export const shadows = {
  subtle: '0px 2px 8px rgba(0,0,0,0.05)',
  card: '0px 2px 8px rgba(0,0,0,0.08)',
  badge: '0px 1px 4px rgba(0,0,0,0.18)',
  floating: '0px 6px 18px rgba(0,0,0,0.18)',
  tabBar: '0px 8px 22px rgba(0,0,0,0.16)',
  overlay: '0px 8px 24px rgba(0,0,0,0.14)',
} as const;

export const sizes = {
  buttonHeight: 56, // primary button, text field, search field
  sheetButtonMinHeight: 52,
  secondaryButtonMinHeight: 48,
  iconButton: 44, // round icon button, min touch target
  minTouchTarget: 44,
  chipMinHeight: 40,
  segmentMinHeight: 48,
  rowMinHeight: 56,
  topBar: 52,
  topBarHome: 60,
  avatar: 44,
  listLogo: 48,
  thumbnail: 64,
  sheetIllustration: 96,
  emptyIllustration: 120,
  icon: 20,
  tabIcon: 24,
  grabHandle: { width: 36, height: 4 },
  headerPill: 32, // translucent pills on the brand header
  otpBoxHeight: 64, // vendor auth: each of the 6 OTP boxes
} as const;

/** Durations in ms. Short, eased out, never bouncy. Always provide a Reduce Motion path. */
export const motion = {
  press: 120, // scale to `pressScale`
  focus: 180, // field focus / label lift (out cubic)
  colorChange: 200, // button disabled <-> enabled
  fade: 220,
  enter: 300, // sheet / cart bar (out cubic)
  exit: 250, // (in cubic)
  backdrop: 250,
  pressScale: 0.97,
  buttonPressScale: 0.98,
  buttonPressOpacity: 0.85,
  pressOpacity: 0.7,
  dragSpring: { damping: 20, stiffness: 220 },
} as const;
