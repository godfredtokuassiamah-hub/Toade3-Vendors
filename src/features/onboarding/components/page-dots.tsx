import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';

import { colors } from '@/theme';

const DOT = 6;
const ACTIVE_WIDTH = 30;

type DotProps = {
  index: number;
  scrollX: SharedValue<number>;
  pageWidth: number;
};

function Dot({ index, scrollX, pageWidth }: DotProps) {
  // Driven directly by the scroll position (user-controlled), so no Reduce Motion variant is needed.
  const style = useAnimatedStyle(() => {
    const progress = pageWidth > 0 ? scrollX.value / pageWidth : 0;
    const range = [index - 1, index, index + 1];
    return {
      width: interpolate(progress, range, [DOT, ACTIVE_WIDTH, DOT], 'clamp'),
      backgroundColor: interpolateColor(progress, range, [
        colors.disabledFill,
        colors.primary,
        colors.disabledFill,
      ]),
    };
  });

  return <Animated.View style={[styles.dot, style]} />;
}

type PageDotsProps = {
  count: number;
  activeIndex: number;
  scrollX: SharedValue<number>;
  pageWidth: number;
};

/** Pagination indicator: active page is a wide orange bar, others are grey dots. */
export function PageDots({ count, activeIndex, scrollX, pageWidth }: PageDotsProps) {
  return (
    <View
      style={styles.row}
      accessible
      accessibilityRole="text"
      accessibilityLabel={`Page ${activeIndex + 1} of ${count}`}
    >
      {Array.from({ length: count }, (_, index) => (
        <Dot key={index} index={index} scrollX={scrollX} pageWidth={pageWidth} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    height: DOT,
    borderRadius: DOT / 2,
  },
});
