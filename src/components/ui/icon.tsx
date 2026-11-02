import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import type { SFSymbol } from 'sf-symbols-typescript';

import { colors, sizes } from '@/theme';

type AndroidSymbol = NonNullable<Extract<SymbolViewProps['name'], object>['android']>;

/**
 * Named icon map (Design/components.md > Icons). Each entry has an SF Symbol
 * for iOS and a Material Symbols name for Android/web. Add icons here rather
 * than importing icon fonts directly.
 */
const icons = {
  arrowLeft: { ios: 'arrow.left', android: 'arrow_back' },
  arrowRight: { ios: 'arrow.right', android: 'arrow_forward' },
  chevronDown: { ios: 'chevron.down', android: 'keyboard_arrow_down' },
} as const satisfies Record<string, { ios: SFSymbol; android: AndroidSymbol }>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /** Only set when the icon carries meaning on its own; icons are decorative by default. */
  accessibilityLabel?: string;
};

export function Icon({
  name,
  size = sizes.icon,
  color = colors.text,
  weight = 'regular',
  accessibilityLabel,
}: IconProps) {
  const { ios, android } = icons[name];
  return (
    <SymbolView
      name={{ ios, android, web: android }}
      size={size}
      tintColor={color}
      weight={weight}
      style={{ width: size, height: size }}
      accessible={accessibilityLabel != null}
      accessibilityLabel={accessibilityLabel}
      importantForAccessibility={accessibilityLabel != null ? 'auto' : 'no-hide-descendants'}
    />
  );
}
