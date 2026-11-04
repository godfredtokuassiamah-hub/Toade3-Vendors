import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
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

/** One page of the hero card: photo (when available) with the title and body at the bottom. */
export const OnboardingSlide = memo(function OnboardingSlide({
  slide,
  width,
  index,
  total,
}: Props) {
  return (
    <View style={[styles.page, { width }]}>
      {slide.image != null && (
        <>
          <Image
            source={slide.image}
            contentFit="cover"
            transition={150}
            style={StyleSheet.absoluteFill}
            accessible={false}
          />
          {/* Scrim keeps the white copy readable over light or busy artwork. */}
          <LinearGradient
            colors={[colors.scrimClear, colors.scrim]}
            // Reaches full strength by ~60% so the title (not just the body) sits on the darker part.
            locations={[0, 0.6]}
            style={styles.scrim}
            pointerEvents="none"
          />
        </>
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
  scrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '35%', // kept short: only the copy area is darkened
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
