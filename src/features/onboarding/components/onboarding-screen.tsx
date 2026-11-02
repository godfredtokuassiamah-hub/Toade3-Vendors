import { ImageBackground } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions, View, type ListRenderItem } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useReducedMotion,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { BackButton } from '@/components/ui';
import { selectionHaptic } from '@/lib/haptics';
import { colors, layout, motion, radius } from '@/theme';

import { onboardingSlides, type OnboardingSlide as Slide } from '../slides';
import { OnboardingSlide } from './onboarding-slide';
import { PageDots } from './page-dots';

const background = require('@/assets/images/onboarding-background.png');

type Props = {
  /** Called after the last slide's button is pressed. */
  onFinish: () => void;
};

/** Three-slide vendor onboarding: swipe or use the arrow buttons. Back shows from slide 2. */
export function OnboardingScreen({ onFinish }: Props) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const reduceMotion = useReducedMotion();
  const listRef = useRef<Animated.FlatList<Slide>>(null);

  const [index, setIndex] = useState(0);
  const scrollX = useSharedValue(0);

  const total = onboardingSlides.length;
  const isLast = index === total - 1;

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  // Keep the React index in sync with the scroll position (covers swipes and button presses).
  useAnimatedReaction(
    () => (width > 0 ? Math.round(scrollX.value / width) : 0),
    (current, previous) => {
      if (previous !== null && current !== previous) {
        scheduleOnRN(setIndex, current);
        scheduleOnRN(selectionHaptic);
      }
    },
  );

  const goTo = (next: number) => {
    listRef.current?.scrollToOffset({ offset: next * width, animated: !reduceMotion });
  };

  const onNext = () => (isLast ? onFinish() : goTo(index + 1));
  const onBack = () => goTo(Math.max(0, index - 1));

  const renderItem: ListRenderItem<Slide> = ({ item, index: itemIndex }) => (
    <OnboardingSlide slide={item} width={width} index={itemIndex} total={total} />
  );

  return (
    <ImageBackground
      source={background}
      contentFit="cover"
      style={styles.screen}
      accessible={false}
    >
      <StatusBar style="light" />

      <View style={styles.card}>
        <Animated.FlatList
          ref={listRef}
          data={onboardingSlides}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          getItemLayout={(_, itemIndex) => ({
            length: width,
            offset: width * itemIndex,
            index: itemIndex,
          })}
        />
      </View>

      <View style={[styles.controls, { paddingBottom: insets.bottom + layout.cardPadding }]}>
        <View style={styles.side}>
          {index > 0 && (
            <Animated.View
              entering={FadeIn.duration(motion.fade)}
              exiting={FadeOut.duration(motion.fade)}
            >
              <BackButton onPress={onBack} accessibilityLabel="Back" variant="outline" />
            </Animated.View>
          )}
        </View>

        <PageDots count={total} activeIndex={index} scrollX={scrollX} pageWidth={width} />

        <View style={[styles.side, styles.sideEnd]}>
          <BackButton
            onPress={onNext}
            accessibilityLabel={isLast ? 'Get started' : 'Next'}
            variant="filled"
            direction="forward"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: radius.floatingCard,
    borderBottomRightRadius: radius.floatingCard,
    borderCurve: 'continuous',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: layout.sheetGutter,
    paddingTop: layout.aboveSheetButton,
  },
  side: {
    width: 60,
    height: 60,
  },
  sideEnd: {
    alignItems: 'flex-end',
  },
});
