import { Image, ImageBackground } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { fontFamily, fontSize, fontWeight, palette, spacing } from '@/theme';

const background = require('@/assets/images/onboarding-background.png');
const logo = require('@/assets/images/logo-icon.png');

// Source logo is 57x71; keep its aspect ratio.
const LOGO_WIDTH = 64;
const LOGO_HEIGHT = Math.round((LOGO_WIDTH * 71) / 57);

/** Brand screen: illustrated background with the black-tinted logo and app name. */
export function LogoScreen() {
  return (
    <ImageBackground source={background} contentFit="cover" style={styles.container}>
      {/* Background is light in both color schemes, so always use dark status bar content. */}
      <StatusBar style="dark" />
      <View
        style={styles.brand}
        accessible
        accessibilityRole="header"
        accessibilityLabel="Toade3 Retail"
      >
        <Image
          source={logo}
          tintColor={palette.black}
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
  },
  brand: {
    alignItems: 'center',
    gap: spacing.md,
  },
  logo: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  },
  name: {
    fontFamily: fontFamily.brand,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    letterSpacing: -0.3,
    color: palette.black,
  },
});
