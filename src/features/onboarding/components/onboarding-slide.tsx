import { Image } from 'expo-image';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, layout, spacing, text } from '@/theme';

import type { OnboardingSlide as Slide } from '../slides';

type Props = {
  slide: Slide;
  width: number;
  index: number;
  total: number;
};

/** One page of the orange hero card: photo (when available) with the title and body at the bottom. */
export const OnboardingSlide = memo(function OnboardingSlide({
  slide,
  width,
  index,
  total,
}: Props) {
  return (
    <View style={[styles.page, { width }]}>
      {slide.image != null && (
        <Image
          source={slide.image}
          contentFit="cover"
          transition={150}
          style={StyleSheet.absoluteFill}
          accessible={false}
        />
      )}
      <View
        style={styles.copy}
        accessible
        accessibilityLabel={`${slide.title} ${slide.body}. Page ${index + 1} of ${total}`}
      >
        <Text style={styles.title} accessibilityRole="header">
          {slide.title}
        </Text>
        <Text style={styles.body}>{slide.body}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  copy: {
    paddingHorizontal: layout.sheetGutter,
    paddingBottom: layout.onboardingCopyBottom,
    gap: spacing.lg,
  },
  title: {
    ...text.hero,
    color: colors.white,
    maxWidth: 320,
  },
  body: {
    ...text.subtitle,
    color: colors.white,
    maxWidth: 360,
  },
});
