import { Image, ImageBackground } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, text } from '@/theme';

const background = require('@/assets/images/onboarding-background.png');
const logo = require('@/assets/images/logo-icon.png');

// Source logo is 57x71; keep its aspect ratio.
const LOGO_WIDTH = 64;
const LOGO_HEIGHT = Math.round((LOGO_WIDTH * 71) / 57);

/** Brand screen: illustrated background with the logo and app name in brand black. */
export function LogoScreen() {
  return (
    <ImageBackground
      source={background}
      contentFit="cover"
      style={styles.container}
      accessible={false}
    >
      <StatusBar style="dark" />
      <View
        style={styles.brand}
        accessible
        accessibilityRole="header"
        accessibilityLabel="Toade3 Retail"
      >
        <Image
          source={logo}
          tintColor={colors.text}
          contentFit="contain"
          style={styles.logo}
          accessible={false}
        />
        <Text style={styles.name}>Toade3 Retail</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  brand: {
    alignItems: 'center',
    gap: spacing.xxl,
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  },
  name: {
    ...text.hero,
  },
});
