import * as Haptics from 'expo-haptics';

/**
 * Fire-and-forget haptic wrappers (Design/patterns.md). They never throw,
 * so callers don't need to await or catch.
 */
function fire(run: () => Promise<void>) {
  run().catch(() => {});
}

/** Toggles, segment changes, swipe-to-delete commit. */
export function selectionHaptic() {
  fire(() => Haptics.selectionAsync());
}

/** Favourite toggle, small confirmations. */
export function lightHaptic() {
  fire(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light));
}

/** Order accepted, item saved, other completed actions. */
export function successHaptic() {
  fire(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success));
}

/** Validation failure (pair with the field shake). */
export function errorHaptic() {
  fire(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error));
}
