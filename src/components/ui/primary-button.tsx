import { useEffect } from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { colors, motion, radius, sizes, text } from '@/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  /** Fill when enabled. Defaults to brand orange. */
  color?: string;
  accessibilityHint?: string;
};

/**
 * Full-width form button (Design/components.md > PrimaryButton): 56 tall,
 * radius 10. Fill animates between disabled and enabled over 200 ms.
 */
export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  color = colors.primary,
  accessibilityHint,
}: PrimaryButtonProps) {
  const reduceMotion = useReducedMotion();
  const enabled = useSharedValue(disabled ? 0 : 1);

  useEffect(() => {
    enabled.set(withTiming(disabled ? 0 : 1, { duration: reduceMotion ? 0 : motion.colorChange }));
  }, [disabled, enabled, reduceMotion]);

  const fillStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(enabled.value, [0, 1], [colors.disabledFill, color]),
  }));
  const labelStyle = useAnimatedStyle(() => ({
    color: interpolateColor(enabled.value, [0, 1], [colors.disabledText, colors.white]),
  }));

  const inert = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={inert}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled, busy: loading }}
      style={({ pressed }) =>
        pressed && !inert
          ? { opacity: motion.buttonPressOpacity, transform: [{ scale: motion.buttonPressScale }] }
          : undefined
      }
    >
      <Animated.View style={[styles.fill, fillStyle]}>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Animated.Text style={[styles.label, labelStyle]} numberOfLines={1}>
            {label}
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fill: {
    height: sizes.buttonHeight,
    borderRadius: radius.field,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    ...text.button,
  },
});
