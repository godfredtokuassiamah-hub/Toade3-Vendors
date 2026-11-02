import { Pressable, StyleSheet } from 'react-native';

import { colors, motion } from '@/theme';

import { Icon } from './icon';

type BackButtonProps = {
  onPress: () => void;
  accessibilityLabel: string;
  /** `outline` = white fill + coloured border and arrow; `filled` = coloured fill + white arrow. */
  variant?: 'outline' | 'filled';
  /** `back` points left, `forward` points right (e.g. onboarding "Next"). */
  direction?: 'back' | 'forward';
  size?: number;
  color?: string;
  disabled?: boolean;
};

/**
 * Circular arrow button used on onboarding/auth (Design/components.md > BackButton).
 * In-app screens use the 44 round icon button instead.
 */
export function BackButton({
  onPress,
  accessibilityLabel,
  variant = 'outline',
  direction = 'back',
  size = 60,
  color = colors.primary,
  disabled = false,
}: BackButtonProps) {
  const filled = variant === 'filled';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: filled ? color : colors.white,
          borderColor: color,
          borderWidth: filled ? 0 : 2,
          opacity: disabled ? 0.4 : pressed ? motion.pressOpacity : 1,
        },
      ]}
    >
      <Icon
        name={direction === 'back' ? 'arrowLeft' : 'arrowRight'}
        size={Math.round(size * 0.4)}
        color={filled ? colors.white : color}
        weight="semibold"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
