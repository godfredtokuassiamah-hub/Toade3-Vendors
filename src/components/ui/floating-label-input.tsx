import { useEffect, useRef, useState, type ComponentRef } from 'react';
import { Pressable, StyleSheet, TextInput, type TextInputProps } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useShake } from '@/hooks/use-shake';
import { colors, fontFamily, motion, radius, sizes, text } from '@/theme';

type FloatingLabelInputProps = Omit<TextInputProps, 'style' | 'placeholder'> & {
  label: string;
  /** Shown under the field in red and announced. Wins over the focus stroke. */
  error?: string | null;
  /** Focus stroke, cursor and selection colour. Defaults to `colors.primary`. */
  accentColor?: string;
};

const easeOut = Easing.out(Easing.cubic);

/**
 * Text field with a label that lifts on focus (Design/components.md > FloatingLabelInput).
 * 56 tall, radius 10, 1.5 px stroke. Shakes when a new error appears.
 */
export function FloatingLabelInput({
  label,
  error,
  accentColor = colors.primary,
  value,
  onFocus,
  onBlur,
  ...inputProps
}: FloatingLabelInputProps) {
  const inputRef = useRef<ComponentRef<typeof TextInput>>(null);
  const reduceMotion = useReducedMotion();
  const { style: shakeStyle, shake } = useShake();

  const [focused, setFocused] = useState(false);
  const lifted = focused || Boolean(value);

  const lift = useSharedValue(lifted ? 1 : 0);
  const focus = useSharedValue(0);

  useEffect(() => {
    const duration = reduceMotion ? 0 : motion.focus;
    lift.set(withTiming(lifted ? 1 : 0, { duration, easing: easeOut }));
    focus.set(withTiming(focused ? 1 : 0, { duration, easing: easeOut }));
  }, [lifted, focused, lift, focus, reduceMotion]);

  useEffect(() => {
    if (error) shake();
    // Shake only when the message changes, not when `shake` identity changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const hasError = Boolean(error);
  const transparentAccent = `${accentColor}00`;

  const boxStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      focus.value,
      [0, 1],
      [colors.inputFill, colors.inputFillFocused],
    ),
    borderColor: hasError
      ? colors.error
      : interpolateColor(focus.value, [0, 1], [transparentAccent, accentColor]),
  }));

  const labelStyle = useAnimatedStyle(() => ({
    top: interpolate(lift.value, [0, 1], [18, 7]),
    fontSize: interpolate(lift.value, [0, 1], [15, 11]),
  }));

  return (
    <Animated.View style={shakeStyle}>
      <Pressable
        onPress={() => inputRef.current?.focus()}
        accessible={false}
        importantForAccessibility="no"
      >
        <Animated.View style={[styles.box, boxStyle]}>
          <Animated.Text style={[styles.label, labelStyle]} numberOfLines={1} aria-hidden>
            {label}
          </Animated.Text>
          <TextInput
            ref={inputRef}
            {...inputProps}
            value={value}
            onFocus={(event) => {
              setFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setFocused(false);
              onBlur?.(event);
            }}
            accessibilityLabel={label}
            accessibilityHint={error ?? inputProps.accessibilityHint}
            cursorColor={accentColor}
            selectionColor={accentColor}
            placeholderTextColor={colors.placeholder}
            style={styles.input}
          />
        </Animated.View>
      </Pressable>

      {hasError && (
        <Animated.Text
          entering={FadeIn.duration(motion.fade)}
          exiting={FadeOut.duration(motion.fade)}
          style={styles.error}
          accessibilityRole="alert"
          accessibilityLiveRegion="polite"
        >
          {error}
        </Animated.Text>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: sizes.buttonHeight,
    borderRadius: radius.field,
    borderCurve: 'continuous',
    borderWidth: 1.5,
    paddingHorizontal: 16,
  },
  label: {
    position: 'absolute',
    left: 16,
    right: 16,
    fontFamily: fontFamily.regular,
    color: colors.placeholder,
  },
  input: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 7,
    height: 26,
    padding: 0,
    fontFamily: fontFamily.regular,
    fontSize: 15,
    color: colors.text,
  },
  error: {
    ...text.caption,
    color: colors.error,
    marginTop: 8,
  },
});
