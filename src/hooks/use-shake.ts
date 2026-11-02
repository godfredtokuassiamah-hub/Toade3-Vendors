import {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const OFFSETS = [-8, 8, -6, 6, -3, 0];
const STEP_MS = 50;

/**
 * Error shake (Design/tokens.md > Motion: 6 × 50 ms). Returns an animated
 * style to apply and a `shake()` trigger. No-op with Reduce Motion.
 */
export function useShake() {
  const reduceMotion = useReducedMotion();
  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => ({ transform: [{ translateX: offset.value }] }));

  const shake = () => {
    if (reduceMotion) return;
    offset.set(withSequence(...OFFSETS.map((value) => withTiming(value, { duration: STEP_MS }))));
  };

  return { style, shake };
}
